document.querySelector("#form").addEventListener("submit", myFunction);

dataArr = JSON.parse(localStorage.getItem("team_data")) || [];

function myFunction(e){
    e.preventDefault();

    let name = document.getElementById("compony_id").value;
    let size = document.getElementById("select_tag").value;
    let email = document.getElementById("main_input").value;
    


    function createTeam(){
        this.name = name;
        this.size = size;
        this.email = email;
        
    }

    let data = new createTeam()

    console.log(data)

    dataArr.push(data);

    localStorage.setItem("team_data", JSON.stringify(dataArr));

    
}