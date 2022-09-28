const express = require("express");

const app = express();

// 设置跨域访问
// app.all("*", function (req, res, next) {
//   // 设置允许跨域的域名，* 代表允许任意域跨域访问
//   res.header("Access-Control-Allow-Origin", "*");
//   // 跨域允许的 header 类型
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   // 跨域允许的请求方式
//   res.header("Access-Control-Allow-Methods", "*");
  
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

// 解析请求体
// app.use(express.text());
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.raw());

app.get("/", (req, res) => {
  const query = req.query;
  res.send(query);
});

// app.get("/:name", (req, res) => {
//   const params = req.params;
//   res.send(params);
// });

// app.get("/api/books", (req, res) => {
//   const query = req.query;
//   res.send(query);
// });

// app.get("/api/books/:bookId", (req, res) => {
//   const params = req.params;
//   res.send(params);
// });

app.post("/", (req, res) => {
  const body = req.body;
  res.send(body);

  // const params = req.params;
  // res.send(params);

  // const query = req.query;
  // res.send(query);
});


app.listen(5000, () => {
  console.log("Server is running on port 5000");
})