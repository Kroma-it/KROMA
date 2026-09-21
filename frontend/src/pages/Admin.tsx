import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Bell, Check, ChevronDown, ExternalLink,
  Loader2, LogOut, Mail, Menu as MenuIcon, Package,
  RefreshCw, Shield, ShieldOff, Star, Trash2, Users, X, LayoutDashboard,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import {
  apiAdminDeleteFeedback, apiAdminDeleteOrder, apiAdminDeleteUser,
  apiAdminGetFeedbacks, apiAdminGetNotifications, apiAdminGetOrders,
  apiAdminGetStats, apiAdminGetSubscribers, apiAdminGetUsers,
  apiAdminToggleFeedback, apiAdminUpdateOrderStatus, apiAdminUpdateUserRole,
} from '../utils/api';

/* ──────────────────────────── Types ──────────────────────────── */
type Section = 'overview' | 'users' | 'orders' | 'feedbacks' | 'newsletter' | 'notifications';
type OrderStatus = 'PENDING' | 'VALIDATED' | 'REJECTED';

/* ──────────────────────────── Helpers ──────────────────────────── */
const STATUS_FR: Record<OrderStatus, string> = { PENDING: 'En attente', VALIDATED: 'Validée', REJECTED: 'Rejetée' };
const STATUS_CLS: Record<OrderStatus, string> = {
  PENDING:   'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  VALIDATED: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  REJECTED:  'bg-rose-500/15 text-rose-300 border-rose-500/30',
};

function Badge({ s }: { s: string }) {
  const cls = STATUS_CLS[s as OrderStatus] ?? 'bg-white/10 text-white/60 border-white/20';
  return <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${cls}`}>{STATUS_FR[s as OrderStatus] ?? s}</span>;
}

function Spinner() { return <div className="flex justify-center py-16"><Loader2 className="h-6 w-6 animate-spin text-[#c084fc]" /></div>; }

function Empty({ label }: { label: string }) {
  return <p className="py-16 text-center text-sm text-slate-500">{label}</p>;
}

function StatCard({ label, value, sub, color }: { label: string; value: number | string; sub?: string; color: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#0f0718] p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{label}</p>
      <p className={`mt-2 text-4xl font-black ${color}`}>{value}</p>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

function Avatar({ user, size = 8 }: { user: any; size?: number }) {
  const s = `h-${size} w-${size}`;
  if (user?.avatarUrl) return <img src={user.avatarUrl} alt="" className={`${s} rounded-full object-cover`} />;
  const initials = `${user?.firstName?.[0] ?? '?'}${user?.lastName?.[0] ?? ''}`.toUpperCase();
  return (
    <div className={`${s} rounded-full bg-[#241838] border border-[#583385] flex items-center justify-center text-[#c084fc] text-xs font-bold`}>
      {initials}
    </div>
  );
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
}

