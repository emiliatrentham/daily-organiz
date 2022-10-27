// const timeBlocksList = document.getElementById("time-blocks-list");
// const currentDay = document.getElementById("currentDay");

// // Get Current Time and display it every second
// function getTime() {
//     var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
//     currentDay.innerHTML = currentDate;
//     currentDay.innerHTML = "current date: " + currentDate;
// }
// setInterval(getTime, 1000);

// // Temporary timeblocks
// let timeblocks = [
//     "6:30 AM",
//     "7:30 AM",
//     "8:30 AM",
//     "9:30 AM",
//     "10:30 AM",
//     "11:30 AM",
//     "12:30 PM"  
// ]

const currentDate = moment().format("dddd, MMMM Do"); // get current date
document.getElementById("currentDay").textContent = currentDate; // display inside the element

$(".saveBtn").click(function() {
    let $siblingTextarea = $(this).siblings("textarea")
    let textareaValue = $siblingTextarea.val()
    console.log(textareaValue)
    let $parentTimeBlock = $(this).closest(".time-block")
    let timeBlockHourKey = $parentTimeBlock.data("hour")
    saveToLocalStorage(timeBlockHourKey, textareaValue)
}); 

function saveToLocalStorage(hourKey, descriptionText) {
    localStorage.setItem(hourKey, descriptionText)
};

$(document).ready(function() {
    $(".time-block").each(function () {
        let timeBlockHourKey = $(this).data("hour")
        // dataset.hour vanilla js
        let existingDescription = localStorage.getItem(timeBlockHourKey)
        $(this).find("textarea").val(existingDescription) //chaining
    }) 
});


// use js to add past present future
// inside timeblock.each use moment to find out if each time block represents before or after present 