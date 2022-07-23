let form = document.getElementById("form");
let dataLS = JSON.parse(localStorage.getItem("clienData")) || [];
form.addEventListener("submit", storeData);
function storeData(event) {
  event.preventDefault();
  let na = form.name.value;
  let pro = form.projects.value;
  let em = form.email.value;
  let de = form.details.value;
  let ta = form.tax.value;
  let disc = form.discount.value;
  let dueT = form.due.value;
  let fil = form.fltr.value;
  let dataObj = new constructor(na, pro, em, de, ta, disc, dueT, fil);
  dataLS.push(dataObj);
  localStorage.setItem("clienData", JSON.stringify(dataLS));
  window.location.reload();
}

function constructor(c, p, e, b, t, d, du, f) {
  this.clientName = c;
  this.project = p;
  this.email = e;
  this.details = d;
  this.tax = t;
  this.discount = d;
  this.dueTerms = du;
  this.filter = f;
}
function append(data) {
  let tb = document.querySelector("tbody");
  tb.innerHTML = null;
  data.forEach(function (el, i) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = el.clientName;
    let td2 = document.createElement("td");
    td2.innerText = el.project;
    let td3 = document.createElement("td");
    td3.innerText = el.email;
    let td4 = document.createElement("td");
    td4.innerText = el.dueTerms;
    let td5 = document.createElement("td");
    td5.innerText = "DONE";
    td5.addEventListener("click", () => {
      remove(i);
    });
    tr.append(td1, td2, td3, td4, td5);
    tb.append(tr);
  });
}
let remove = (i) => {
  event.target.parentNode.remove();
  dataLS.splice(i, 1);
  localStorage.setItem("clienData", JSON.stringify(dataLS));
};





let mster = localStorage.getItem("check")
console.log(mster)
if (mster == "tures") {
  let signIn = document.getElementById("sing");
  let log = document.getElementById("slog");
  let darray = JSON.parse(localStorage.getItem("userdata"));
  console.log("darray:", darray.username.length);

  if (darray.username.length > 0) {
    signIn.innerText = darray.username;
    log.innerHTML = null;
  }
}

