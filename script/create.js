document.querySelector("form").addEventListener("submit", (el) => {
  el.preventDefault();
  let name = document.getElementById("name").value;
  let client = document.getElementById("client").value;
  let val = document.getElementById("val").value;
  let val1 = document.getElementById("val1").value;
  let val2 = document.getElementById("val2").value;
  let task = document.getElementById("task").value;
  let data = new Data(name, client, val, val1, val2, task);

  localStorage.setItem("projectDetails", JSON.stringify(data));
  // Add link here
  window.location.href = "index.html";
});

function Data(n, c, v, v1, v2, t) {
  this.project = n;
  this.client = c;
  this.task1 = v;
  this.task2 = v1;
  this.task3 = v2;
  this.task4 = t;
}

let dataforname = JSON.parse(localStorage.getItem("credentials"));
dataforname.forEach((el) => {
  document.getElementById("showName").innerHTML = null;
  let p = document.createElement("p");
  p.innerText = el.email[0];
  document.getElementById("showName").append(p);
});
