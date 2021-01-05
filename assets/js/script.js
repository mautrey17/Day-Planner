
$("#currentDay").text(Date);

//create time blocks
var displayHours = ["9 AM", "10 AM", "11 AM", "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM"];
// var 
for(var i=0; i<displayHours.length; i++){
    //create HTML for hours
    var timeBlock = $("<div>").attr("class", "time-block");
    var row = $("<div>").attr("class", "row");
    var colHour = $("<div>").attr("class", "col-md-1");
    var hour = $("<div>").attr("class", "hour").text(displayHours[i]);
    colHour.append(hour);
    //create HTML for text entry
    var colEntry = $("<div>").attr("class", "col-md-10");
    var entry = $("<textarea>").attr("class", "past");
    colEntry.append(entry);
    //create HTML for save button
    var colBtn = $("<div>").attr("class", "col-md-1");
    var btn = $("<button>").attr("class", "saveBtn");
    var img = $("<i>").attr("class", "fas fa-save");
    btn.append(img);
    colBtn.append(btn);
    
    row.append(colHour, colEntry, colBtn)
    timeBlock.append(row);
    $(".container").append(timeBlock);
}
$("<div>")