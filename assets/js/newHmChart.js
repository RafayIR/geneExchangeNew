const ctx3 = document.getElementById('myChart3');


new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: 'BLOOD PRESSURE',
            data: [0, 3, 8, 5, 16, 11, 18],
            borderWidth: 1,
            tension: 0.4,
            pointRadius: 0,
            borderColor: 'white'
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: true,
                    drawBorder: false,
                    drawTicks: false,
                    drawOnChartArea: false,
                    color: 'white',
                    lineWidth: 0.5
                }
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false,
                    drawTicks: false,
                    drawOnChartArea: true,
                    color: 'white',
                    lineWidth: 0.5,
                    zeroLineWidth: 1
                },
                beginAtZero: true,
                min: -10,
                max: 30,
                ticks: {
                    display: false,
                    stepSize: 20
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
        }
    }
});
