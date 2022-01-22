function (){
  let getItemTime;
// display the date and time by [Moment.js]
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));  
}

var dt = new Date();
document.getElementById("currentDay").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
document.getElementById("current").innerHTML = dt.toLocaleTimeString()

function