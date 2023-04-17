import fastify from "fastify";
import cors from "@fastify/cors";
import fastifyIO from "fastify-socket.io";

const server = fastify();
server.register(cors, {
  origin: "http://localhost:3000",
});
server.register(fastifyIO, {
  cors: {
    origin: "http://localhost:3000",
  },
});

server.ready().then(() => {
  server.io.on("connection", (socket) => {
    console.log(socket.id);
  });
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
