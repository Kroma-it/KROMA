import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  Check,
  ChevronDown,
  Loader2,
  Mail,
  Package,
  RefreshCw,
  Star,
  Users,
  X,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import {
  apiAdminGetNotifications,
  apiAdminGetOrders,
  apiAdminGetSubscribers,
  apiAdminToggleFeedback,
  apiAdminUpdateOrderStatus,
  apiGetPublicFeedbacks,
  apiGetMyFeedbacks,
} from '../utils/api';

type Tab = 'orders' | 'feedbacks' | 'subscribers' | 'notifications';
type OrderStatus = 'PENDING' | 'VALIDATED' | 'REJECTED';

const STATUS_LABELS: Record<OrderStatus, string> = {
  PENDING: 'En attente',
  VALIDATED: 'Validée',
  REJECTED: 'Rejetée',
};

const STATUS_COLORS: Record<OrderStatus, string> = {
  PENDING: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  VALIDATED: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  REJECTED: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
};

function StatusBadge({ status }: { status: string }) {
  const s = status as OrderStatus;
  return (
    <span className={`inline-block rounded-full border px-3 py-1 text-xs font-bold ${STATUS_COLORS[s] ?? 'bg-white/10 text-white border-white/20'}`}>
      {STATUS_LABELS[s] ?? status}
    </span>
  );
}

