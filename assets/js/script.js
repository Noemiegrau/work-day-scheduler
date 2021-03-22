// Display the time
const today = moment();
$("#currentDay").text(today.format('dddd' + ', ' + 'MMMM Do YYYY'));

$(document).ready(function () {

    // Add event listeners to buttons to save inputs in localStorage
    $(".saveBtn").on('click', function() {
        var hour = $(this).parent().attr("id");
        var event = $(this).siblings(".description").val();
        localStorage.setItem(hour, event);
    });

    // function that verifies the time and gives background color
    function displayTimeColor() {
        var currentTime = moment().format('HH');

        console.log(currentTime);
        $("textarea").each(function(){
        var textareaidEL = $(this).attr("id");
    
        if ( textareaidEL < currentTime) {
            $('textarea').addClass("past")
            .removeClass("present")
            .removeClass("future");

        } else if ( textareaidEL = currentTime) {
            $('textarea').addClass("present")
            .removeClass("past")
            .removeClass("future");

        } else if ( textareaidEL > currentTime) {
            $('textarea').addClass("future")
            .removeClass("present")
            .removeClass("past");
        }
    })
    }

    // Data is retrieved from localStorage even after refreshing the page 
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12am .description").val(localStorage.getItem("12am"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

displayTimeColor();

})