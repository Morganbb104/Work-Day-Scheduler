
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


