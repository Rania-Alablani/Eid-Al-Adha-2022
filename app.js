// Eid Al-Adha 2022 (8 July 2022)
//1000 millisec = 1 sec
let EidDate = new Date("July 8, 2022 00:00:00").getTime();

let counter = setInterval(() =>{

let dateNow = new Date().getTime();
let dateDiff = EidDate-dateNow;

let days = Math.floor(dateDiff / (1000 *60 *60 *24));
let hours = Math.floor(dateDiff %(1000 *60 *60 *24) / (1000 *60 *60) );
let min = Math.floor(dateDiff %(1000 *60 *60) / (1000 *60));
let sec = Math.floor(dateDiff %(1000 *60) / (1000));

document.querySelector(".days").innerHTML = days;
document.querySelector(".hours").innerHTML = hours;
document.querySelector(".min").innerHTML = min;
document.querySelector(".sec").innerHTML = sec;

if(dateDiff <=0 ){
  clearInterval(counter);
  print("<h1>Happy Eid!!</h1>")
}

},1000);
