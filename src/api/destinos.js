const express = require('express');
const destinos = require('../data/destinos.json'); // Carrega os dados do arquivo JSON

const app = express();
const PORT = process.env.PORT || 3000;

// Rota para obter todos os destinos
app.get('/api/destinos', (req, res) => {
    res.json(destinos);
});

// Rota para obter um destino específico pelo ID
app.get('/api/destinos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const destino = destinos.cidades.find(destino => destino.id === id);
    if (!destino) {
        res.status(404).json({ error: 'Destino não encontrado' });
    } else {
        res.json(destino);
    }
});

// Rota para adicionar um novo destino (simulação, pois não persiste os dados)
app.post('/api/destinos', (req, res) => {
    // Implemente a lógica para adicionar um novo destino ao JSON (simulação)
    const novoDestino = req.body; // Supondo que você envia um novo destino no corpo da requisição
    destinos.cidades.push(novoDestino);
    res.status(201).json(novoDestino);
});

// Inicia o servidor Express
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
