const mongoose = require('mongoose');
let connection = require('./index');
let bcrypt = require('bcryptjs');

// 1、定义 Schema
let ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: String
}, {
    // 配置项，加个时间戳
    timestamps: true
});

// 增加文章和查看文章列表
// 查看文章必须登录后才能看
// 增加文章必须管理员才能增加

// 数据库名默认会 articles
let Article = connection.model("Article", ArticleSchema);

module.exports = Article;

