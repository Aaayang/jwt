const mongoose = require('mongoose');

const {DB_URL} = require('../config');

// 导出链接对象
module.exports = mongoose.createConnection(DB_URL, {
    useNewUrlParser: true
});