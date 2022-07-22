let child = document.querySelector(".child");
let span = document.createElement("span");
span.innerHTML=`<button class="click">Subscribe  </button> <span id="history"> Billing History</span> `
span.addEventListener("click",()=>
{
   child.innerHTML="";      
child.innerHTML=`  <label for="" id="label" class="sub">Select plan</label><br><select class="teamplan" id='select'>
<option value="50.00 ($50 minimum price)">Team plan (Monthly) </option>
<option value="$510.00 ($50 minimum price ). You save $90">Team plan (Annual) </option>
</select> 
<span id="history"> Billing History</span>
<p id="label"  class="sub">Pay Today</p>



<h1>${"$56"}</h1>



<p class="para">Your credit card details (securely processed via Stripe)</p>
<form>
<div class="card-details">
   <div class="card-number">
       <div>  <label> Card Number </label><br>
           <input required
             type="text"
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
   <input required type="text" class="cvv-number-field" placeholder="xxx" />        
 </div>

</div>
  <p class="coupon">I have a coupon code</p>
  
  <div class="pay"><input type="submit" value=" Pay Now"   class="submit-now-btn" id="paynow">

<p id="history">Cancel</p>
</div>
</div>
</form>
`

document.querySelector("form").addEventListener("submit",(el)=>
{
el.preventDefault();
let id;
let arr=["Payment confirmed","Please Wait fetching your data","Transaction is in process","Your transaction is Successful",]
let i=0;
alert(arr[0]);
id=setInterval(function()
{
  if(i==arr.length-1)
  {
    clearInterval(id);

    // Add Link Here to redirected to next page
    window.location.href="#"
  }
  else
  {
    i++ 
    alert(arr[i]);
  }
},3000);
})
})
child.append(span)