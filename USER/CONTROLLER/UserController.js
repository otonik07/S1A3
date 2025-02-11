const usermodel = require('../models/usermodel');

const createuser = (req, res) => {
  const newuser = req.body;
  res.send('Usuário ${newuser.name} cirado com sucesso');
};

module.exports = {createuser};
