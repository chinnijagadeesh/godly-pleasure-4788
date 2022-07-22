let container = document.createElement("div");
container.setAttribute("class", "install");
let head = document.createElement("h2");
head.setAttribute("class", "head");
head.innerText = "Install browser extension";
let para = document.createElement("p");
para.setAttribute("class", "para");
para.innerText =
  "Quickly access all your timekeeping data from your browser toolbar";

let img = document.createElement("img");
img.setAttribute("id", "app");
img.src = "https://app.everhour.com/assets/img/onboarding-extension.png";
let button = document.createElement("button");
button.innerText = "Install for Chrome";
button.setAttribute("class", "button");
let next = document.createElement("p");
next.setAttribute("class", "para");
next.setAttribute("id", "para");
next.innerText = "I don't need";
container.append(head, para, img, button, next);

let down = document.createElement("div");
down.setAttribute("class", "down");
let star = document.createElement("img");
star.setAttribute("class", "star");
star.src = "https://app.everhour.com/assets/img/stars@2x.png";
let span = document.createElement("span");
span.setAttribute("class", "desc");
span.innerText = "60,000+ users";
let desc = document.createElement("p");

desc.setAttribute("class", "para");
desc.innerText = "4.5 stars with ";
desc.append(span);
down.append(star, desc);
document.body.append(container, down);

next.addEventListener("click", () => {
  // Add Link here to redirected to next page
  window.location.href = "createproject.html";
});
let dataforname = JSON.parse(localStorage.getItem("credentials"));
dataforname.forEach((el) => {
  document.getElementById("showName").innerHTML = null;
  let p = document.createElement("p");
  p.innerText = el.email[0];
  document.getElementById("showName").append(p);
});
