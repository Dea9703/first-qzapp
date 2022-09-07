'use strict'
const moment = require('moment')
const User = require('../db/schema/user')
const sequelize = require('../db')

class userModel {
  /** 获取用户 */
  static async getUser(account) {
    try {
      let data
      const user = await User.findOne({ where: { account } })
      if (!user) {
        data = {
          code: 400,
          message: 'not found user',
          data: null
        }
      } else {
        data = {
          code: 200,
          message: 'query user success',
          data: user
        }
      }
      return data
    } catch (error) {
      console.log(error);
    }
  }

  /** 创建用户 */
  static async createUser(payload) {
    try {
      const { account, password } = payload
      const createAt = moment().format('YYYY-MM-DD HH:mm:ss')
      await User.create({ account, password, create_time: createAt })
    } catch (error) {
      console.log(error)
      /**
       * 如果执行到达此行,则抛出错误.
       * 我们回滚事务
       **/
      // await u.rollback()
    }
  }
}

module.exports = userModel
