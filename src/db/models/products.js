const { DataTypes, Model} = require('sequelize');

class ProductModels extends Model {
  static init(sequelize) {
    return super.init(
      {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    }}, {
    sequelize,
    timestamps: true,
    tableName: 'Products',
  });  
}
}


module.exports = ProductModels;