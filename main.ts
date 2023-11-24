import { Hono } from "https://deno.land/x/hono@v3.4.1/mod.ts";

const app = new Hono();

app.all("/", (c) => {
  let id = (Date.now() + (performance.now() + Math.random()) * 1000000000000).toString(36) + c.headers.get("x-real-ip");

  return c.text(id)
});

Deno.serve(app.fetch);
