var hourTitle;
var amPm;
var hourName = [""];
var hourIndex = [""];
var dayIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var monthIndex = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let containBox = document.querySelector(".container");

$(document).ready(function () {

    var d = new Date();
    var dayTense = d.getHours();
    var dateNum = d.getDate();
    var monthNum = d.getMonth();
    var weekNum = d.getDay();
    var dateDisplay = dayIndex[weekNum] + ", " + monthIndex[monthNum] + " " + dateNum;
    console.log(dateDisplay);
    $("#currentDay").text(dateDisplay);

    for (i = 0; i < 9; i++) {

        var hourRow = document.createElement("div");
        var savedInfo = localStorage.getItem(i);
        var hourDisplay = document.createElement("div");
        var bodyDisplay = document.createElement("input");
        var saveIt = document.createElement("btn");
        var hourTitle = i + 9;
        hourIndex[i] = parseFloat(hourTitle);

        var dayShade = "present"
        if (dayTense > hourTitle) {
            dayShade = "past";
        } else if (dayTense < hourTitle) {
            dayShade = "future"
        };

        amPm = "am";
        if (hourTitle > 12) {
            hourTitle = hourTitle - 12;
            amPm = "pm";
        }
        hourName[i] = String(hourTitle) + amPm;

        $(hourRow).addClass("row time-block entryRow" + i);
        $(containBox).append(hourRow)
        $(hourDisplay).addClass("hour end-block").text(hourName[i]);
        $(hourRow).append(hourDisplay);
        $(bodyDisplay).attr("id", "inputField" + i)
        $(bodyDisplay).attr("placeholder", savedInfo);
        $(bodyDisplay).addClass(dayShade + " mid-block").attr("type", "text");
        $(hourRow).append(bodyDisplay);
        $(saveIt).addClass("saveBtn end-block").attr("data-ind", i).text("SAVE");
        $(hourRow).append(saveIt);

    }

    $(document).on("click", ".saveBtn", function () {
        var dataAtt = $(this).attr("data-ind");
        var inField = $("#inputField" + dataAtt).val();
        window.localStorage.setItem(dataAtt, inField);
    })


})