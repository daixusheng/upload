const submit = document.querySelector("#submit");

const baseURL = "http://localhost:5000";

// 拼接查询参数（执行一次只能拼接一个参数）
function addURLParam(url, name, value) {
  url += (url.indexOf("?") == -1 ? "?" : "&");
  url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
  return url;
}

submit.addEventListener("click", function(event) {
  event.preventDefault();

  // GET 请求
  // const xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState == 4) {
  //     if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
  //       console.log(xhr.responseText);
  //     } else {
  //       alert("Request was unsuccessful: " + xhr.status);
  //     }
  //   }
  // };
  // // xhr.open(Method, URL, Async)
  // // xhr.open("get", "http://localhost:5000", true);
  // // xhr.open("get", "http://localhost:5000/api/books?subject=JavaScript", true);
  // xhr.open("get", "http://localhost:5000/api/books/10", true);
  // xhr.send(null);


  // POST 请求
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    // console.log("readstatechange", xhr.readyState);
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        console.log(xhr.responseText);
      } else {
        alert("Request was unsuccessful: " + xhr.status);
      }
    }
  };
  // console.log("readstatechange", xhr.readyState);
  xhr.open("post", "http://localhost:5000/", true);

  // text/plain（纯文本类型）-> express.text()
  // 当发送请求，请求体包含内容且未指定 Content-Type 类型时，浏览器会将其默认设置为 text/plain
  // xhr.send("some content");

  // application/json 类型
  // 未设置 Content-type 时，默认为 text/plain -> express.text()
  // 设置 Content-Type 为 application/json 时，-> express.json()
  // const data = {name: "daixusheng", age: "20"};
  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.send(JSON.stringify(data));

  // application/x-www-form-urlencoded 类型（提交表单时使用的内容类型）
  // 设置 Content-Type 为 application/x-www-form-urlencoded 时，-> express.urlencoded({ extend: true })
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("username=daixusheng&age=10");
  
  // application/javascript 类型（没跑通）
  // const data = {bookName: "人生复本", author: "布莱克·克劳奇"};
  // xhr.setRequestHeader("Content-Type", "application/javascript");
  // xhr.send(data);


  // PUT 请求
  // const xhr = new XMLHttpRequest();
  // xhr.open();
  // xhr.send();

  // DELETE 请求
  // const xhr = new XMLHttpRequest();
  // xhr.open();
  // xhr.send();
});