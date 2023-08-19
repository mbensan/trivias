const { DataTypes: dt } = require('sequelize')
const db = require('./sequelize.config')

const Question = db.define('question', {
  question: {
    type: dt.STRING,
    allowNull: false,
    // validate: {
    //   len: {
    //     args: [2, 45],
    //     msg: 'El largo del nombre debe medir entre 2 y 45 caracteres'
    //   }
    // }
  },
  correct: {
    type: dt.STRING,
    allowNull: false,
  },
  incorrect1: {
    type: dt.STRING,
    allowNull: false,
  },
  incorrect2: {
    type: dt.STRING,
    allowNull: false,
  },
  incorrect3: {
    type: dt.STRING,
    allowNull: true,
  },
  incorrect4: {
    type: dt.STRING,
    allowNull: true,
  }
}, {timestamps: true})


try {
  db.sync()
}
catch(err) {
  console.error('Something went wrong with the SYNC of the table Transferencia', err)
}


module.exports = Question