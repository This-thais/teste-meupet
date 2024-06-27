const destinosData = require('../data/destinos.json');
module.exports = (req, res) => {
    if (req.method === 'GET') {
      // Rota para obter todos os destinos
      res.status(200).json(destinosData);
    } else if (req.method === 'POST') {
      // Rota para adicionar um novo destino (implementação básica)
      // Aqui você implementaria a lógica para adicionar novos destinos ao arquivo JSON
      res.status(200).json({ message: 'Criar novo destino' });
    } else {
      // Rota não permitida
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  };
  