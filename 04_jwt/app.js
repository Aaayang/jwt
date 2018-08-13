const express = require('express');
const { PORT } = require('./config');
const morgan = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index'); // 首页路由
const usersRouter = require('./routes/users'); // 用户路由

const methods = require('./wares/methods');

const app = express();

// 跨域的中间件，原理：Access-Control-Allow-Origin
app.use(cors());
// 每当接收一个请求都会把请求信息打印出来，记录日志
app.use(morgan('dev'));


// express 内置的 body-parser 配置，接收 post 数据
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 自定义中间件，这里不能是执行
app.use(methods);

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => console.log(`服务已经在${PORT}启动了`));