alert("재시작");

const colockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

function getTime(){
    let date = new Date();
    let hours = date.getHours()<10? "0"+date.getHours():date.getHours() ;;
    let minutes = date.getMinutes()<10? "0"+date.getMinutes():date.getMinutes() ;;
    let seconds = date.getSeconds() <10? "0"+date.getSeconds():date.getSeconds() ;

    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;

}

setInterval(getTime,1000);