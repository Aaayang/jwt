// 首页的路由
const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
    res.send('hello');
});

// 注意导出的是一个 router
module.exports = router;