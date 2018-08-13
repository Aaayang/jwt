const mongoose = require('mongoose');
let connection = require('./index');
let bcrypt = require('bcryptjs');

let define = {
    username: {
        type: String,
        unique: true // 保存的时候会检查次 username 是否唯一
    },
    password: String,
    // admin 为 true 代表是管理员
    admin: {
        type: Boolean,
        default: false
    }
};

// 1、定义 Schema
let UserSchema = new mongoose.Schema(define, {
    // 配置项，加个时间戳
    timestamps: true
});

// 这种机制也类似与 express 中的中间件
// 在保存之前（调用user.save之前）执行一个函数，每次调用save方法的时候会执行
UserSchema.pre('save', function(next) {
    // 生成盐值
    bcrypt.genSalt((err, salt) => {
        // this.password 就是实例上的 password
        // let user = new User(req.body);
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            next();
        });
    });
});

// 可以给实例扩展方法
/* let doc = await User.findOne({
    username: user.username
}); */
UserSchema.methods.comparePassword = function (password) {
    // 这里不要用箭头函数，保证 this
    // this.password 是查找过来的加密后的密码
    return bcrypt.compareSync(password, this.password);
};

// 获取模型
// let User = component.model("User");

// 2、定义 model
let User = connection.model("User", UserSchema);

module.exports = User;

