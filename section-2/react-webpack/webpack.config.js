'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    // Criar arquivos em memória para usar em
    // desenvolvimento
    // Usar comando webpack para gerar para produção
    publicPath: '/dist/'
  }
}