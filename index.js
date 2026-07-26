//arrange akan names in arrays 
const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];
const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

let paragraph = document.getElementById("Akan-name")

let akan_form = document.getElementById("form")
//add event listener to detect when user submits form
akan_form.addEventListener("submit" , function(event){  //submit event runs when btn is clicked
 //prevent form from refreshing   
event.preventDefault()
//.value gets actual value the user typed
let day = parseInt(document.getElementById("day").value, 10);
let month = parseInt(document.getElementById("month").value, 10);
let year = parseInt(document.getElementById("year").value, 10);
let gender = document.getElementById("gender").value;

//calculating day of week
let date = new Date(year, month -1,day)  //js counts months from 0

let CC = Math.floor(year/100);
let YY = year % 100;
let MM = month;
let DD = day;
let dayOfWeek = (
     Math.floor(CC / 4 ) - 2 * CC - 1 +
     Math.floor((5 * YY)/4) +
     Math.floor((26 * (MM + 1)) / 10 ) + DD
    ) % 7;
dayOfWeek = Math.floor(dayOfWeek)
console.log(dayOfWeek)
//Match day of week to corresponding akan name based on gender
let akanName;
if (gender.toLowerCase() === "male")
{ akanName = maleNames[dayOfWeek];}
else if (gender.toLowerCase() === "female")
{ akanName = femaleNames[dayOfWeek]}

paragraph.textContent = akanName
});




