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
      var activityCol = $("<input>").addClass("activity-input time-block");
      saveBtn = $("<button>").addClass("btn saveBtn").text("💾");
      $(row).append(timeCol).append(activityCol).append(saveBtn);
      $("#calendar").append(row);
    }

    function addActivityId() {
      var activityId = document.getElementsByClassName("activity-input");
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

    var activityId1 = $("#activity-field-1");
    var activityId2 = $("#activity-field-2");
    var activityId3 = $("#activity-field-3");
    var activityId4 = $("#activity-field-4");
    var activityId5 = $("#activity-field-5");
    var activityId6 = $("#activity-field-6");
    var activityId7 = $("#activity-field-7");
    var activityId8 = $("#activity-field-8");
    var activityId9 = $("#activity-field-9");
    var activityId10 = $("#activity-field-10");

    var saveBtnId1 = $("#saveBtn-1");
    var saveBtnId2 = $("#saveBtn-2");
    var saveBtnId3 = $("#saveBtn-3");
    var saveBtnId4 = $("#saveBtn-4");
    var saveBtnId5 = $("#saveBtn-5");
    var saveBtnId6 = $("#saveBtn-6");
    var saveBtnId7 = $("#saveBtn-7");
    var saveBtnId8 = $("#saveBtn-8");
    var saveBtnId9 = $("#saveBtn-9");
    var saveBtnId10 = $("#saveBtn-10");

    var storeActivity;

    $(saveBtnId1).on("click", function (event) {
      event.preventDefault();
      // alert("Item saved");
      var activityId1 = $("#activity-field-1").val().trim();
      localStorage.setItem("activity-1", activityId1);
    });
    var saveActivity1 = localStorage.getItem("activity-1");
    activityId1.val(saveActivity1);
  });
}
simpleCalendar();
