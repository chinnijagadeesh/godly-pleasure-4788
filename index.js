import navbar from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar()

let data = [
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/github-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/clickup-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/trello-primary.webp",
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/basecamp-primary.webp"

]



let id;
let i = 0;
id = setInterval(function () {
    if (i === data.length) {
        i = 0
    }
    let img = document.createElement("img");
    img.src = data[i]
    document.getElementById("slideshow").innerHTML = null;
    document.getElementById("slideshow").append(img)
    i++
}, 2000)