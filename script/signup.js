import navbar from "../common/navbar.js";
import footer from "../common/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
let loadMore = document.querySelector(".more");
loadMore.addEventListener("click", () => {
  window.location.href = "customer.html";
});

let form = document.querySelector("form");
form.addEventListener("submit", (el) => {
  el.preventDefault();
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  // console.log(email,pass)
  let data = JSON.parse(localStorage.getItem("credentials")) || [];
  if (checkData(email) == true && pass.length >= 8) {
    let key = new Person(email, pass);
    data.push(key);
    localStorage.setItem("credentials", JSON.stringify(data));
    window.location.href = "confirmEmail.html";
  } else if (pass.length < 8) {
    alert("Put a password more then 8 characters");
  } else {
    alert("Seems like you already have an account");
  }
  checkData(email);
  function checkData(email) {
    let duplicates = data.filter((elem) => {
      return email === elem.email;
    });
    if (duplicates.length == 1) {
      return false;
    } else {
      return true;
    }
  }
});

function Person(email, pass) {
  this.email = email;
  this.password = pass;
}
