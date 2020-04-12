// Our labels along the x-axis
var days = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// For drawing the lines
var dkiJakarta = [0,3,3,7,7,7,7,34,34,36,62,72,79,95,97,122,160,211,224,268,307,356,427,472];
var jawaBarat = [0,3,3,3,3,3,3,3,3,3,10,10,10,22,26,41,55,59,59,60,73,78,98,119,149,180,198,220];
var jawaTengah = [0,8,12,12,14,15,15,19,38,40,43,55,63,81,92,104,104,114,120,120,133,134,140];
var jawaTimur = [0,15,26,41,41,51,51,59,66,77,90,91,93,103,103,152,142,187,189,194,196,223,256,267];
var banten = [0,8,10,20,23,23,34,40,44,50,52,67,68,77,80,92,100,107,122,128,132,136,144,152,164];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: days,
    datasets: [
      { 
        data: dkiJakarta,
        label: "DKI Jakarta",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: jawaBarat,
        label: "Jawa Barat",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: jawaTengah,
        label: "Jawa Tengah",
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: jawaTimur,
        label: "Jawa Timur",
        borderColor: "#e8c3b9",
        fill: false
      },
      { 
        data: banten,
        label: "Banten",
        borderColor: "#c45850",
        fill: false
      }
    ]
  }
});