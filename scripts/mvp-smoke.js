const baseUrl = process.env.SMOKE_API_URL || 'http://localhost:3001/api';

async function run() {
  const response = await fetch(`${baseUrl}/health`);
  if (!response.ok) {
    throw new Error(`Health check failed with status ${response.status}`);
  }

  const payload = await response.json();
  if (payload.status !== 'healthy') {
    throw new Error(`Unexpected health status: ${JSON.stringify(payload)}`);
  }

  console.log('Smoke test passed:', payload);
}

run().catch((error) => {
  console.error('Smoke test failed:', error.message);
  process.exit(1);
});
