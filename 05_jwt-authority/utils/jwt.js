let jwt = require('jsonwebtoken');
const {SECRET} = require('../config');

function sign(payload) {
    return jwt.sign(payload, SECRET, {
        expiresIn: 600 // 有效期秒
    });
}

// 中间件是一个函数，又返回了一个函数
// 验证权限
// mustAdmin 是否是管理员才能访问
let verify = (mustAdmin) => (req,res,next) => {
    // 取得客户端发过来的 token
    let jwtToken = req.headers.authorization;
    if(jwtToken) {
        // 验证
        jwt.verify(jwtToken, SECRET, (err, payload) => {
            if(err) {
                if (err.name == 'TokenExpiredError') {
                    // 验证成功但过期了
                    res.status(401).error('token 已经过期');
                } else {
                    // token 验证失败
                    // 401 无权访问
                    // 403 禁止访问
                    res.status(401).error('token 是无效的');
                }
            } else {
                if(mustAdmin) {
                    // 如果要求必须是管理员
                    let { admin } = payload;
                    if(admin) {
                        // 是管理员
                        next();
                    } else {
                        res.error('你不是管理员，无权执行此操作');
                    }
                } else {
                    next();
                }
            }
        });
    } else {
        res.error('请提供 jwtToken');
    }
};

module.exports = {
    sign,
    verify
};