'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class livros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  livros.init({
    autorId: DataTypes.STRING,
    titulo: DataTypes.STRING,
    editora: DataTypes.STRING,
    datapublicacao: DataTypes.DATE,
    preco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'livros',
  });
  return livros;
};