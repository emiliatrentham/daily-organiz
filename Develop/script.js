var clearButton = document.querySelector(".clear");
var timeBlockHourKey = document.querySelector(".description");

const currentDate = moment().format("dddd, MMMM Do"); // get current date
document.getElementById("currentDay").textContent = currentDate; // display inside the element

const now = moment().hour(); 
console.log(now);

// The save button function that allows the user to save their notes
$(".saveBtn").click(function () {
  let $siblingTextarea = $(this).siblings("textarea");
  let textareaValue = $siblingTextarea.val();
  console.log(textareaValue);
  let $parentTimeBlock = $(this).closest(".time-block");
  let timeBlockHourKey = $parentTimeBlock.data("hour");
  saveToLocalStorage(timeBlockHourKey, textareaValue);
});

function saveToLocalStorage(hourKey, descriptionText) {
  localStorage.setItem(hourKey, descriptionText);
}
// Fetching items from local storage
$(document).ready(function () {
  // console.log($(".time-block"))
  $(".time-block").each(function () {
    // console.log("timeBlock", this);
    let timeBlockHourKey = $(this).data("hour");
    // dataset.hour vanilla js
    let existingDescription = localStorage.getItem(timeBlockHourKey);
    $(this).find("textarea").val(existingDescription); //chaining the result of a function to the front of another
    // console.log(timeBlockHourKey, now);

    var updateTimeBlockTime = moment(timeBlockHourKey, "HH:mm A").hour(
    );
    if (updateTimeBlockTime < now) {
      $(this).addClass("past");
    } else if (updateTimeBlockTime > now) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
});

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

