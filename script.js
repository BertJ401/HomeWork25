var hourTitle;
var amPm;
var hourName = [""];
var hourIndex = [""];
var dayIndex = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var monthIndex = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let containBox = document.querySelector(".container");


//dynamically create our rows and readable times 
$(document).ready(function () {

    //get date/hour of the day
    var d = new Date();
    var dayTense = d.getHours();
    var dateNum = d.getDate();
    var monthNum = d.getMonth();
    var weekNum = d.getDay();
    var dateDisplay = dayIndex[weekNum]+", "+monthIndex[monthNum]+" "+dateNum;
    console.log(dateDisplay);
    $("#currentDay").text(dateDisplay);

    for (i = 0; i < 9; i++) {

        var hourTitle = i + 9;
        hourIndex[i] = parseFloat(hourTitle);
        

        //set note field css based on time of day
        var dayShade = "present"
        if (dayTense > hourTitle) {
            dayShade = "past";
        } else if (dayTense < hourTitle) {
            dayShade = "future"
        };

        //convert to am/pm
        amPm = "am";
        if (hourTitle > 12) {
            hourTitle = hourTitle - 12;
            amPm = "pm";
        }
        hourName[i] = String(hourTitle) + amPm;

        var hourRow = document.createElement("div");
        $(hourRow).addClass("row time-block entryRow" + i);
        $(containBox).append(hourRow)
        var hourDisplay = document.createElement("div");
        $(hourDisplay).addClass("hour col-md-20").text(hourName[i]);
        $(hourRow).append(hourDisplay);
        var bodyDisplay = document.createElement("div");


        $(bodyDisplay).addClass(dayShade + " col-md-60").text("stuff");
        $(hourRow).append(bodyDisplay);
        var btnDisplay = document.createElement("div");
        $(btnDisplay).addClass("hour time-block col-md-20").text("stuff");
        $(hourRow).append(btnDisplay);
        var saveIt = document.createElement("btn");
        $(saveIt).addClass("saveBtn").text("stuff");
        $(btnDisplay).append(saveIt);



        // console.log(hourTitle);
        // console.log(amPm);
        // console.log(hourName[i]);
    }

})