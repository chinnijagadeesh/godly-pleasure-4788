import footer from "../common/footer.js";
document.getElementById("footer").innerHTML = footer();

import navbar from "../common/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("credentials"));
let form = document.querySelector(".form");

form.addEventListener("submit", (el) => {
  el.preventDefault();
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  if (checkdata(email, pass) === true) {
    alert("Log in success");
    window.location.href = "index.html";
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
