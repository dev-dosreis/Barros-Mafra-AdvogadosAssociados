const rateLimitMap = new Map<string, { count: number; lastReset: number }>()

const WINDOW_SIZE_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS = 3

export function rateLimit(ip: string): { success: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record) {
    rateLimitMap.set(ip, { count: 1, lastReset: now })
    return { success: true, remaining: MAX_REQUESTS - 1 }
  }

  // Reset window if expired
  if (now - record.lastReset > WINDOW_SIZE_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now })
    return { success: true, remaining: MAX_REQUESTS - 1 }
  }

  // Check if limit exceeded
  if (record.count >= MAX_REQUESTS) {
    return { success: false, remaining: 0 }
  }

  // Increment count
  record.count++
  return { success: true, remaining: MAX_REQUESTS - record.count }
}

// Clean up old entries periodically (every 5 minutes)
setInterval(() => {
  const now = Date.now()
  const entries = Array.from(rateLimitMap.entries())
  for (const [ip, record] of entries) {
    if (now - record.lastReset > WINDOW_SIZE_MS * 5) {
      rateLimitMap.delete(ip)
    }
  }
}, 5 * 60 * 1000)
