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

## JWT

json web token

HMAC 算法就是 hash 算法 + 盐 的结合

服务器不需要记录任何东西，它有一种机制只需要验证你的信息是不是真的

- 登录

- 服务端创建 JWT，并返回给浏览器

- 在请求头中带上 JWT

- 服务器检查 JWT 的签名，从 JWT 获取用户信息

- 把响应返回客户端


jwt.io 网站可以解密 jwtToken