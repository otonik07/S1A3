const usermodel = require('../models/usermodel');

const createuser = (req, res) => {
  const newuser = req.body;
  res.send('Usuário ${newuser.name} criado com sucesso');
};

module.exports = {createuser};
