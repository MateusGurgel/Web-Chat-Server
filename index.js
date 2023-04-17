"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_socket_io_1 = __importDefault(require("fastify-socket.io"));
const server = (0, fastify_1.default)();
server.register(fastify_socket_io_1.default);
server.get("/", (req, reply) => {
    server.io.emit("hello");
});
server.ready().then(() => {
    server.io.on("connection", (socket) => {
        // ...
    });
});
server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