function parseServices(raw: any): string {
  try {
    const p = typeof raw === 'string' ? JSON.parse(raw) : raw;
    if (Array.isArray(p)) return p.join(', ');
    return p?.name ?? JSON.stringify(p);
  } catch { return String(raw); }
}

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════════ */
export default function Admin() {
  const { user, isLoading, logout } = useAuth();
  const navigate = useNavigate();

  const [section, setSection]   = useState<Section>('overview');
  const [collapsed, setCollapsed] = useState(false);

  // data
  const [stats,         setStats]         = useState<any>(null);
  const [users,         setUsers]         = useState<any[]>([]);
  const [orders,        setOrders]        = useState<any[]>([]);
  const [feedbacks,     setFeedbacks]     = useState<any[]>([]);
  const [subscribers,   setSubscribers]   = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unread,        setUnread]        = useState(0);

  // loading
  const [loadingSection, setLoadingSection] = useState(false);
  const [busy,           setBusy]           = useState<string | null>(null);

  // filters
  const [orderFilter, setOrderFilter] = useState('');

  /* ── redirect if not admin ── */
  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'ADMIN')) navigate('/');
  }, [user, isLoading, navigate]);

  /* ── load data on section change ── */
  const load = useCallback(async (s: Section) => {
    setLoadingSection(true);
    try {
      switch (s) {
        case 'overview': {
          const [st, notifs] = await Promise.all([apiAdminGetStats(), apiAdminGetNotifications()]);
          setStats(st);
          setNotifications(notifs.notifications);
          setUnread(notifs.unreadCount);
          break;
        }
        case 'users':         { const r = await apiAdminGetUsers();          setUsers(r.users);               break; }
        case 'orders':        { const r = await apiAdminGetOrders();         setOrders(r.orders);             break; }
        case 'feedbacks':     { const r = await apiAdminGetFeedbacks();      setFeedbacks(r.feedbacks);       break; }
        case 'newsletter':    { const r = await apiAdminGetSubscribers();    setSubscribers(r.subscribers);   break; }
        case 'notifications': { const r = await apiAdminGetNotifications();  setNotifications(r.notifications); setUnread(r.unreadCount); break; }
      }
    } catch { /* silently fail */ }
    setLoadingSection(false);
  }, []);

  useEffect(() => { if (user?.role === 'ADMIN') load(section); }, [section, user]);

  useEffect(() => {
    if (section === 'orders') {
      apiAdminGetOrders(orderFilter || undefined).then(r => setOrders(r.orders)).catch(() => {});
    }
  }, [orderFilter]);

  /* ── actions ── */
  async function act<T>(key: string, fn: () => Promise<T>, onDone: (v: T) => void) {
    setBusy(key);
    try { onDone(await fn()); } catch { /* noop */ } finally { setBusy(null); }
  }

  const changeOrderStatus = (id: string, status: OrderStatus) =>
    act(`order-${id}`, () => apiAdminUpdateOrderStatus(id, status),
      () => setOrders(p => p.map(o => o.id === id ? { ...o, status } : o)));

  const removeOrder = (id: string) =>
    act(`del-order-${id}`, () => apiAdminDeleteOrder(id),
      () => setOrders(p => p.filter(o => o.id !== id)));

  const toggleFeedback = (id: string, current: boolean) =>
    act(`fb-${id}`, () => apiAdminToggleFeedback(id, !current),
      () => setFeedbacks(p => p.map(f => f.id === id ? { ...f, isApproved: !current } : f)));

  const removeFeedback = (id: string) =>
    act(`del-fb-${id}`, () => apiAdminDeleteFeedback(id),
      () => setFeedbacks(p => p.filter(f => f.id !== id)));

  const changeRole = (id: string, role: 'USER' | 'ADMIN') =>
    act(`role-${id}`, () => apiAdminUpdateUserRole(id, role),
      () => setUsers(p => p.map(u => u.id === id ? { ...u, role } : u)));

  const removeUser = (id: string) =>
    act(`del-user-${id}`, () => apiAdminDeleteUser(id),
      () => setUsers(p => p.filter(u => u.id !== id)));

  /* ── nav items ── */
  const nav: { id: Section; label: string; icon: any; badge?: number }[] = [
    { id: 'overview',      label: 'Vue d\'ensemble', icon: LayoutDashboard },
    { id: 'users',         label: 'Utilisateurs',    icon: Users },
    { id: 'orders',        label: 'Commandes',       icon: Package },
    { id: 'feedbacks',     label: 'Avis clients',    icon: Star },
    { id: 'newsletter',    label: 'Newsletter',      icon: Mail },
    { id: 'notifications', label: 'Notifications',   icon: Bell, badge: unread },
  ];

  const SECTION_TITLES: Record<Section, string> = {
    overview: 'Vue d\'ensemble', users: 'Utilisateurs', orders: 'Commandes',
    feedbacks: 'Avis clients', newsletter: 'Newsletter', notifications: 'Notifications',
  };

  if (isLoading) return <div className="flex min-h-screen items-center justify-center bg-[#07040d]"><Loader2 className="h-8 w-8 animate-spin text-[#c084fc]" /></div>;
  if (!user || user.role !== 'ADMIN') return null;

  return (
    <div className="flex min-h-screen bg-[#07040d] text-slate-100 font-sans">

      {/* ═══════ SIDEBAR ═══════ */}
      <aside className={`relative flex flex-col min-h-screen border-r border-white/10 bg-[#0f0718] transition-all duration-300 ease-in-out ${collapsed ? 'w-20' : 'w-64'}`}>

        {/* Logo + toggle */}
        <div className={`flex items-center border-b border-white/10 px-4 py-5 ${collapsed ? 'justify-center' : 'justify-between'}`}>
          {!collapsed && (
            <div className="flex items-center gap-2">
              <img src="/assets/logoMenu.svg" alt="Kroma" className="h-8" onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <span className="text-sm font-black tracking-widest text-[#c084fc] uppercase">Admin</span>
            </div>
          )}
          <button onClick={() => setCollapsed(c => !c)} className="rounded-lg p-1.5 text-slate-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
            <MenuIcon size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1.5 p-3 flex-1">
          {nav.map(({ id, label, icon: Icon, badge }) => {
            const active = section === id;
            return (
              <button
                key={id}
                onClick={() => setSection(id)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium border transition-all duration-200 cursor-pointer w-full text-left ${
                  active
                    ? 'bg-[#241838] text-[#c084fc] border-[#583385] shadow-[0_0_15px_rgba(192,132,252,0.1)]'
                    : 'text-slate-400 border-transparent hover:text-white hover:bg-[#1a1130] hover:border-[#3a2550]'
                }`}
              >
                <Icon size={18} className="shrink-0" />
                {!collapsed && <span className="flex-1 whitespace-nowrap">{label}</span>}
                {!collapsed && badge != null && badge > 0 && (
                  <span className="rounded-full bg-[#c084fc] px-1.5 py-0.5 text-xs font-bold text-[#07040d] leading-none">{badge}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom: user + actions */}
        <div className="border-t border-white/10 p-3 space-y-1">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium border border-transparent text-slate-400 hover:text-white hover:bg-[#1a1130] hover:border-[#3a2550] transition-all duration-200 cursor-pointer w-full"
          >
            <ExternalLink size={16} className="shrink-0" />
            {!collapsed && <span>Voir le site</span>}
          </button>
          <button
            onClick={() => { logout(); navigate('/'); }}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium border border-transparent text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/20 transition-all duration-200 cursor-pointer w-full"
          >
            <LogOut size={16} className="shrink-0" />
            {!collapsed && <span>Déconnexion</span>}
          </button>
          {!collapsed && (
            <div className="flex items-center gap-2 px-3 py-2 mt-1">
              <Avatar user={user} size={7} />
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate">{user.firstName} {user.lastName}</p>
                <p className="text-[10px] text-[#c084fc] font-bold">ADMIN</p>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <main className="flex-1 overflow-y-auto">

        {/* Top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/8 bg-[#07040d]/90 backdrop-blur-xl px-8 py-4">
          <h1 className="text-lg font-black text-white">{SECTION_TITLES[section]}</h1>
          <div className="flex items-center gap-3">
            {unread > 0 && section !== 'notifications' && (
              <button onClick={() => setSection('notifications')} className="flex items-center gap-1.5 rounded-full bg-[#241838] border border-[#583385] px-3 py-1.5 text-xs font-bold text-[#c084fc] cursor-pointer">
                <Bell size={12} /> {unread} notif{unread > 1 ? 's' : ''}
              </button>
            )}
            <button onClick={() => load(section)} disabled={loadingSection} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400 hover:text-white transition cursor-pointer disabled:opacity-40">
              <RefreshCw size={12} className={loadingSection ? 'animate-spin' : ''} /> Actualiser
            </button>
          </div>
        </div>

        <div className="px-8 py-8">
          {loadingSection && <Spinner />}

          {/* ─────────── OVERVIEW ─────────── */}
          {!loadingSection && section === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <StatCard label="Utilisateurs" value={stats?.users ?? '—'} color="text-[#c084fc]" />
                <StatCard label="Commandes" value={stats?.orders ?? '—'} sub={`${stats?.pendingOrders ?? 0} en attente`} color="text-sky-400" />
                <StatCard label="Avis soumis" value={stats?.feedbacks ?? '—'} sub={`${stats?.pendingFeedbacks ?? 0} à modérer`} color="text-yellow-400" />
                <StatCard label="Abonnés actifs" value={stats?.subscribers ?? '—'} color="text-emerald-400" />
              </div>

              <div>
                <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-500">Dernières notifications</h2>
                <div className="space-y-2">
                  {notifications.slice(0, 8).map(n => (
                    <div key={n.id} className={`flex items-start gap-3 rounded-xl border p-4 ${n.isRead ? 'border-white/5 bg-white/[0.02] opacity-50' : 'border-[#583385]/40 bg-[#241838]/40'}`}>
                      <div className={`mt-1 h-2 w-2 shrink-0 rounded-full ${n.isRead ? 'bg-slate-600' : 'bg-[#c084fc]'}`} />
                      <div>
                        <p className="text-sm text-slate-200">{n.message}</p>
                        <p className="text-xs text-slate-600 mt-0.5">{fmt(n.createdAt)}</p>
                      </div>
                      {!n.isRead && <span className="ml-auto rounded-full bg-[#c084fc]/20 px-2 py-0.5 text-[10px] font-bold text-[#c084fc]">Nouveau</span>}
                    </div>
                  ))}
                  {notifications.length === 0 && <Empty label="Aucune notification." />}
                </div>
              </div>
            </div>
          )}

          {/* ─────────── UTILISATEURS ─────────── */}
          {!loadingSection && section === 'users' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500">{users.length} utilisateur{users.length > 1 ? 's' : ''}</p>
              {users.length === 0 && <Empty label="Aucun utilisateur." />}
              {users.map(u => (
                <div key={u.id} className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/8 bg-[#0f0718] px-5 py-4">
                  <Avatar user={u} size={10} />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white text-sm">{u.firstName} {u.lastName}</p>
                    <p className="text-xs text-slate-400 truncate">{u.email}</p>
                    <p className="text-xs text-slate-600 mt-0.5">Inscrit le {fmt(u.createdAt)} · {u._count?.orders ?? 0} commande{(u._count?.orders ?? 0) > 1 ? 's' : ''} · {u._count?.feedbacks ?? 0} avis</p>
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-black ${u.role === 'ADMIN' ? 'bg-[#241838] text-[#c084fc] border-[#583385]' : 'bg-white/5 text-slate-400 border-white/10'}`}>{u.role}</span>
                  <div className="flex items-center gap-2">
                    {busy === `role-${u.id}` ? <Loader2 size={16} className="animate-spin text-[#c084fc]" /> : (
                      <>
                        {u.role === 'USER' ? (
                          <button onClick={() => changeRole(u.id, 'ADMIN')} title="Promouvoir admin" className="flex items-center gap-1.5 rounded-lg border border-[#583385]/50 bg-[#241838] px-3 py-1.5 text-xs font-bold text-[#c084fc] hover:bg-[#2d1f45] transition cursor-pointer">
                            <Shield size={13} /> Admin
                          </button>
                        ) : u.id !== user.id ? (
                          <button onClick={() => changeRole(u.id, 'USER')} title="Rétrograder user" className="flex items-center gap-1.5 rounded-lg border border-slate-600/40 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-400 hover:text-white transition cursor-pointer">
                            <ShieldOff size={13} /> User
                          </button>
                        ) : null}
                      </>
                    )}
                    {u.id !== user.id && (
                      busy === `del-user-${u.id}` ? <Loader2 size={14} className="animate-spin text-rose-400" /> : (
                        <button onClick={() => removeUser(u.id)} className="rounded-lg border border-rose-500/20 bg-rose-500/10 px-2.5 py-1.5 text-xs text-rose-400 hover:bg-rose-500/20 transition cursor-pointer" title="Supprimer">
                          <Trash2 size={13} />
                        </button>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─────────── COMMANDES ─────────── */}
          {!loadingSection && section === 'orders' && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <select value={orderFilter} onChange={e => setOrderFilter(e.target.value)}
                  className="rounded-xl border border-white/10 bg-[#0f0718] px-4 py-2 text-sm text-white focus:border-[#583385] focus:outline-none cursor-pointer">
                  <option value="">Tous</option>
                  <option value="PENDING">En attente</option>
                  <option value="VALIDATED">Validées</option>
                  <option value="REJECTED">Rejetées</option>
                </select>
                <p className="text-xs text-slate-500">{orders.length} résultat{orders.length > 1 ? 's' : ''}</p>
              </div>
              {orders.length === 0 && <Empty label="Aucune commande." />}
              {orders.map(o => (
                <div key={o.id} className="rounded-2xl border border-white/8 bg-[#0f0718] p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs font-bold text-slate-500">#{o.id.substring(0, 8)}</p>
                        <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${o.type === 'PACK' ? 'bg-sky-500/15 text-sky-300 border-sky-500/30' : 'bg-violet-500/15 text-violet-300 border-violet-500/30'}`}>{o.type}</span>
                        <Badge s={o.status} />
                      </div>
                      <p className="font-bold text-white">{o.user?.firstName ?? o.customerName ?? '—'} {o.user?.lastName ?? ''}</p>
                      <p className="text-xs text-slate-400">{o.customerEmail}</p>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-1">{parseServices(o.services)}</p>
                      {o.notes && <p className="text-xs italic text-slate-600 mt-0.5">"{o.notes}"</p>}
                      <p className="text-xs text-slate-700 mt-1">{fmt(o.createdAt)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      {o.totalPrice != null && <p className="text-sm font-black text-[#c084fc]">{o.totalPrice} €</p>}
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {busy === `order-${o.id}` ? <Loader2 size={16} className="animate-spin text-[#c084fc]" /> : (
                          <>
                            {o.status !== 'VALIDATED' && (
                              <button onClick={() => changeOrderStatus(o.id, 'VALIDATED')} className="flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1.5 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 transition cursor-pointer">
                                <Check size={12} /> Valider
                              </button>
                            )}
                            {o.status !== 'REJECTED' && (
                              <button onClick={() => changeOrderStatus(o.id, 'REJECTED')} className="flex items-center gap-1 rounded-lg border border-rose-500/30 bg-rose-500/10 px-2.5 py-1.5 text-xs font-bold text-rose-300 hover:bg-rose-500/20 transition cursor-pointer">
                                <X size={12} /> Rejeter
                              </button>
                            )}
                            {o.status !== 'PENDING' && (
                              <button onClick={() => changeOrderStatus(o.id, 'PENDING')} className="flex items-center gap-1 rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-2.5 py-1.5 text-xs font-bold text-yellow-300 hover:bg-yellow-500/20 transition cursor-pointer">
                                <ChevronDown size={12} /> Attente
                              </button>
                            )}
                          </>
                        )}
                        {busy === `del-order-${o.id}` ? <Loader2 size={14} className="animate-spin text-rose-400" /> : (
                          <button onClick={() => removeOrder(o.id)} className="rounded-lg border border-rose-500/20 bg-rose-500/10 px-2.5 py-1.5 text-xs text-rose-400 hover:bg-rose-500/20 transition cursor-pointer">
                            <Trash2 size={13} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─────────── AVIS ─────────── */}
          {!loadingSection && section === 'feedbacks' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500">{feedbacks.length} avis · {feedbacks.filter(f => !f.isApproved).length} à modérer</p>
              {feedbacks.length === 0 && <Empty label="Aucun avis." />}
              {feedbacks.map(f => (
                <div key={f.id} className={`rounded-2xl border p-5 transition ${f.isApproved ? 'border-emerald-500/15 bg-emerald-500/5' : 'border-white/8 bg-[#0f0718]'}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar user={f.user} size={7} />
                        <div>
                          <p className="text-sm font-bold text-white">{f.user?.firstName} {f.user?.lastName}</p>
                          <p className="text-xs text-slate-500">{f.user?.email}</p>
                        </div>
                        <div className="flex gap-0.5 ml-1">
                          {Array.from({ length: f.rating }).map((_, i) => (
                            <Star key={i} size={12} className="fill-[#c084fc] text-[#c084fc]" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-slate-300 leading-6">"{f.comment}"</p>
                      <p className="text-xs text-slate-600 mt-1">{fmt(f.createdAt)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${f.isApproved ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' : 'bg-slate-700/30 text-slate-500 border-slate-600/30'}`}>
                        {f.isApproved ? 'Approuvé' : 'En attente'}
                      </span>
                      <div className="flex gap-1.5">
                        {busy === `fb-${f.id}` ? <Loader2 size={14} className="animate-spin text-[#c084fc]" /> : (
                          <button onClick={() => toggleFeedback(f.id, f.isApproved)} className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition cursor-pointer ${f.isApproved ? 'border-rose-500/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20' : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20'}`}>
                            {f.isApproved ? 'Désapprouver' : 'Approuver'}
                          </button>
                        )}
                        {busy === `del-fb-${f.id}` ? <Loader2 size={14} className="animate-spin text-rose-400" /> : (
                          <button onClick={() => removeFeedback(f.id)} className="rounded-lg border border-rose-500/20 bg-rose-500/10 px-2.5 py-1.5 text-xs text-rose-400 hover:bg-rose-500/20 transition cursor-pointer">
                            <Trash2 size={13} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─────────── NEWSLETTER ─────────── */}
          {!loadingSection && section === 'newsletter' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500">{subscribers.filter(s => s.isSubscribed).length} abonné{subscribers.filter(s => s.isSubscribed).length > 1 ? 's' : ''} actif{subscribers.filter(s => s.isSubscribed).length > 1 ? 's' : ''} sur {subscribers.length}</p>
              {subscribers.length === 0 && <Empty label="Aucun abonné." />}
              <div className="rounded-2xl border border-white/8 overflow-hidden">
                {subscribers.map((s, i) => (
                  <div key={s.id} className={`flex items-center gap-4 px-5 py-3.5 ${i < subscribers.length - 1 ? 'border-b border-white/5' : ''}`}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#241838] text-[#c084fc]">
                      <Mail size={14} />
                    </div>
                    <p className="flex-1 text-sm font-semibold text-white truncate">{s.email}</p>
                    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${s.isSubscribed ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' : 'bg-slate-700/30 text-slate-500 border-slate-600/30'}`}>
                      {s.isSubscribed ? 'Abonné' : 'Désabonné'}
                    </span>
                    <p className="text-xs text-slate-600 hidden sm:block">{fmt(s.subscribedAt)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─────────── NOTIFICATIONS ─────────── */}
          {!loadingSection && section === 'notifications' && (
            <div className="space-y-2">
              <p className="text-xs text-slate-500">{unread} non lue{unread > 1 ? 's' : ''} · {notifications.length} au total</p>
              {notifications.length === 0 && <Empty label="Aucune notification." />}
              {notifications.map(n => (
                <div key={n.id} className={`flex items-start gap-3 rounded-xl border p-4 ${n.isRead ? 'border-white/5 bg-white/[0.02] opacity-50' : 'border-[#583385]/50 bg-[#241838]/50'}`}>
                  <div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${n.isRead ? 'bg-slate-600' : 'bg-[#c084fc]'}`} />
                  <div className="flex-1">
                    <p className="text-sm text-slate-200">{n.message}</p>
                    <p className="text-xs text-slate-600 mt-0.5">{fmt(n.createdAt)}</p>
                  </div>
                  {!n.isRead && <span className="rounded-full bg-[#c084fc]/20 px-2 py-0.5 text-[10px] font-bold text-[#c084fc]">Nouveau</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
