let main=document.createElement("div");
main.setAttribute("class","main")
let head=document.createElement("h1");
head.setAttribute("class","head");
head.innerText="Confirm  your email";
let msg=document.createElement("p");
msg.setAttribute("class","msg")
msg.innerText="Click on the link that has just been sent to your inbox to verify your email and continue the registration process"
let img=document.createElement("img");
img.setAttribute("id","mail");
img.src="https://blog-cdn.everhour.com/assets/images/new-design/icons/grey-reset-password.jpg";
let back=document.createElement("button");
back.innerText="Click To Start";
back.setAttribute("class","goback");
back.addEventListener("click",()=>
{
    window.location.href="../signup.html"
})
main.append(head,msg,img,back);
document.body.append(main)