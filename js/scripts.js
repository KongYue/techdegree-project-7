const notificationsArray = [
  "This is first notification",
  "This is second notification"
];
const bell = document.getElementsByClassName("bell-notifications")[0];
const noticiationsContainer = document.getElementsByClassName(
  "notifications"
)[0];

bell.addEventListener("click", e => {
  if (noticiationsContainer.childElementCount === 1) {
    noticiationsContainer.appendChild(createNotifications(notificationsArray));
  } else {
    noticiationsContainer.removeChild(noticiationsContainer.lastChild);
  }
});

function createNotifications(arr) {
  let notifications = document.createElement("div");
  notifications.setAttribute("class", "newNotifications");
  for (let i = 0; i < arr.length; i++) {
    let notification = document.createElement("span");
    notification.textContent = arr[i];
    notification.setAttribute("class", "notification");
    notifications.appendChild(notification);
  }
  return notifications;
}

const alert_container = document.getElementById("alert");
alert_container.innerHTML =
  '<div class="alert-banner"><p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p><p class="alert-banner-close">x</p></div>';
alert_container.addEventListener("click", e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alert_container.style.display = "none";
  }
});

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          min: 0
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  },
  legend: {
    display: false
  }
};

var ctx = document.getElementById("traffic-chart");
var trafficNav = document.getElementsByClassName("traffic-nav")[0];
showTrafficByDuration("Monthly");

trafficNav.addEventListener("click", e => {
  let targetNode = e.target;
  if (targetNode.className === "traffic-nav-link") {
    let allChilds = trafficNav.childNodes;
    for (let i = 0; i < allChilds.length; i++) {
      if (allChilds[i].className === "selectedduration") {
        allChilds[i].className = "traffic-nav-link";
      }
    }

    targetNode.className = "selectedduration";
    let duration = targetNode.textContent;
    showTrafficByDuration(duration);
  } else if (targetNode.className === "selectedduration") {
    targetNode.className = "traffic-nav-link";
  }
});

function showTrafficByDuration(duration) {
  var trafficData = "";
  if (duration === "Monthly") {
    trafficData = {
      labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31"
      ],
      datasets: [
        {
          data: [
            750,
            1250,
            1000,
            2000,
            1500,
            1750,
            1250,
            1850,
            2250,
            1500,
            2500
          ],
          backgroundColor: "rgba(116, 119, 191, .3)",
          pointBackgroundColor: "rgba(255, 255, 255, 1)",
          pointBorderColor: "rgba(116, 119, 191, .8)",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          lineTension: 0,
          borderWidth: 1
        }
      ]
    };
  } else if (duration === "Weekly") {
    trafficData = {
      labels: ["1st Week", "2nd Week", "3rd Week", "4th Week"],
      datasets: [
        {
          data: [50, 20, 70, 80],
          backgroundColor: "rgba(116, 119, 191, .3)",
          pointBackgroundColor: "rgba(255, 255, 255, 1)",
          pointBorderColor: "rgba(116, 119, 191, .8)",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          lineTension: 0,
          borderWidth: 1
        }
      ]
    };
  } else if (duration === "Daily") {
    trafficData = {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          data: [100, 200, 300, 400, 500, 600, 700],
          backgroundColor: "rgba(116, 119, 191, .3)",
          pointBackgroundColor: "rgba(255, 255, 255, 1)",
          pointBorderColor: "rgba(116, 119, 191, .8)",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          lineTension: 0,
          borderWidth: 1
        }
      ]
    };
  } else if (duration === "Hourly") {
    trafficData = {
      labels: ["0-6 hour", "6-12 hour", "12-18 hour", "18-24 hour"],
      datasets: [
        {
          data: [750, 1250, 1000, 2000],
          backgroundColor: "rgba(116, 119, 191, .3)",
          pointBackgroundColor: "rgba(255, 255, 255, 1)",
          pointBorderColor: "rgba(116, 119, 191, .8)",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          lineTension: 0,
          borderWidth: 1
        }
      ]
    };
  }
  var myChart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: trafficData,

    // Configuration options go here
    options: trafficOptions
  });
}

const dailyCanvas = document.getElementById("daily-chart");

// data for daily traffic bar chart
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: "#7477BF",
      borderWidth: 1
    }
  ]
};
const dailyOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  },
  legend: {
    display: false
  }
};

let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions
});

const mobileCanvas = document.getElementById("mobileusers-chart");
const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"]
    }
  ]
};

const mobileOptions = {
  legend: {
    position: "right",
    labels: {
      boxWidth: 20,
      fontStyle: "bold"
    }
  },
  layout: {
    padding: {
      left: 50,
      right: 0,
      top: 0,
      bottom: 0
    }
  }
};

let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions
});

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener("click", () => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill out user field before sending");
  } else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});
