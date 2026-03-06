/**
 * Base URL for API requests. In dev, Vite proxies /api to the local server.
 * In production, set VITE_API_URL to your deployed server URL if different from same origin.
 */
export const getApiUrl = () => (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

export async function sendContactForm(body: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  serviceOfInterest?: string;
}) {
  const base = getApiUrl();
  const res = await fetch(`${base}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error((data as { error?: string }).error ?? "Failed to send message");
  }
  return res.json();
}
