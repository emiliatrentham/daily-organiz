
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