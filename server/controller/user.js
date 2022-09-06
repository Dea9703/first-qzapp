"use strict";
const userModel = require("../model/user");

class userController {
  /** 获取用户 */
  static async getUser(req, res) {
    const uid = req.query.uid;

    let data = {};
    if (!uid) {
      data = {
        code: 400,
        message: "uid is not exist",
      };
    } else {
      userInfo = await userModel.getUser(uid);
      data = {
        code: 200,
        message: "query user success",
        result: userInfo,
      };
    }
    res.send(data);
  }

  /** 创建用户 */
  static async cteateUser(req, res) {
    const { account, password } = req.body;
    let data;
    if (!account || !password) {
      data = {
        code: 400,
        message: "none or all of the accounts and passwords exist",
      };
      res.send(data);
      return;
    }

    const user = await userModel.findUser(account);
    if (user) {
      data = {
        code: 400,
        message: "the user already exists",
      };
      res.send(data);
      return;
    }

    await userModel.createUser({ account, password });
    data = {
      code: 200,
      message: "create user success",
    };

    res.send(data);
  }

  /** 查找用户 */
  // static async findUser(account) {
  //   const user = await userModel.findUser(account)
  //   console.log(user);
  // }
}

module.exports = userController;
