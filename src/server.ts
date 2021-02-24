import "reflect-metadata"
import express from 'express';
import "./database" // Não precisa especificar o index.ts porque ele já reconhece como arquivo principal
import { router } from "./routes"; // importa o gerenciador de rotas

const app = express();

app.use(express.json())
app.use(router)

app.listen(3000, () => console.log("server is running"));

/**
 * GET -> Buscar
 * POST -> Salvar
 * PUT -> Alterar
 * DELETE -> Apagar
 * PATCH -> Alteração especifica
 */
