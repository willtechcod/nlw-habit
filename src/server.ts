import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;


const app = Fastify();

app.register(cors, {
    origin: true,
});

app.register(appRoutes);


/*app.listen({
    port: 8080,
    host: '0.0.0.0',
}).then((url) => {
    console.log(`HTTP Server running on ${url} 🚀`);
});*/

app.listen(PORT, () => console.log("HTTP Server running 🚀" + PORT));
