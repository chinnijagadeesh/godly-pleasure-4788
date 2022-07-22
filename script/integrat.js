import smallnav from "../common/smallNavbar.js";
document.getElementById("navbar").innerHTML = smallnav();

let data = [
  {
    img: "https://app.everhour.com/assets/img/integrations/integration-asana-full.svg",
    url: "https://app.asana.com/-/oauth_authorize?response_type=code&client_id=167535690296347&redirect_uri=https%3A%2F%2Fapi.everhour.com%2Fauth%2Fasana%2Fauthorize&state=%7B%22user%22%3A%22c3dff3a402ed897149bae22bc762373a%22%2C%22onError%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%5C%2F%23%5C%2Finstall%3Berror%3D%7Berror%7D%3Baccount%3D%7Baccount%7D%3Buser%3D%7Buser%7D%22%2C%22onSuccess%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%5C%2F%23%5C%2Finstall%3Bconfigure%3D%7Baccount%7D%22%2C%22isSignIn%22%3Anull%7D",
  },
  {
    img: "https://app.everhour.com/assets/img/integrations/integration-trello-full.svg",
    url: "https://trello.com/1/OAuthAuthorizeToken?response_type=fragment&scope=read%2Caccount%2Cwrite&expiration=never&name=Everhour&oauth_token=c561e3db6edc3df431bd3d092c7ed3c3",
  },
  {
    img: "https://app.everhour.com/assets/img/integrations/integration-jira-full.svg",
    url: "https://app.everhour.com/#/install",
  },
  {
    img: "https://app.everhour.com/assets/img/integrations/integration-github-full.svg",
    url: "https://github.com/login/oauth/authorize?response_type=code&client_id=6b06841bb573e6b094cf&redirect_uri=https%3A%2F%2Fapi.everhour.com%2Fauth%2Fgithub%2Fauthorize&state=%7B%22user%22%3A%22c3dff3a402ed897149bae22bc762373a%22%2C%22onError%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%5C%2F%23%5C%2Finstall%3Berror%3D%7Berror%7D%3Baccount%3D%7Baccount%7D%3Buser%3D%7Buser%7D%22%2C%22onSuccess%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%5C%2F%23%5C%2Finstall%3Bconfigure%3D%7Baccount%7D%22%2C%22isSignIn%22%3Anull%7D&scope=read%3Auser%2Cuser%3Aemail%2Crepo",
  },
  {
    img: "https://app.everhour.com/assets/img/integrations/integration-basecamp3-full.svg",
    url: "https://launchpad.37signals.com/signin",
  },
  {
    img: "https://app.everhour.com/assets/img/integrations/integration-clickup-full.svg",
    url: "https://github.com/login/oauth/authorize?response_type=code&client_id=6b06841bb573e6b094cf&redirect_uri=https%3A%2F%2Fapi.everhour.com%2Fauth%2Fgithub%2Fauthorize&state=%7B%22user%22%3A%22c3dff3a402ed897149bae22bc762373a%22%2C%22onError%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%5C%2F%23%5C%2Finstall%3Berror%3D%7Berror%7D%3Baccount%3D%7Baccount%7D%3Buser%3D%7Buser%7D%22%2C%22onSuccess%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%5C%2F%23%5C%2Finstall%3Bconfigure%3D%7Baccount%7D%22%2C%22isSignIn%22%3Anull%7D&scope=read%3Auser%2Cuser%3Aemail%2Crepo",
  },
  {
    img: "https://app.everhour.com/assets/img/integrations/integration-monday-full.svg",
    url: "https://github.com/login/oauth/authorize?response_type=code&client_id=6b06841bb573e6b094cf&redirect_uri=https%3A%2F%2Fapi.everhour.com%2Fauth%2Fgithub%2Fauthorize&state=%7B%22user%22%3A%22c3dff3a402ed897149bae22bc762373a%22%2C%22onError%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%5C%2F%23%5C%2Finstall%3Berror%3D%7Berror%7D%3Baccount%3D%7Baccount%7D%3Buser%3D%7Buser%7D%22%2C%22onSuccess%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%5C%2F%23%5C%2Finstall%3Bconfigure%3D%7Baccount%7D%22%2C%22isSignIn%22%3Anull%7D&scope=read%3Auser%2Cuser%3Aemail%2Crepo",
  },
  {
    img: "https://app.everhour.com/assets/img/integrations/integration-gitlab-full.svg",
    url: "https://github.com/login/oauth/authorize?response_type=code&client_id=6b06841bb573e6b094cf&redirect_uri=https%3A%2F%2Fapi.everhour.com%2Fauth%2Fgithub%2Fauthorize&state=%7B%22user%22%3A%22c3dff3a402ed897149bae22bc762373a%22%2C%22onError%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%5C%2F%23%5C%2Finstall%3Berror%3D%7Berror%7D%3Baccount%3D%7Baccount%7D%3Buser%3D%7Buser%7D%22%2C%22onSuccess%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%5C%2F%23%5C%2Finstall%3Bconfigure%3D%7Baccount%7D%22%2C%22isSignIn%22%3Anull%7D&scope=read%3Auser%2Cuser%3Aemail%2Crepo",
  },
  {
    img: "https://app.everhour.com/assets/img/integrations/integration-todoist-full.svg",
    url: "https://github.com/login/oauth/authorize?response_type=code&client_id=6b06841bb573e6b094cf&redirect_uri=https%3A%2F%2Fapi.everhour.com%2Fauth%2Fgithub%2Fauthorize&state=%7B%22user%22%3A%22c3dff3a402ed897149bae22bc762373a%22%2C%22onError%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%5C%2F%23%5C%2Finstall%3Berror%3D%7Berror%7D%3Baccount%3D%7Baccount%7D%3Buser%3D%7Buser%7D%22%2C%22onSuccess%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%5C%2F%23%5C%2Finstall%3Bconfigure%3D%7Baccount%7D%22%2C%22isSignIn%22%3Anull%7D&scope=read%3Auser%2Cuser%3Aemail%2Crepo",
  },
  {
    img: "https://app.everhour.com/assets/img/integrations/integration-notion-full.svg",
    url: "https://www.notion.so/login",
  },
];

let showData = (dt) => {
  dt.forEach((el) => {
    let con = document.getElementById("integrateData");
    let div = document.createElement("div");
    div.setAttribute("class", "intImg");
    let pic = document.createElement("img");
    let a = document.createElement("a");
    pic.src = el.img;
    a.setAttribute("href", el.url);
    div.append(pic);
    a.append(div);
    con.append(a);
  });
};

showData(data);

let dataforname = JSON.parse(localStorage.getItem("credentials"));
dataforname.forEach((el) => {
  document.getElementById("showName").innerHTML = null;
  let p = document.createElement("p");
  p.innerText = el.email[0];
  document.getElementById("showName").append(p);
});
