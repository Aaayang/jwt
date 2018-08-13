// 用户的路由
const express = require('express');
const router = express.Router();

const User = require('../models/user');

// /users/signup
// http://localhost:8080/users/signup 通过 Postman 可以进行测试
router.post('/signup', async (req, res) => {
    console.log(req.body);
    // 创建一个实例，返回的是一个 promise
    let user = new User(req.body);
    try {
        await user.save();
        res.json({
            code: 0, // 0 表示成功
            data: {
                username: user.username
            }
        });
    } catch(error) {
        res.json({
            code: 1,
            error
        });
    }
});

// 注意导出的是一个 router
module.exports = router;