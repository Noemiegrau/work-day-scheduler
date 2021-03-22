$("document").ready(function() {

    // Display the time
    const today = moment();
    $("#currentDay").text(today.format('dddd' + ', ' + 'MMMM Do YYYY'));

        // var textareaidEL = $(this).attr("id");

        // function that verifies the time and gives background color
        // function displayTimeColor() {
        //let currentTime = moment().format('HH');
        let currentTime = moment().hours()+3;
        console.log(currentTime);

        inputEl = $("textarea").each(function(){

            var textEL = $(this).attr("id");
            console.log(textEL);
    
            if ( textEL < currentTime) {
                $(this).addClass("past");
                // $('textarea').addClass("past");
                // .removeClass("present")
                // .removeClass("future");

            } else if ( textEL == currentTime) {
                $(this).addClass("present");
                // $('textarea').addClass("present");
                // .removeClass("past")
                // .removeClass("future");

            } else if ( textEL > currentTime) {
                $(this).addClass("future");
                // $('textarea').addClass("future");
                // .removeClass("present")
                // .removeClass("past");
            } //else {
            //     $('textarea').addClass("past")
            //     .removeClass("present")
            //     .removeClass("future");
            // }

            setInterval(function(){
                inputEl
            }, 1000);

        });
    
    // Add event listeners to buttons to save inputs in localStorage
    $(".saveBtn").on('click', function() {
        var hour = $(this).parent().attr("id");
        var event = $(this).siblings(".description").val();
        localStorage.setItem(hour, event);
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

    // displayTimeColor();

});