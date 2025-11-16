import { headers } from 'next/headers';

// In-memory store for rate limiting (for development)
// In production, use Redis
const requestStore = new Map();

const RATE_LIMIT_CONFIG = {
  contact: { limit: 5, window: 3600000 }, // 5 requests per hour
  newsletter: { limit: 10, window: 86400000 }, // 10 requests per day
};

export function getClientIp() {
  const headersList = headers();
  return headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || '127.0.0.1';
}

export function checkRateLimit(key, type = 'contact') {
  const config = RATE_LIMIT_CONFIG[type];
  const now = Date.now();
  const ip = getClientIp();
  const identifier = `${key}:${ip}`;

  if (!requestStore.has(identifier)) {
    requestStore.set(identifier, []);
  }

  const requests = requestStore.get(identifier);
  const validRequests = requests.filter((time) => now - time < config.window);

  if (validRequests.length >= config.limit) {
    return {
      allowed: false,
      retryAfter: Math.ceil((validRequests[0] + config.window - now) / 1000),
    };
  }

  validRequests.push(now);
  requestStore.set(identifier, validRequests);

  return { allowed: true };
}

// Cleanup old entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [key, requests] of requestStore.entries()) {
    const validRequests = requests.filter(
      (time) => now - time < Math.max(...Object.values(RATE_LIMIT_CONFIG).map((c) => c.window))
    );
    if (validRequests.length === 0) {
      requestStore.delete(key);
    } else {
      requestStore.set(key, validRequests);
    }
  }
}, 3600000);