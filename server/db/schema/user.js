'use strict'

const { DataTypes, Model } = require('sequelize')
const sequelize = require('../index')

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      unique: true,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      comment: '用户id(自增)'
    },
    account: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: '用户账户'
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: '用户密码'
    },
    create_time: {
      type: DataTypes.DATE(6),
      allowNull: true,
      comment: '创建时间'
    },
    update_time: {
      type: DataTypes.DATE(6),
      allowNull: true,
      comment: '更新时间'
    }
  },
  {
    sequelize,
    modelName: 'user',
    tableName: 'user'
  }
)

module.exports = User
