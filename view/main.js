const submit = document.querySelector("#submit");

submit.addEventListener("click", function(event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    // console.log(xhr.readyState)
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        console.log(xhr.responseText);
      } else {
        alert("Request was unsuccessful: " + xhr.status);
      }
    }
  };
  // xhr.open(Method, URL, Async)
  xhr.open("get", "http://localhost:5000", true);
  xhr.send(null);
});