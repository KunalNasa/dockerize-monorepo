import { client } from "@repo/db/config";


Bun.serve({
    port: 8081,
    fetch(req, server) {
      // upgrade the request to a WebSocket
      if (server.upgrade(req)) {
        return; // do not return a Response
      }
      return new Response("Upgrade failed", { status: 500 });
    },
    websocket: {
        message(ws : any, message : any) {
            client.user.create({
                data: {
                    username: Math.random().toString(),
                    password: Math.random().toString(),
                    email : "myEmail" + Math.random().toString() + "@gmail.com"
                }
            })
            ws.send(message);
        },
    },
});