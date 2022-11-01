// Defines query selectors
var clearButton = document.querySelector(".clear");
var timeBlockHourKey = document.querySelector(".description");
// Sets criteria to display current date using moment 
const currentDate = moment().format("dddd, MMMM Do"); // get current date
document.getElementById("currentDay").textContent = currentDate; // display inside the element

// Variable used to update time block color based on the time of day
const now = moment().hour();

// The save button function that allows the user to save their notes
$(".saveBtn").click(function () {
  let $siblingTextarea = $(this).siblings("textarea");
  let textareaValue = $siblingTextarea.val();
  console.log(textareaValue);
  let $parentTimeBlock = $(this).closest(".time-block");
  let timeBlockHourKey = $parentTimeBlock.data("hour");
  saveToLocalStorage(timeBlockHourKey, textareaValue);
});

// Sets criteria to save event text to local storage
function saveToLocalStorage(hourKey, descriptionText) {
  localStorage.setItem(hourKey, descriptionText);
}
// Fetching items from local storage
$(document).ready(function () {
  $(".time-block").each(function () {
    // console.log("timeBlock", this);
    let timeBlockHourKey = $(this).data("hour");
    let existingDescription = localStorage.getItem(timeBlockHourKey);
    $(this).find("textarea").val(existingDescription);
    //chaining the result of a function to the front of another
   
    // Sets criteria for time blocks to change color based on the time of day
    var updateTimeBlockTime = moment(timeBlockHourKey, "HH:mm A").hour();
    if (updateTimeBlockTime < now) {
      $(this).addClass("past");
    } else if (updateTimeBlockTime > now) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
});

// Sets clear history button criteria
function resetTextArea() {
  localStorage.clear();
  timeBlockHourKey.descriptionText = "";
  $(".time-block").each(function () {
    let timeBlockHourKey = $(this).data("hour");
    let existingDescription = localStorage.getItem(timeBlockHourKey);
    $(this).find("textarea").val(existingDescription);
  });
}
clearButton.addEventListener("click", resetTextArea);
