function toggle(id) {
  b = document.getElementById("accordion-header" + id);
  a = document.getElementById("accordion-body" + id);
  if (a.style.display == "block") {
    a.style.display = "none";
    b.innerHTML = "Show Discussion";
  } else {
    a.style.display = "block";
    b.innerHTML = "Hide Discussion";
  }
}

import navbar from "../common/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import footer from "../common/footer.js";

document.getElementById("footer").innerHTML = footer();
let signIn = document.getElementById("sing");
let log = document.getElementById("slog");
let darray = JSON.parse(localStorage.getItem("userdata"));
console.log("darray:", darray.username.length);

if (darray.username.length > 0) {
  signIn.innerText = darray.username;
  log.innerHTML = null;
}
