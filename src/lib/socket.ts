import { io, Socket } from "socket.io-client";
import envConfig from "../config/envConfig";

let socket: Socket;

export const getSocket = () => {
  if (!socket) {
    socket = io(envConfig.baseApi, {
      withCredentials: true, // send cookies like refreshToken
      transports: ["websocket"], // enforce WebSocket (optional)
    });
  }
  return socket;
};