const express = require("express");
const { validationResult } = require("express-validator");

const Usuario = (req, res = express.response) => {
  const { nombre, email, contraseña } = req.body;

  res.status(200).json({
    ok: true,
    nombre,
    email,
    contraseña,
  });
};

const registro = (req,res = express.response) =>{
  const { nombre, email, contraseña } = req.body

  res.status(200).json({
    ok: true,
    msg: "Usuario registrado",
    nombre,email,contraseña
  })
  
}

const login = (requ, resq = express.response) => {
  resq.json({
    ok: true,
  });
};

const revalidarToken = (requ, resq = express.request) => {
  resq.json({
    ok: true,
  });
};

module.exports = {
  Usuario,
  login,
  revalidarToken,
  registro
};
