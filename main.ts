import { Hono } from "https://deno.land/x/hono@v3.4.1/mod.ts";

const app = new Hono();

app.all("/", (c) => {
  let id = Date.now() + performance.now();
});

Deno.serve(app.fetch);
