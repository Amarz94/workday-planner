window.onload = function() {


var saveBtn = document.querySelector(".saveBtn")
var hour    = document.querySelector(".hour")
var blank = []


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var hourNum = today.getHours()
console.log(date)
console.log(currentTime)
console.log(today)
console.log (today.getHours())
console.log(hourNum)


$('.saveBtn').on("click", function() {
    var value = $(this).siblings(".perEvent").val();
    var time = $(this).parent().attr("id");
    var dateAdded = moment().format("dddd, MMMM Do");

    blank.push({event: value, time: time, date: dateAdded});

    // save the value in localStorage as time
    localStorage.setItem("events", JSON.stringify(blank));
})
function alertt() {


    $(".perEvent").each(function(){
        var hourBlock = parseInt($(this).attr("value"))
        console.log(hourBlock)
        if(hourNum > hourBlock){
            $(this).css("background-color", "grey")
        } else if (hourNum === hourBlock) {
            $(this).css("background-color", "green")
        } else{
            $(this).css("background-color", "blue")
        }
    })
    
    
    
}
alertt();
var storedEvents = JSON.parse(localStorage.getItem("events"));

if (storedEvents !== null) {
  blank = storedEvents;
}

for(var i = 0; i < blank.length; i++) {
  var userDescription = blank[i].event;
  $("#" + blank[i].time).children(".perEvent").text(userDescription);
}
}