function simpleCalendar() {
  $(document).ready(function () {
    var currentTime = moment().format("dddd, MMMM Do, YYYY h:mm a");
    var workHours = [
      "8am",
      "9am",
      "10am",
      "11am",
      "12pm",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
    ];

    function currentDay() {
      var currentDay = $("#currentDay").text(currentTime);
      return currentDay;
    }
    currentDay();

    for (i = 0; i < workHours.length; i++) {
      var row = $("<div>").addClass("row");
      var timeCol = $("<p>").text(workHours[i]).addClass("hour");
      var activityCol = $("<input>").addClass("toDO-input time-block");
      saveBtn = $("<button>").addClass("btn saveBtn").text("save");
      $(row).append(timeCol).append(activityCol).append(saveBtn);
      $("#calendar").append(row);
    }
  });
}
simpleCalendar();
