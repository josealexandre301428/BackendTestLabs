const { DataTypes, Model} = require('sequelize');

class UsersModels extends Model {
  static init(sequelize) {
    return super.init(
      {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Users',
    timestamps: true,
  }
);
}
}

module.exports = UsersModels;

