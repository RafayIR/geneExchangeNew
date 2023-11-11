const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');



new Chart(ctx1, {
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
                    lineWidth: 1
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
            // annotation: {
            //     annotations: [{
            //         type: 'line',
            //         mode: 'horizontal',
            //         scaleID: 'y',
            //         value: 0,
            //         borderColor: 'red',
            //         borderWidth: 5,
            //         label: {
            //             enabled: true,
            //             content: 'Min'
            //         }
            //     }, {
            //         type: 'line',
            //         mode: 'horizontal',
            //         scaleID: 'y',
            //         value: 20,
            //         borderColor: 'green',
            //         borderWidth: 5,
            //         label: {
            //             enabled: true,
            //             content: 'Max'
            //         }
            //     }]
            // }
        }
    }
});



new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: 'PULSE',
            data: [0, 3, 8, 5, 16, 11, 18],
            borderWidth: 1.5,
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
                    drawOnChartArea: false, // Display gridlines based on min and max values
                    color: 'white',
                    lineWidth: 1,

                }
            },
            y: {
                grid: {
                    // display: false // Hide the y-axis gridlines
                    display: true,
                    drawBorder: false,
                    drawTicks: false,
                    drawOnChartArea: true,
                    color: 'white',
                    lineWidth: 0.5,
                    zeroLineWidth: 1
                },
                beginAtZero: true,
                min: -10, // set the minimum value of the y-axis
                max: 30, // set the maximum value of the y-axis
                ticks: {
                    display: false,
                    stepSize: 20
                }
            }
        },
        plugins: {
            legend: {
                display: false // Hide the legends
            },
            // annotation: {
            //     annotations: [{
            //         type: 'line',
            //         mode: 'horizontal',
            //         scaleID: 'y',
            //         value: 0, // set the value of the minimum line
            //         borderColor: 'red',
            //         borderWidth: 1,
            //         label: {
            //             enabled: true,
            //             content: 'Min'
            //         }
            //     }, {
            //         type: 'line',
            //         mode: 'horizontal',
            //         scaleID: 'y',
            //         value: 20, // set the value of the maximum line
            //         borderColor: 'green',
            //         borderWidth: 1,
            //         label: {
            //             enabled: true,
            //             content: 'Max'
            //         }
            //     }]
            // }
        }
    }
});
