function simpleCalendar() {
  $(document).ready(function () {
    var currentTime = moment().format("dddd, MMMM Do, YYYY h:mm a");
    //This hours array will populate the columns array
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

    //Calls and display current time
    function currentDay() {
      var currentDay = $("#currentDay").text(currentTime);
      return currentDay;
    }
    currentDay();

    //creates the rows with classes dynamically
    for (i = 0; i < workHours.length; i++) {
      var row = $("<div>").addClass("row");
      var timeCol = $("<p>").text(workHours[i]).addClass("hour");
      var activityCol = $("<input>").addClass("activity-input time-block");
      saveBtn = $("<button>").addClass("btn saveBtn").text("💾");
      $(row).append(timeCol).append(activityCol).append(saveBtn);
      $("#calendar").append(row);
    }

    //gives the middle column an ID that will be referenced quite frequently
    function addActivityId() {
      var activityId = document.getElementsByClassName("activity-input");
      for (i = 0; i < activityId.length; i++) {
        activityId[i].id = "activity-field-" + (i + 1);
        activityId[i].hour = i + 8;
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

    //saves text content to local storage
    //Button 1
    $(saveBtnId1).on("click", function (event) {
      event.preventDefault();
      var activityId1 = $("#activity-field-1").val().trim();
      localStorage.setItem("activity-1", activityId1);
    });
    // retrieves text from local storage if any exist
    var saveActivity1 = localStorage.getItem("activity-1");
    activityId1.val(saveActivity1);

    //Button 2
    $(saveBtnId2).on("click", function (event) {
      event.preventDefault();
      var activityId2 = $("#activity-field-2").val().trim();
      localStorage.setItem("activity-2", activityId2);
    });
    var saveActivity2 = localStorage.getItem("activity-2");
    activityId2.val(saveActivity2);

    //Button 3
    $(saveBtnId3).on("click", function (event) {
      event.preventDefault();
      var activityId3 = $("#activity-field-3").val().trim();
      localStorage.setItem("activity-3", activityId3);
    });
    var saveActivity3 = localStorage.getItem("activity-3");
    activityId3.val(saveActivity3);

    //Button 4
    $(saveBtnId4).on("click", function (event) {
      event.preventDefault();
      var activityId4 = $("#activity-field-4").val().trim();
      localStorage.setItem("activity-4", activityId4);
    });
    var saveActivity4 = localStorage.getItem("activity-4");
    activityId4.val(saveActivity4);

    //Button 5
    $(saveBtnId5).on("click", function (event) {
      event.preventDefault();
      var activityId5 = $("#activity-field-5").val().trim();
      localStorage.setItem("activity-5", activityId5);
    });
    var saveActivity5 = localStorage.getItem("activity-5");
    activityId5.val(saveActivity5);

    //Button 6
    $(saveBtnId6).on("click", function (event) {
      event.preventDefault();
      var activityId6 = $("#activity-field-6").val().trim();
      localStorage.setItem("activity-6", activityId6);
    });
    var saveActivity6 = localStorage.getItem("activity-6");
    activityId6.val(saveActivity6);

    //Button 7
    $(saveBtnId7).on("click", function (event) {
      event.preventDefault();
      var activityId7 = $("#activity-field-7").val().trim();
      localStorage.setItem("activity-7", activityId7);
    });
    var saveActivity7 = localStorage.getItem("activity-7");
    activityId7.val(saveActivity7);

    //Button 8
    $(saveBtnId8).on("click", function (event) {
      event.preventDefault();
      var activityId8 = $("#activity-field-8").val().trim();
      localStorage.setItem("activity-8", activityId8);
    });
    var saveActivity8 = localStorage.getItem("activity-8");
    activityId8.val(saveActivity8);

    //Button 9
    $(saveBtnId9).on("click", function (event) {
      event.preventDefault();
      var activityId9 = $("#activity-field-9").val().trim();
      localStorage.setItem("activity-9", activityId9);
    });
    var saveActivity9 = localStorage.getItem("activity-9");
    activityId9.val(saveActivity9);

    //Button 10
    $(saveBtnId10).on("click", function (event) {
      event.preventDefault();
      var activityId10 = $("#activity-field-10").val().trim();
      localStorage.setItem("activity-10", activityId10);
    });
    var saveActivity10 = localStorage.getItem("activity-10");
    activityId10.val(saveActivity10);

    let now = new Date().getHours();
    // somewhat dynamically checks to see verify which class should be attached
    if (now > 8) {
      $("#activity-field-1").addClass("past");
    } else if (now >= 8 && now < 9) {
      $("#activity-field-1").addClass("present");
    } else if (now < 8) {
      $("#activity-field-1").addClass("future");
    }

    if (now > 9) {
      $("#activity-field-2").addClass("past");
    } else if (now >= 9 && now < 10) {
      $("#activity-field-2").addClass("present");
    } else if (now < 9) {
      $("#activity-field-2").addClass("future");
    }

    if (now > 10) {
      $("#activity-field-3").addClass("past");
    } else if (now >= 10 && now < 11) {
      $("#activity-field-3").addClass("present");
    } else if (now < 10) {
      $("#activity-field-3").addClass("future");
    }

    if (now > 11) {
      $("#activity-field-4").addClass("past");
    } else if (now >= 11 && now < 12) {
      $("#activity-field-4").addClass("present");
    } else if (now < 11) {
      $("#activity-field-4").addClass("future");
    }

    if (now > 12) {
      $("#activity-field-5").addClass("past");
    } else if (now >= 12 && now < 13) {
      $("#activity-field-5").addClass("present");
    } else if (now < 12) {
      $("#activity-field-5").addClass("future");
    }

    if (now > 13) {
      $("#activity-field-6").addClass("past");
    } else if (now >= 13 && now < 14) {
      $("#activity-field-6").addClass("present");
    } else if (now < 13) {
      $("#activity-field-6").addClass("future");
    }

    if (now > 14) {
      $("#activity-field-7").addClass("past");
    } else if (now >= 14 && now < 15) {
      $("#activity-field-7").addClass("present");
    } else if (now < 14) {
      $("#activity-field-7").addClass("future");
    }

    if (now > 15) {
      $("#activity-field-8").addClass("past");
    } else if (now >= 15 && now < 16) {
      $("#activity-field-8").addClass("present");
    } else if (now < 15) {
      $("#activity-field-8").addClass("future");
    }

    if (now > 16) {
      $("#activity-field-9").addClass("past");
    } else if (now >= 16 && now < 17) {
      $("#activity-field-9").addClass("present");
    } else if (now < 16) {
      $("#activity-field-9").addClass("future");
    }

    if (now > 17) {
      $("#activity-field-10").addClass("past");
    } else if (now >= 17 && now < 18) {
      $("#activity-field-10").addClass("present");
    } else if (now < 17) {
      $("#activity-field-10").addClass("future");
    }
  });
}
simpleCalendar();
