// 用户的路由
const express = require('express');
const router = express.Router();
const Article = require('../models/article');
const jwt = require('../utils/jwt');


// /articles/list 查看文章列表
router.get('/list',jwt.verify(), async (req, res) => {
    try {
        // 查询所有，返回文章的数组
        let articles = await Article.find();
        res.success(articles);
    } catch(error) {
        res.error(error);
    }
});

// /articles/add 增加一个新的文章
// 管理员才能添加
router.post('/add', jwt.verify(true),async (req, res) => {
    // 实例
    let article = new Article(req.body);
    try {
        // 保存
        await article.save();
        res.success(article);
    } catch(error) {
        res.error(error);
    }
});

// 注意导出的是一个 router
module.exports = router;