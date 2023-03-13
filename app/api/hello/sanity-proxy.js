import { createProxyMiddleware } from "http-proxy-middleware";

export default function handler(req, res) {
  const { query, headers } = req;
  const target = "https://zaaqdy45.apicdn.sanity.io";

  createProxyMiddleware({ target, headers })(req, res);
}
