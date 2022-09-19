const express = require("express");

const app = express();

const port = 5000;

// 设置跨域访问
app.all("*", function (req, res, next) {
  // 设置允许跨域的域名，* 代表允许任意域跨域访问
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  // 跨域允许的 header 类型
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // 跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "*");
  
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})