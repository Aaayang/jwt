// 用户的路由
const express = require('express');
const router = express.Router();
let bcrypt = require('bcryptjs');

const User = require('../models/user');

// /users/signup
// http://localhost:8080/users/signup 通过 Postman 可以进行测试
router.post('/signup', async (req, res) => {
    // 创建一个实例，返回的是一个 promise
    let user = new User(req.body);
    try {
        // 保存
        await user.save();
        
        res.success({
            username: user.username
        });
    } catch(error) {
        res.error(error);
    }
});

// 登录
router.post('/signin', async (req, res) => {
    let user = req.body;
    try {
        // 查找一个
        // let doc = await User.findOne(user);
        let doc = await User.findOne({
            username: user.username
        });

        /* doc.comparePassword = function(password)  {
            // this.password 是查找过来的加密后的密码
            return bcrypt.compareSync(password, this.password);
        }; */
        
        // user.password 就是用户输入的
        if(doc && doc.comparePassword(user.password)) {
            res.success({
                username: doc.username
            });
        } else {
            res.error('用户名或密码错误');
        }
    } catch(error) {
        res.error(error);
    }
});

// 注意导出的是一个 router
module.exports = router;