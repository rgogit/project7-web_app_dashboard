
// Traffic chart
const traffic = document.getElementById("traffic-chart");
let trafficData = {
    xLabels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    yLabels: ["500", "1000", "1500", "2000", "2500"],
    datasets: [
      { 
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 2250, 1500, 2470],
        backgroundColor: 'rgb(45, 47, 75, 0.2)',
        borderColor: '#b9bcf0',
        borderWidth: 1,
        lineTension: .4,
        pointRadius: 2.6,
        pointBackgroundColor: 'rgb(115 120 190 / 25%)',
          fill: {
            target: 'origin',
            above: 'rgb(115 120 190 / 30%)',
            
          }
        }
      ]
    };

    let trafficOptions = { 
        responsive: true,
        aspectRatio: 1.9,
        maintainAspectRatio: true,
        animation: {
        duration: 0
      },
   scales: { 
       y: {
          beginAtZero: true,
          count:6,
          precision:6,
          max:2500,
          min: 0,
          autoSkip:false,
          ticks: {
              stepSize: 500
          },
        }
   }, 
   plugins: {
        legend: {
          display: false
        }
   } 
};

let trafficChart = new Chart(traffic, { 
    type: 'line',
    data: trafficData,
    options: trafficOptions,
});



// Daily-traffic chart
const dailyTraffic = document.getElementById("daily-chart");



const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"], 
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100], 
    backgroundColor: '#7477BF',
    borderWidth: 1
    }] 
};

const dailyOptions = { 
  aspectRatio: 2,
  maintainAspectRatio: true,  
  scales: {
        y: {
            beginAtZero: true
    } 
    },
      plugins: {
          legend: {
          display: false
        }
    } 
};

let dailyChart = new Chart(dailyTraffic, { 
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//Mobile users charts
const mobileCanvas = document.getElementById("mobile-users-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"], 
    datasets: [{
    label: '# of Users', 
    data: [2000, 550, 500], 
    borderWidth: 0, 
    backgroundColor: [
        '#7477BF', 
        '#78CF82', 
        '#51B6C8'
        ] 
    }]
    
};

    const mobileOptions = { 
      aspectRatio: 2,
      maintainAspectRatio: true,
        plugins: {
        legend: {
        position: 'right', 
        labels: {
            boxWidth: 20,
            fontStyle: 'bold' 
            }
        } 
    }
};

        let mobileChart = new Chart(mobileCanvas, { 
            type: 'doughnut',
            data: mobileData,
            options: mobileOptions
        });