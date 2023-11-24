import { Hono } from "https://deno.land/x/hono@v3.4.1/mod.ts";
import { toHashString } from "https://deno.land/std@0.188.0/crypto/to_hash_string.ts";

const encoder = new TextEncoder();
async function sha256(input: string): Promise<string> {
  const data = encoder.encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return toHashString(digest);
}

const app = new Hono();

app.all("/", (c) => {
  let id = sha256((Date.now() + (performance.now() + Math.random()) * 1000000000000).toString(36) + JSON.stringify(c.req.raw));

  return c.text(id)
});

Deno.serve(app.fetch);
