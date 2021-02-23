import express from 'express';

const app = express();

app.listen(3000, () => console.log("server is running again"));

/**
 * GET -> Buscar
 * POST -> Salvar
 * PUT -> Alterar
 * DELETE -> Apagar
 * PATCH -> Alteração especifica
 */
