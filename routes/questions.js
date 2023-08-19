const express = require('express');
const {auth_required} = require('../middlewares')
const Question = require('../models/questions.model')
const User = require('../models/users.model')

const router = express.Router();

router.post('/', auth_required, async (req, res) => {
  // 1. Extraemos los datos del body
  let {question, correct, incorrect1, incorrect2, incorrect3, incorrect4}
    = req.body
  
  // 1.5 Validamos si el usuario es admin
  const user = await User.findOne({where: {id}})
  if (!user.is_admin) {
    return res.status(400).json({
      err: 'Usted no es administrador/a'
    })
  }

  // 2. Si es texto vacío, declaramos las respuestas como null
  if (incorrect3 == '') {
    incorrect3 = null
  }
  if (incorrect4 == '') {
    incorrect4 = null
  }
  
  // 3. Creamos la pregunta
  try {
    await Question.create({
      question, correct, incorrect1, incorrect2, incorrect3, incorrect4
    })
  }
  catch (error) {
    return res.status(400).json(error)
  }

  return res.json({todo: 'ok'})
})

module.exports = router