const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

let b = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.5667&lon=126.977&appid=38ebeff4ecf89f6f464380c559be5686&units=metric`);
console.log(b);


function saveName(name){
    localStorage.setItem("currentUser",name);
}

function showGreeting(name){
    document.querySelector(".js-form").setAttribute("class","hidden")
    greeting.innerHTML = `안녕하세요 ${name}`;

}

function handleSubmit(){
    event.preventDefault();
    // console.log("submit detected");
    let value = input.value;
    console.log("submit:"+value);
    showGreeting(value);
    saveName(value);
}

function askName(){
    form.addEventListener("submit",handleSubmit);
}
function roadName(){
    const currentUser = localStorage.getItem("currentUser");
    if(currentUser === null){
        askName();
    }else{
        showGreeting(currentUser);
    }
}

function init(){
    roadName();
}

init();


