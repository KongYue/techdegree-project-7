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
var monthlyChild = trafficNav.lastElementChild;
monthlyChild.className = "selectedduration";

// **check user to click different duration frame

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
