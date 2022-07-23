import nav from "../common/smallNavbar.js";
document.getElementById("navbar").innerHTML = nav();

import footer from "../common/footer.js";
document.getElementById("footer").innerHTML = footer();

let child = document.querySelector(".child");
let span = document.createElement("span");
span.innerHTML = `<button class="click">Subscribe  </button> <span id="history"> Billing History</span> `;
span.addEventListener("click", () => {
  child.innerHTML = "";
  child.innerHTML = `  <label for="" id="label" class="sub">Select plan</label><br><select class="teamplan" id='select'>
<option value="$50.00 ( $50 minimum price )">Team plan (Monthly) </option>
<option value="$510.00 ( You save $90 )">Team plan (Annual) </option>
</select> 
<span id="history"> Billing History</span>
<p id="label"  class="sub">Pay Today</p>
<br>
<div id="price"></div>
<p class="para">Your credit card details (securely processed via Stripe)</p>
<form>
<div class="card-details">
   <div class="card-number">
       <div>  <label> Card Number </label><br>
           <input required
             type="number"
             class="card-number-field"
             placeholder="1234-2546-5852-1234"/></div>
   <div> <label>  Expiration Month </label><br>
       <select name="Month" class="cvv-number-field">
           <option value="january">January</option>
           <option value="february">February</option>
           <option value="march">March</option>
           <option value="april">April</option>
           <option value="may">May</option>
           <option value="june">June</option>
           <option value="july">July</option>
           <option value="august">August</option>
           <option value="september">September</option>
           <option value="october">October</option>
           <option value="november">November</option>
           <option value="december">December</option>
         </select>    
   </div>
              <div> <label>Expiration Year   </label><br>
               <select name="Year">
                   <option value="2016">2022</option>
                   <option value="2017">2023</option>
                   <option value="2018">2024</option>
                   <option value="2019">2025</option>
                   <option value="2020">2026</option>
                   <option value="2021">2027</option>
                   <option value="2022">2028</option>
                   <option value="2023">2029</option>
                   <option value="2024">2030</option>
                 </select>   
           </div>
      
           <div></div>
   </div>
<div class="card-number">
<div class="nameholder-number">
   <label>Name On Card </label>
   <br>
   <input required
     type="text"
     class="card-name-field"
     placeholder="John Smith"/>
 </div> 

   <div class="cvv-number ">     
   <label>CVV</label>
   <br>
   <input required type="password" id="cvv" placeholder="cvv" />        
 </div>

</div>
  <p class="coupon">I have a coupon code</p>
  
  <div class="pay"><input type="submit" value=" Pay Now"   class="submit-now-btn" id="paynow">

<p id="history">Cancel</p>
</div>
</div>
</form> `;

  let val = document.getElementById("select");
  document.getElementById("price").innerText = val.value;
  val.addEventListener("click", () => {
    document.getElementById("price").innerText = val.value;
  });
  let cvv = document.querySelector("#cvv");

  document.querySelector("form").addEventListener("submit", (el) => {
    el.preventDefault();
    if (cvv.value == "123") {
      let id;
      let arr = [
        "Please Wait fetching your data !",
        "Payment Successful !",
        "Transaction is in process !",
        "Your transaction is Successful",
        "Thank You !",
      ];
      let i = 0;
      alert(arr[0]);
      id = setInterval(function () {
        if (i == arr.length - 1) {
          clearInterval(id);

          // Add Link Here to redirected to next page
          window.location.href = "index.html";
        } else {
          i++;
          alert(arr[i]);
        }
      }, 2500);
    } else {
      alert("Card detailes are wrong !");
    }
  });
});
child.append(span);

let dataforname = JSON.parse(localStorage.getItem("credentials"));
dataforname.forEach((el) => {
  document.getElementById("showName").innerHTML = null;
  let p = document.createElement("p");
  p.innerText = el.email[0];
  document.getElementById("showName").append(p);
});
