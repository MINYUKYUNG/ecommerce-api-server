const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate() {
    }
  }
  products.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING(1000),
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'products',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return products;
};
