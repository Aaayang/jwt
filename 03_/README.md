## 安装依赖的模块

<!-- 最新版本已经把 body-parser 集成进去了 -->

```
cnpm i express cors jsonwebtoken cookie-parser morgan mongoose bcryptjs -S
```

- express

- morgan 记录访问日志

- jsonwebtoken 前后台分离时权限认证的一套方案

- bcryptjs 加密密码

- mongoose

- cors 让服务器支持跨域


## Postman

注意请求时是 JSON(application/json)

```
// 注意这里中间件并没有执行
app.use(methods)
```

## 加密

- 哈希算法，hash md5 sha1

- 加盐哈希 hmac，计算哈希的时候再加上盐

NODE原生 crypto 不能生成盐值

```
return bcrypt.compareSync(password, this.password);
```


