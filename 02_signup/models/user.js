const mongoose = require('mongoose');

let connection = require('./index');

// 1、定义 Schema
let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true // 保存的时候会检查次 username 是否唯一
    },
    password: String
}, {
    // 配置项，加个时间戳
    timestamps: true
});

// 获取模型
// let User = component.model("User");

// 2、定义 model
let User = connection.model("User", UserSchema);

module.exports = User;