export default function Admin() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('orders');

  const [orders, setOrders] = useState<any[]>([]);
  const [orderFilter, setOrderFilter] = useState<string>('');
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [updatingOrder, setUpdatingOrder] = useState<string | null>(null);

  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [feedbacksLoading, setFeedbacksLoading] = useState(false);
  const [togglingFeedback, setTogglingFeedback] = useState<string | null>(null);

  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [subscribersLoading, setSubscribersLoading] = useState(false);

  const [notifications, setNotifications] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifLoading, setNotifLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'ADMIN')) {
      navigate('/');
    }
  }, [user, isLoading, navigate]);

  const loadOrders = useCallback(async () => {
    setOrdersLoading(true);
    try {
      const res = await apiAdminGetOrders(orderFilter || undefined);
      setOrders(res.orders);
    } catch {
      /* noop */
    } finally {
      setOrdersLoading(false);
    }
  }, [orderFilter]);

  const loadFeedbacks = useCallback(async () => {
    setFeedbacksLoading(true);
    try {
      const [pub, mine] = await Promise.all([
        apiGetPublicFeedbacks(1, 50),
        apiGetMyFeedbacks(),
      ]);
      const all = [...pub.feedbacks, ...mine.feedbacks];
      const unique = Array.from(new Map(all.map((f) => [f.id, f])).values());
      setFeedbacks(unique);
    } catch {
      /* noop */
    } finally {
      setFeedbacksLoading(false);
    }
  }, []);

  const loadFeedbacksAdmin = useCallback(async () => {
    setFeedbacksLoading(true);
    try {
      const res = await apiAdminGetOrders();
      const notifs = await apiAdminGetNotifications();
      setNotifications(notifs.notifications);
      setUnreadCount(notifs.unreadCount);
      setOrders(res.orders);

      const pub = await apiGetPublicFeedbacks(1, 100);
      setFeedbacks(pub.feedbacks);
    } catch {
      /* noop */
    } finally {
      setFeedbacksLoading(false);
    }
  }, []);

  const loadSubscribers = useCallback(async () => {
    setSubscribersLoading(true);
    try {
      const res = await apiAdminGetSubscribers();
      setSubscribers(res.subscribers);
    } catch {
      /* noop */
    } finally {
      setSubscribersLoading(false);
    }
  }, []);

  const loadNotifications = useCallback(async () => {
    setNotifLoading(true);
    try {
      const res = await apiAdminGetNotifications();
      setNotifications(res.notifications);
      setUnreadCount(res.unreadCount);
    } catch {
      /* noop */
    } finally {
      setNotifLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!user || user.role !== 'ADMIN') return;
    if (tab === 'orders') loadOrders();
    else if (tab === 'feedbacks') {
      apiGetPublicFeedbacks(1, 100)
        .then((res) => setFeedbacks(res.feedbacks))
        .catch(() => {})
        .finally(() => setFeedbacksLoading(false));
      setFeedbacksLoading(true);
    } else if (tab === 'subscribers') loadSubscribers();
    else if (tab === 'notifications') loadNotifications();
  }, [tab, user]);

  useEffect(() => {
    if (tab === 'orders') loadOrders();
  }, [orderFilter]);

  const handleStatusChange = async (orderId: string, status: OrderStatus) => {
    setUpdatingOrder(orderId);
    try {
      await apiAdminUpdateOrderStatus(orderId, status);
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status } : o))
      );
    } catch {
      /* noop */
    } finally {
      setUpdatingOrder(null);
    }
  };

  const handleToggleFeedback = async (id: string, current: boolean) => {
    setTogglingFeedback(id);
    try {
      await apiAdminToggleFeedback(id, !current);
      setFeedbacks((prev) =>
        prev.map((f) => (f.id === id ? { ...f, isApproved: !current } : f))
      );
    } catch {
      /* noop */
    } finally {
      setTogglingFeedback(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white">
        <Loader2 className="h-8 w-8 animate-spin text-fuchsia-400" />
      </div>
    );
  }

  if (!user || user.role !== 'ADMIN') return null;

  const tabs: { id: Tab; label: string; icon: typeof Package }[] = [
    { id: 'orders', label: 'Commandes', icon: Package },
    { id: 'feedbacks', label: 'Avis', icon: Star },
    { id: 'subscribers', label: 'Newsletter', icon: Mail },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-[#0a0512] text-white px-4 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-white md:text-4xl">Panel Admin</h1>
            <p className="mt-1 text-sm text-zinc-400">
              Connecté en tant que <span className="text-fuchsia-400">{user.email}</span>
            </p>
          </div>
          {unreadCount > 0 && (
            <span className="flex items-center gap-2 rounded-full bg-fuchsia-600/20 border border-fuchsia-500/30 px-4 py-2 text-sm font-bold text-fuchsia-300">
              <Bell className="h-4 w-4" />
              {unreadCount} non lue{unreadCount > 1 ? 's' : ''}
            </span>
          )}
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all cursor-pointer ${
                tab === id
                  ? 'bg-fuchsia-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)]'
                  : 'border border-white/10 bg-white/5 text-zinc-400 hover:border-fuchsia-500/30 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
              {id === 'notifications' && unreadCount > 0 && (
                <span className="ml-1 rounded-full bg-rose-500 px-1.5 py-0.5 text-xs text-white">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ─── COMMANDES ─── */}
        {tab === 'orders' && (
          <div>
            <div className="mb-4 flex items-center gap-3">
              <select
                value={orderFilter}
                onChange={(e) => setOrderFilter(e.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-fuchsia-500/50 focus:outline-none"
              >
                <option value="">Tous les statuts</option>
                <option value="PENDING">En attente</option>
                <option value="VALIDATED">Validées</option>
                <option value="REJECTED">Rejetées</option>
              </select>
              <button
                onClick={loadOrders}
                disabled={ordersLoading}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400 hover:text-white transition cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 ${ordersLoading ? 'animate-spin' : ''}`} />
                Rafraîchir
              </button>
            </div>

            {ordersLoading && (
              <div className="flex justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-fuchsia-400" />
              </div>
            )}

            {!ordersLoading && orders.length === 0 && (
              <p className="py-12 text-center text-zinc-500">Aucune commande.</p>
            )}

            <div className="flex flex-col gap-4">
              {orders.map((order) => {
                let serviceSummary = '';
                try {
                  const parsed = typeof order.services === 'string' ? JSON.parse(order.services) : order.services;
                  serviceSummary = Array.isArray(parsed)
                    ? parsed.join(', ')
                    : parsed?.name || JSON.stringify(parsed);
                } catch {
                  serviceSummary = order.services;
                }

                return (
                  <div
                    key={order.id}
                    className="rounded-2xl border border-white/8 bg-white/[0.04] p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold text-zinc-500">
                          #{order.id.substring(0, 8)} · {order.type}
                        </p>
                        <p className="mt-1 font-bold text-white">
                          {order.user?.firstName || order.customerName || '—'}{' '}
                          {order.user?.lastName || ''}
                        </p>
                        <p className="text-sm text-zinc-400">{order.customerEmail}</p>
                        <p className="mt-2 text-xs text-zinc-500 line-clamp-2">{serviceSummary}</p>
                        {order.notes && (
                          <p className="mt-1 text-xs italic text-zinc-600">{order.notes}</p>
                        )}
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <StatusBadge status={order.status} />
                        {order.totalPrice && (
                          <span className="text-sm font-bold text-fuchsia-300">
                            {order.totalPrice} €
                          </span>
                        )}

                        {updatingOrder === order.id ? (
                          <Loader2 className="h-5 w-5 animate-spin text-fuchsia-400" />
                        ) : (
                          <div className="flex gap-2">
                            {order.status !== 'VALIDATED' && (
                              <button
                                onClick={() => handleStatusChange(order.id, 'VALIDATED')}
                                className="flex items-center gap-1.5 rounded-lg bg-emerald-600/20 border border-emerald-500/30 px-3 py-1.5 text-xs font-bold text-emerald-300 hover:bg-emerald-600/40 transition cursor-pointer"
                              >
                                <Check className="h-3.5 w-3.5" />
                                Valider
                              </button>
                            )}
                            {order.status !== 'REJECTED' && (
                              <button
                                onClick={() => handleStatusChange(order.id, 'REJECTED')}
                                className="flex items-center gap-1.5 rounded-lg bg-rose-600/20 border border-rose-500/30 px-3 py-1.5 text-xs font-bold text-rose-300 hover:bg-rose-600/40 transition cursor-pointer"
                              >
                                <X className="h-3.5 w-3.5" />
                                Rejeter
                              </button>
                            )}
                            {order.status !== 'PENDING' && (
                              <button
                                onClick={() => handleStatusChange(order.id, 'PENDING')}
                                className="flex items-center gap-1.5 rounded-lg bg-yellow-600/20 border border-yellow-500/30 px-3 py-1.5 text-xs font-bold text-yellow-300 hover:bg-yellow-600/40 transition cursor-pointer"
                              >
                                <ChevronDown className="h-3.5 w-3.5" />
                                En attente
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="mt-3 text-right text-xs text-zinc-600">
                      {new Date(order.createdAt).toLocaleDateString('fr-FR', {
                        day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
                      })}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── AVIS ─── */}
        {tab === 'feedbacks' && (
          <div>
            {feedbacksLoading && (
              <div className="flex justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-fuchsia-400" />
              </div>
            )}
            {!feedbacksLoading && feedbacks.length === 0 && (
              <p className="py-12 text-center text-zinc-500">Aucun avis soumis.</p>
            )}
            <div className="flex flex-col gap-4">
              {feedbacks.map((f) => (
                <div
                  key={f.id}
                  className={`rounded-2xl border p-5 transition ${
                    f.isApproved
                      ? 'border-emerald-500/20 bg-emerald-500/5'
                      : 'border-white/8 bg-white/[0.04]'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {f.user?.avatarUrl && (
                          <img
                            src={f.user.avatarUrl}
                            alt="avatar"
                            className="h-8 w-8 rounded-full object-cover"
                          />
                        )}
                        <p className="font-bold text-white">
                          {f.user?.firstName} {f.user?.lastName}
                        </p>
                        <div className="flex gap-0.5">
                          {Array.from({ length: f.rating }).map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-fuchsia-400 text-fuchsia-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-zinc-300 leading-6">"{f.comment}"</p>
                      <p className="mt-2 text-xs text-zinc-600">
                        {new Date(f.createdAt).toLocaleDateString('fr-FR')}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className={`rounded-full border px-3 py-1 text-xs font-bold ${
                        f.isApproved
                          ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                          : 'bg-zinc-700/30 text-zinc-400 border-zinc-600/30'
                      }`}>
                        {f.isApproved ? 'Approuvé' : 'En attente'}
                      </span>

                      {togglingFeedback === f.id ? (
                        <Loader2 className="h-5 w-5 animate-spin text-fuchsia-400" />
                      ) : (
                        <button
                          onClick={() => handleToggleFeedback(f.id, f.isApproved)}
                          className={`rounded-lg border px-4 py-1.5 text-xs font-bold transition cursor-pointer ${
                            f.isApproved
                              ? 'border-rose-500/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20'
                              : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20'
                          }`}
                        >
                          {f.isApproved ? 'Désapprouver' : 'Approuver'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── ABONNÉS NEWSLETTER ─── */}
        {tab === 'subscribers' && (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-zinc-400">
                {subscribers.length} abonné{subscribers.length > 1 ? 's' : ''}
              </p>
              <button
                onClick={loadSubscribers}
                disabled={subscribersLoading}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400 hover:text-white transition cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 ${subscribersLoading ? 'animate-spin' : ''}`} />
                Rafraîchir
              </button>
            </div>

            {subscribersLoading && (
              <div className="flex justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-fuchsia-400" />
              </div>
            )}

            <div className="rounded-2xl border border-white/8 overflow-hidden">
              {subscribers.map((s, i) => (
                <div
                  key={s.id}
                  className={`flex items-center justify-between px-5 py-4 ${
                    i < subscribers.length - 1 ? 'border-b border-white/5' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-500/15 text-fuchsia-300">
                      <Mail className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-semibold text-white">{s.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full border px-3 py-1 text-xs font-bold ${
                      s.isSubscribed
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                        : 'bg-zinc-700/30 text-zinc-500 border-zinc-600/30'
                    }`}>
                      {s.isSubscribed ? 'Abonné' : 'Désabonné'}
                    </span>
                    <p className="text-xs text-zinc-600">
                      {new Date(s.subscribedAt).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
              ))}
              {!subscribersLoading && subscribers.length === 0 && (
                <p className="py-12 text-center text-zinc-500">Aucun abonné.</p>
              )}
            </div>
          </div>
        )}

        {/* ─── NOTIFICATIONS ─── */}
        {tab === 'notifications' && (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-zinc-400">
                {unreadCount} non lue{unreadCount > 1 ? 's' : ''} · {notifications.length} au total
              </p>
              <button
                onClick={loadNotifications}
                disabled={notifLoading}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400 hover:text-white transition cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 ${notifLoading ? 'animate-spin' : ''}`} />
                Rafraîchir
              </button>
            </div>

            {notifLoading && (
              <div className="flex justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-fuchsia-400" />
              </div>
            )}

            <div className="flex flex-col gap-3">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={`flex items-start gap-4 rounded-2xl border p-4 ${
                    n.isRead
                      ? 'border-white/5 bg-white/[0.02] opacity-60'
                      : 'border-fuchsia-500/20 bg-fuchsia-500/5'
                  }`}
                >
                  <div className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${n.isRead ? 'bg-zinc-600' : 'bg-fuchsia-400'}`} />
                  <div className="flex-1">
                    <p className="text-sm text-white">{n.message}</p>
                    <p className="mt-1 text-xs text-zinc-600">
                      {new Date(n.createdAt).toLocaleDateString('fr-FR', {
                        day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
                      })}
                    </p>
                  </div>
                  {!n.isRead && (
                    <span className="rounded-full bg-fuchsia-500/20 px-2 py-0.5 text-xs font-bold text-fuchsia-300">
                      Nouveau
                    </span>
                  )}
                </div>
              ))}
              {!notifLoading && notifications.length === 0 && (
                <p className="py-12 text-center text-zinc-500">Aucune notification.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
