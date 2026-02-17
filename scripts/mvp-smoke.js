const BASE_URL = process.env.SMOKE_BASE_URL || 'http://localhost:8080';

async function checkHealth() {
  const res = await fetch(`${BASE_URL}/api/health`);
  if (!res.ok) throw new Error(`health failed: ${res.status}`);
  const payload = await res.json();
  if (!payload.ok) throw new Error('health payload not ok');
}

async function signIn() {
  const res = await fetch(`${BASE_URL}/api/auth/sign-in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: process.env.SMOKE_EMAIL || 'admin@local.test',
      password: process.env.SMOKE_PASSWORD || 'admin123'
    })
  });

  if (!res.ok) {
    throw new Error(`sign-in failed: ${res.status}`);
  }

  return res.json();
}

async function me(token) {
  const res = await fetch(`${BASE_URL}/api/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error(`me failed: ${res.status}`);
  }

  const payload = await res.json();
  if (!payload.user) throw new Error('missing user from /auth/me');
}

(async () => {
  try {
    await checkHealth();
    const auth = await signIn();
    await me(auth.token);
    console.log('Smoke test passed');
  } catch (error) {
    console.error('Smoke test failed:', error.message);
    process.exit(1);
  }
})();
