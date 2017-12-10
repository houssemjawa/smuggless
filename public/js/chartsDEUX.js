// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// -- Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Tunis","Sfax","Sousse","Kairouan","Bizerte","Gabès","Ariana","Gafsa","Monastir","BenArous","Kasserine","Médenine","Nabeul","Tataouine","Béja","Le-Kef","Mahdia","Sidi-Bouzid","Jendouba","La-Manouba","Siliana","Zaghouan","Kébili"],
    datasets: [{
      label: "Taux de la contrebande",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000),getRandomInt(1000,15000) ],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Blue", "Red", "Yellow", "Green"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});
