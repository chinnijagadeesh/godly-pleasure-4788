import navbar from "../common/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../common/footer.js";
document.getElementById("footermain").innerHTML = footer();

let data = [
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/github-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/clickup-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/trello-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/basecamp-primary.webp",
];

let id;
let i = 0;
id = setInterval(function () {
  if (i === data.length) {
    i = 0;
  }
  let img = document.createElement("img");
  img.src = data[i];
  document.getElementById("slideshow").innerHTML = null;
  document.getElementById("slideshow").append(img);
  i++;
}, 2000);



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


