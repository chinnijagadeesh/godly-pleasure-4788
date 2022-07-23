import footer from "../common/footer.js";
document.getElementById("footer").innerHTML = footer();

import navbar from "../common/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("credentials"));
let form = document.querySelector(".form");

form.addEventListener("submit", (el) => {
  el.preventDefault();
  console.log(222)
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  if (checkdata(email, pass) === true) {
    alert("Log in success");
    window.location.href = "index.html";
    let mast = "tures"
    localStorage.setItem("check", mast)
  } else {
    alert("Invalid credentials");
  }
});

let checkdata = (email, pass) => {
  let filter = data.filter((el) => {
    return email === el.email && pass === el.password;
  });
  if (filter.length > 0) {
    return true;
  } else {
    return false;
  }
};


// let mast = () => {
//   let signIn = document.getElementById("sing");
//   let log = document.getElementById("slog");
//   let darray = JSON.parse(localStorage.getItem("userdata"));
//   console.log("darray:", darray.username.length);

//   if (darray.username.length > 0) {
//     log.innerText = darray.username;
//     signIn.innerHTML = null;
//   }

// }