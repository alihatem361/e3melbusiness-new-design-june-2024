(function () {
  const profile_img = $("#profile_img");
  const change_profile_btn = $("#change_profile_btn");
  const profile_img_input = $("#profile_img_input");

  change_profile_btn.on("click", function (event) {
    event.preventDefault();
    if (profile_img_input?.length) {
      profile_img_input.trigger("click");
    }
  });

  profile_img_input.on("change", function (event) {
    if (event.target.files?.length) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        profile_img.attr("src", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });

  // Charts

  line_chart_data = [
    100, 120, 150, 80, 90, 170, 200, 210, 160, 140, 180, 220, 130, 110, 100,
    190, 175, 160, 195, 210, 220, 240, 230, 180, 175, 200, 205, 215, 230, 250,
  ];
  line_chart_desc_data = [
    1000, 950, 1100, 900, 870, 880, 900, 1000, 1200, 1000, 650, 550, 500, 550,
    450, 400, 500, 350, 300, 800, 250, 200, 600, 150, 100, 200, 50, 75, 25, 0,
  ];
  const pointRadius = line_chart_data.map((_, index) => (index === 20 ? 4 : 0));
  const pointRadius2 = line_chart_desc_data.map((_, index) =>
    index === 8 ? 4 : 0
  );

  const chart1 = document.getElementById("chart1").getContext("2d");
  const chart2 = document.getElementById("chart2").getContext("2d");
  const chart3 = document.getElementById("chart3").getContext("2d");
  const chart4 = document.getElementById("chart4").getContext("2d");
  const pieChart = document.getElementById("pieChart").getContext("2d");
  const lineChart = document.getElementById("lineChart").getContext("2d");
  const stackedChart = document.getElementById("stackedChart").getContext("2d");

  const lineData1 = [
    300, 220, 350, 280, 190, 270, 300, 310, 260, 140, 180, 220, 130, 110, 100,
    190, 175, 160, 195, 210, 220, 240, 230, 180, 175, 200, 205, 215, 230, 250,
  ];
  const lineData2 = [
    600, 750, 800, 600, 570, 480, 600, 700, 800, 720, 350, 450, 500, 550, 450,
    400, 500, 350, 300, 800, 250, 200, 600, 150, 100, 200, 50, 75, 25, 0,
  ];
  const lineData3 = [
    1000, 950, 1100, 900, 870, 880, 900, 1000, 1200, 1000, 650, 550, 500, 550,
    450, 400, 500, 350, 300, 800, 250, 200, 600, 150, 100, 200, 50, 75, 25, 0,
  ];

  new Chart(chart1, {
    type: "line",
    data: {
      labels: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
      datasets: [
        {
          label: "Sales",
          data: line_chart_data,
          borderColor: "#00b34f",
          backgroundColor: "#d6fde8",
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#d6fde8",
          pointBorderColor: "#00b34f",
          pointRadius: pointRadius,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  });
  new Chart(chart2, {
    type: "line",
    data: {
      labels: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
      datasets: [
        {
          label: "Sales",
          data: line_chart_data,
          borderColor: "#00b34f",
          backgroundColor: "#d6fde8",
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#d6fde8",
          pointBorderColor: "#00b34f",
          pointRadius: pointRadius,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  });
  new Chart(chart3, {
    type: "line",
    data: {
      labels: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
      datasets: [
        {
          label: "Sales",
          data: line_chart_desc_data,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "#fff4f4",
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#fff4f4",
          pointBorderColor: "rgba(255, 99, 132, 1)",
          pointRadius: pointRadius2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  });
  new Chart(chart4, {
    type: "line",
    data: {
      labels: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
      datasets: [
        {
          label: "Sales",
          data: line_chart_data,
          borderColor: "#00b34f",
          backgroundColor: "#d6fde8",
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#d6fde8",
          pointBorderColor: "#00b34f",
          pointRadius: pointRadius,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  });
  new Chart(pieChart, {
    type: "pie", // Pie chart type
    data: {
      labels: ["مصر", "الولايات المتحدة", "أسبانيا", "السعودية", "الإمارات"],
      datasets: [
        {
          label: "Sales",
          data: [100, 150, 100, 50, 100], // Data representing the sales for each product
          backgroundColor: [
            "#EAECF0",
            "#355389",
            "#0062E0",
            "#355389",
            "#19AFFF",
          ],
          borderColor: ["#EAECF0", "#355389", "#0062E0", "#355389", "#19AFFF"],
          borderWidth: 1, // Border width for the slices
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "right",
          labels: {
            usePointStyle: true,
            boxWidth: 20,
            padding: 25,
            font: {
              size: 14,
              family: "Poppins",
              weight: "bold",
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
    },
  });
  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  new Chart(lineChart, {
    type: "line",
    data: {
      labels: monthLabels,
      datasets: [
        {
          label: "الدراسة",
          data: lineData1,
          borderColor: "#144394",
          backgroundColor: "transparent",
          fill: true,
          tension: 0.4,
        },
        {
          label: "الإمتحانات",
          data: lineData2,
          borderColor: "#144394",
          backgroundColor: "transparent",
          fill: true,
          tension: 0.4,
        },
        {
          label: "الدروس",
          data: lineData3,
          borderColor: "#144394",
          backgroundColor: "transparent",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          position: "top",
          align: "start",
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            boxWidth: 20,
            font: {
              size: 14,
              family: "Poppins",
              weight: "bold",
            },
          },
        },
        tooltip: {
          enabled: true, // Enable tooltips
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          title: {
            display: true,
          },
        },
        y: {
          grid: {
            display: true,
          },
          title: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  });
  new Chart(stackedChart, {
    type: "bar",
    data: {
      labels: monthLabels,
      datasets: [
        {
          label: "Product A",
          data: [100, 150, 200, 180, 250, 220, 190, 160, 170, 210, 230, 240],
          backgroundColor: "#355389", // Color for Product A
        },
        {
          label: "Product B",
          data: [80, 100, 130, 120, 140, 110, 90, 85, 95, 110, 120, 130],
          backgroundColor: "#5D89D8", // Color for Product B
        },
        {
          label: "Product C",
          data: [60, 70, 90, 85, 100, 95, 70, 65, 80, 90, 100, 110],
          backgroundColor: "#EAECF0", // Color for Product C
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
          title: {
            display: true,
          },
        },
        y: {
          stacked: true,
          grid: {
            display: true,
          },
          title: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  });
})();
