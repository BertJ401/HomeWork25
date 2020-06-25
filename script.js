var hourTitle;
var amPm;
var hourName = [""];
var hourIndex = [""];
let containBox = document.querySelector(".container");


//dynamically create our rows and readable times 
$(document).ready(function () {

for (i = 0; i < 9; i++) {

    var hourTitle = i + 9;
    hourIndex[i] = parseFloat(hourTitle);
    amPm = "am";
    if (hourTitle > 12) {
        hourTitle = hourTitle - 12;
        amPm = "pm";
    }
    hourName[i] = String(hourTitle) + amPm;

    var hourRow = document.createElement("row");
    containBox.appendChild(hourRow);
    var att = document.createAttribute("class");
    att.value = "row entryRow" + i;
    hourRow.setAttributeNode(att);
    var hourDisplay = document.createElement("div");
    var hourStyle = document.createAttribute("class");
    hourStyle.value = "hour col-md-20";
    hourDisplay.setAttributeNode(hourStyle);
    hourDisplay.innerText = hourName[i];
    //hourRow.appendChild(hourDisplay);
    $(hourRow).append(hourDisplay);
    console.log(hourTitle);
    console.log(amPm);
    console.log(hourName[i]);
}

})