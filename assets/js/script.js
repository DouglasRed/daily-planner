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
      var activityCol = $("<input>").addClass("toDo-input time-block");
      saveBtn = $("<button>").addClass("btn saveBtn").text("💾");
      $(row).append(timeCol).append(activityCol).append(saveBtn);
      $("#calendar").append(row);
    }

    function addActivityId() {
      var activityId = document.getElementsByClassName("toDo-input");
      for (i = 0; i < activityId.length; i++) {
        activityId[i].id = "activity-field-" + (i + 1);
      }
    }
    addActivityId();

    function addSaveBtnId() {
      var saveBtnId = document.getElementsByClassName("saveBtn");
      for (i = 0; i < saveBtnId.length; i++) {
        saveBtnId[i].id = "saveBtn-" + (i + 1);
      }
    }
    addSaveBtnId();
  });
}
simpleCalendar();
