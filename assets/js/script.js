$("document").ready(function() {

    // Displays the time in the header of the page
    const today = moment();
    $("#currentDay").text(today.format('dddd' + ', ' + 'MMMM Do YYYY'));

    // Add event listeners to buttons to able saving data in localStorage
    $(".saveBtn").on('click', function() {
        var hour = $(this).parent().attr("id");
        var event = $(this).siblings(".description").val();
        localStorage.setItem(hour, event);
    });

    // Sets variable value for current time 
    let currentTime = moment().hours();
    // console.log(currentTime);

    // Takes care of attributing the background colors according to the time of the day
    inputEl = $("textarea").each(function(){

        var textEL = $(this).attr("id");
        console.log(textEL);
    
        if ( textEL < currentTime) {
            $(this).addClass("past");

        } else if ( textEL == currentTime) {
            $(this).addClass("present");

        } else if ( textEL > currentTime) {
            $(this).addClass("future");
        }

        // Excecutes the function continuously and for each textarea line
        setInterval(function(){
            inputEl
            }, 1000);

        });

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

});