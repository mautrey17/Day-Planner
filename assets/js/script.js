//Global Variables
var displayHours = ["9 AM", "10 AM", "11 AM", "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM"];
var valueHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//Display Current Time
$("#currentDay").text(dayjs().format("dddd, MMMM DD"));

//create empty objects for entries
var fixedEntries = [];

var localEntries = JSON.parse(localStorage.getItem("entries"));
    console.log(localEntries);

var checkStorage = function(){
    // var localEntries = JSON.parse(localStorage.getItem("entries"));
    console.log("localEntries");
    if (localEntries){
        fixedEntries = localEntries;
        console.log("this works")
    }
    else{
        for(var i = 0; i<valueHours.length; i++){
            var testObj = {
                "number": valueHours[i],
                "sampleText": ""
            };
            fixedEntries.push(testObj);
        }
    }
}
checkStorage();
console.log(fixedEntries);

//create time blocks
for(var i=0; i<displayHours.length; i++){
    //create HTML for time block
    var timeBlock = $("<div>").attr("class", "time-block");
    var row = $("<div>").attr("class", "row");
    // create HTML for hour slots
    var colHour = $("<div>").attr("class", "col-md-1");
    var hour = $("<div>").attr("class", "hour").text(displayHours[i]);
    colHour.append(hour);
    //create HTML for text entry
    var colEntry = $("<div>").attr("class", "col-md-10");
    

    var entry = $("<textarea>").attr("data-time", valueHours[i]);
    entry.text(fixedEntries[i].sampleText);

    //color code entries based on time of day
    // console.log(entry.attr("data-time"))
    var setTime = parseInt(entry.attr("data-time"));
    // console.log(setTime);
    if(setTime < parseInt(dayjs().format("H"))){
        entry.attr("class", "past");
    }
    else if (setTime === parseInt(dayjs().format("H"))){
        entry.attr("class", "present");
    }
    else{
        entry.attr("class", "future");
    }

    colEntry.append(entry);

    //create HTML for save button
    var colBtn = $("<div>").attr("class", "col-md-1");
    var btn = $("<button>").attr("class", "saveBtn").attr("data-timeBtn", valueHours[i]);
    var img = $("<i>").attr("class", "fas fa-save");
    btn.append(img);
    colBtn.append(btn);
    
    row.append(colHour, colEntry, colBtn)
    timeBlock.append(row);
    $(".container").append(timeBlock);
}

var savedEntries = [];

$(".saveBtn").on("click", function(){
    // var newEntry = {
    //     "timeSlot": this.getAttribute("data-timeBtn"),
    //     "text": $(this).parent().prev().children().val()
    // }

    var whichOne = this.getAttribute("data-timeBtn");
    whichOne -= 9;
    fixedEntries[whichOne].sampleText = $(this).parent().prev().children().val();

    console.log(fixedEntries);
    
    // fixedEntries.push(newEntry);
    localEntries = JSON.stringify(fixedEntries);
    localStorage.setItem("entries", localEntries);
    console.log(localEntries);
})



// console.log(fixedEntries);