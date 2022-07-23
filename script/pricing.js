import navbar from "../common/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import footer from "../common/footer.js";

document.getElementById("footer").innerHTML = footer();




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

