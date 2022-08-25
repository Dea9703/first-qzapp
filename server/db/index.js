'use strict'
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('first-app', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  /** 设置连接池 */
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false /** 禁止添加create,update,delete时间戳 */,
    freezeTableName: true /** 防止修改表名为复数 */,
    underscored: false /** 防止驼峰式字段被默认转为下划线 */
  },
  sync: {
    force: true // 同步所有模型均
  }
})

module.exports = sequelize
