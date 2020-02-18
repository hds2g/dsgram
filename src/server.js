import dotenv from "dotenv";
import path from "path";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import { sendSecretMail } from "./utils";

dotenv.config({ path: path.resolve(__dirname, ".env") });

sendSecretMail("hds2g22@gmail.com", "123");

const PORT = process.env.PORT;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
