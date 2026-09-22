// Toujours relatif : l'API est servie sur le même domaine que le site (rewrite /api dans vercel.json,
// proxy Vite en local). Une URL absolue casse la connexion (CORS) dès que le domaine change.
const API_URL = '/api/v1';

export function getAuthToken(): string | null {
  return localStorage.getItem('kroma_token');
}

export function setAuthToken(token: string) {
  localStorage.setItem('kroma_token', token);
}

export function removeAuthToken() {
  localStorage.removeItem('kroma_token');
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>)
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || 'Une erreur est survenue.');
  }

  return data as T;
}

// Authentification (Login / Register hybride)
export async function apiLogin(email: string, password: string) {
  const data = await request<{ message: string; token: string; user: any }>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  if (data.token) {
    setAuthToken(data.token);
  }
  return data;
}

// Auth Google
export async function apiGoogleLogin(payload: { email: string; googleId: string; firstName?: string; lastName?: string; avatarUrl?: string }) {
  const data = await request<{ message: string; token: string; user: any }>('/auth/google', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
  if (data.token) {
    setAuthToken(data.token);
  }
  return data;
}

// Obtenir le profil
export async function apiGetProfile() {
  return request<{ user: any }>('/auth/me');
}

// Mettre à jour le profil
export async function apiUpdateProfile(payload: { firstName: string; lastName: string; avatarUrl?: string; company?: string; country?: string }) {
  return request<{ message: string; user: any }>('/auth/profile', {
    method: 'PUT',
    body: JSON.stringify(payload)
  });
}

// Passer une commande (Projet sur-mesure ou Pack)
export async function apiCreateOrder(payload: {
  type: 'CUSTOM' | 'PACK';
  customerEmail: string;
  customerName?: string;
  services: any;
  totalPrice?: number;
  notes?: string;
}) {
  return request<{ message: string; order: any }>('/orders', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

// Mes commandes
export async function apiGetMyOrders() {
  return request<{ orders: any[] }>('/orders/my-orders');
}

// Newsletter
export async function apiSubscribeNewsletter(email: string) {
  return request<{ message: string }>('/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email })
  });
}

// Avis / Feedbacks
export async function apiGetPublicFeedbacks(page = 1, limit = 20) {
  return request<{ feedbacks: any[]; total: number; page: number; totalPages: number }>(
    `/feedbacks?page=${page}&limit=${limit}`
  );
}

export async function apiGetMyFeedbacks() {
  return request<{ feedbacks: any[] }>('/feedbacks/my-feedbacks');
}

export async function apiCreateFeedback(rating: number, comment: string) {
  return request<{ message: string; feedback: any }>('/feedbacks', {
    method: 'POST',
    body: JSON.stringify({ rating, comment })
  });
}

// Admin — Stats
export async function apiAdminGetStats() {
  return request<{ users: number; orders: number; pendingOrders: number; validatedOrders: number; feedbacks: number; pendingFeedbacks: number; subscribers: number }>('/admin/stats');
}

// Admin — Commandes
export async function apiAdminGetOrders(status?: string) {
  const query = status ? `?status=${status}` : '';
  return request<{ orders: any[] }>(`/admin/orders${query}`);
}
export async function apiAdminUpdateOrderStatus(id: string, status: 'PENDING' | 'VALIDATED' | 'REJECTED') {
  return request<{ message: string; order: any }>(`/admin/orders/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status })
  });
}
export async function apiAdminDeleteOrder(id: string) {
  return request<{ message: string }>(`/admin/orders/${id}`, { method: 'DELETE' });
}

// Admin — Avis
export async function apiAdminGetFeedbacks() {
  return request<{ feedbacks: any[] }>('/admin/feedbacks');
}
export async function apiAdminToggleFeedback(id: string, isApproved: boolean) {
  return request<{ message: string; feedback: any }>(`/admin/feedbacks/${id}/approve`, {
    method: 'PATCH',
    body: JSON.stringify({ isApproved })
  });
}
export async function apiAdminDeleteFeedback(id: string) {
  return request<{ message: string }>(`/admin/feedbacks/${id}`, { method: 'DELETE' });
}

// Admin — Utilisateurs
export async function apiAdminGetUsers() {
  return request<{ users: any[] }>('/admin/users');
}
export async function apiAdminUpdateUserRole(id: string, role: 'USER' | 'ADMIN') {
  return request<{ message: string; user: any }>(`/admin/users/${id}/role`, {
    method: 'PATCH',
    body: JSON.stringify({ role })
  });
}
export async function apiAdminDeleteUser(id: string) {
  return request<{ message: string }>(`/admin/users/${id}`, { method: 'DELETE' });
}

// Admin — Notifications
export async function apiAdminGetNotifications() {
  return request<{ notifications: any[]; unreadCount: number }>('/admin/notifications');
}

// Admin — Newsletter
export async function apiAdminGetSubscribers() {
  return request<{ subscribers: any[] }>('/admin/subscribers');
}
