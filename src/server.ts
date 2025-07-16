import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import router from "./routes";

dotenv.config();
const PORT = process.env.PORT;

const server = express();

server.use(cors());
server.use(express.json());

server.use('/', router)

export default server;

server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});