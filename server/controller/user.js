'use strict'
const userModel = require('../model/user')

class userController {
  /** 获取用户 */
  static async getUser(req, res) {
    const uid = req.query.uid

    let data
    if (!uid) {
      data = {
        code: 400,
        message: 'uid is not exist'
      }
    } else {
      data = await userModel.getUser(uid)
    }
    res.send(data)
  }

  /** 创建用户 */
  static async cteateUser(req, res) {
    const { account, password } = req.body
    let data
    if (!account && !password) {
      data = {
        code: 400,
        message: 'none or all of the accounts and passwords exist'
      }
    } else {
      await userModel.createUser({ account, password })
      data = {
        code: 200,
        message: 'create user success'
      }
    }

    res.send(data)
  }
}

module.exports = userController
