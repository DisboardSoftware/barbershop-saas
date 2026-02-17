const TOKEN_KEY = 'barbershop_token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const signOut = async () => {
  const token = getToken();
  if (token) {
    await fetch('/api/auth/sign-out', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
    }).catch(() => undefined);
  }
  clearToken();
};
