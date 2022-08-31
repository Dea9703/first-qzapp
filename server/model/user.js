'use strict'
const moment = require('moment')
const User = require('../db/schema/user')
const sequelize = require('../db')

class userModel {
  /** 获取用户 */
  static async getUser(uid) {
    /** 模拟数据库 start */
    const userData = [
      {
        uid: 1,
        account: 'dea11111@code.com',
        password: '12345678',
        create_time: moment().format('YYYY-MM-DD HH:mm:ss'),
        update_time: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        uid: 2,
        account: 'dea22222@code.com',
        password: '12345678',
        create_time: moment().format('YYYY-MM-DD HH:mm:ss'),
        update_time: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        uid: 3,
        account: 'dea33333@code.com',
        password: '12345678',
        create_time: moment().format('YYYY-MM-DD HH:mm:ss'),
        update_time: moment().format('YYYY-MM-DD HH:mm:ss')
      }
    ]
    /** 模拟数据库 end */

    let data
    // let user
    // for (const item of userData) {
    //   if (uid == item.uid) {
    //     user = item
    //   }
    // }
    const user = await User.findOne({ where: { id: uid } })
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

  /** 查找用户是否存在 */
  static async findUser(account) {
    try {
      let data
      const user = await User.findOne({ where: { account } })
      if (!user) {
        data = {
          code: 200,
          data: null
        }
      } else {
        data = {
          code: 200,
          data: user
        }
      }

      return data
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = userModel
