
// present the current time by [Moment.js]
var today = moment();
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

//change time block color as past,present and future
function timeBlockColor() {
  //current number of hours by [Moment.js]
  var currentTime = moment().hour();

  $(".time-block").each(function() {
      // turn #hours to mumber          
      var hourInBlock = parseInt($(this).attr("id").split("hour")[1]);
      console.log(currentTime, hourInBlock);
      if (hourInBlock < currentTime) {
          $(this).addClass("past");
      } else if (hourInBlock == currentTime) {
          $(this).addClass("present");
      } else if(hourInBlock > currentTime) {
          $(this).addClass("future");
      }
  })

}
timeBlockColor()

// A fuction to save the content from textarea into localstorage

// make an array, 
var Inputtext = JSON.parse(localStorage.getItem('.description')) || [];

// click Btn to save
$(".saveBtn").on('click',function(){
  // console.log($(this).siblings(".description").val());
  // console.log($(this).parent().attr('id'))
  var obj = {
    id:$(this).parent().attr('id'),
    text:$(this).siblings(".description").val(),
  }
  Inputtext.push(obj);
  localStorage.setItem('.description', JSON.stringify(Inputtext));
  // console.log(obj);
})

function showtext(){
  $(".time-block").each(function(){
    // console.log($(this).attr('id'))
    // console.log($(this).children('.description'))
    for(i=0;i < Inputtext.length; i++){
      if (Inputtext[i].id === $(this).attr('id') ) {
        $(this).children('.description').val(Inputtext[i].text)
      }
    }
  })

}
showtext()

$(".clear").on('click',function(){
  localStorage.clear(); // clean localstorage
  window.location.reload();  // refresh and reload
})


