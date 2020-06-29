//Current day displayed at top of calendar

var present = moment().format('MMMM Do YYYY');
$("#currentDay").text(present);

//store time segments in array 
// "id" "hour" "absoluteTime" "ampm"
var times = [
    {
        id: "0",
        time: "9",
        absoluteTime: "9",
        ampm: " AM",
    },
    {
        id: "1",
        time: "10",
        absoluteTime: "10",
        ampm: " AM",
    },
    {
        id: "2",
        time: "11",
        absoluteTime: "11",
        ampm: " AM",
    },
    {
        id: "3",
        time: "12",
        absoluteTime: "12",
        ampm: " PM",
    },
    {
        id: "4",
        time: "1",
        absoluteTime: "13",
        ampm: " PM",
    },
    {
        id: "5",
        time: "2",
        absoluteTime: "14",
        ampm: " PM",
    },
    {
        id: "6",
        time: "3",
        absoluteTime: "15",
        ampm: " PM",
    },
    {
        id: "7",
        time: "4",
        absoluteTime: "16",
        ampm: " PM",
    },
    {
        id: "8",
        time: "5",
        absoluteTime: "17",
        ampm: " PM",
    }
]

//local storage compatibility (for refresh/persistence)

var storedTasks = JSON.parse(localStorage.getItem("storedTasks"));


//create time columns on startup
times.forEach(function (tasks) {
    var taskRow = $("<form class=row>")
    $("#taskrows").append(taskRow);

    var hourColumn = $("<div class= col-2 hour>")
        .text(tasks.time + tasks.ampm)


    var taskColumn = $("<form class= col-8 description>")
    var taskData = $("<textarea >")

    taskColumn.append(taskData);


    var saveColumn = $("<button class= 'col-2 saveBtn oi oi-clipboard' mr-2>")



    taskRow.append(hourColumn, taskColumn, saveColumn);


    //time block interaction
    //color code blocks based on before 'preset' or after 
    //red= time past, yellow= present, green=future
    if (hourColumn.absoluteTime < moment().format("kk")) {
        taskData.addClass("past")
    } else if (hourColumn.absoluteTime === moment().format("kk")) {
        taskData.addClass("present")
    } else {
        taskData.addClass("future")
    }
});


$(".saveBtn").on("click", function () {
    var taskData =
        saveData();
})




