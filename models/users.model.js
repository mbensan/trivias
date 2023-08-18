const { DataTypes: dt } = require('sequelize')
const db = require('./sequelize.config')

const User = db.define('user', {
  nombre: {
    type: dt.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 45],
        msg: 'El largo del nombre debe medir entre 2 y 45 caracteres'
      }
    }
  },
  email: {
    type: dt.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: {
        args: [true],
        msg: "Debe ingresar un correo válido"   
      }
    }
  },
  password: {
    type: dt.STRING,
    allowNull: false,
  },
  foto: {
    type: dt.STRING,
  },
}, {timestamps: true})


try {
  db.sync()
}
catch(err) {
  console.error('Something went wrong with the SYNC of the table Transferencia', err)
}


module.exports = User