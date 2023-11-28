const ctx_height = document.getElementById('ctx_height');
const ctx_weight = document.getElementById('ctx_weight');
const ctx_bmi = document.getElementById('ctx_bmi');
const ctx_bmr = document.getElementById('ctx_bmr');
const ctx_body_temperature = document.getElementById('ctx_body_temperature');
const ctx_blood_pressure = document.getElementById('ctx_blood_pressure');

new Chart(ctx_height, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: 'BLOOD PRESSURE',
            data: [0, 3, 8, 5, 16, 11, 18],
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 0,
            borderColor: 'black'
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
                    color: 'black',
                    lineWidth: 4
                }
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false,
                    drawTicks: false,
                    drawOnChartArea: true,
                    color: 'black',
                    lineWidth: 0.5,
                    zeroLineWidth: 1
                },
                beginAtZero: true,
                min: -10,
                max: 30,
                ticks: {
                    display: false,
                    stepSize: 15
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

new Chart(ctx_weight, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: 'WEIGHT',
            data: [0, 3, 8, 5, 16, 11, 18],
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 0,
            borderColor: '#22c55e'
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
                    color: 'black',
                    lineWidth: 1
                }
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false,
                    drawTicks: false,
                    drawOnChartArea: true,
                    color: 'black',
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


new Chart(ctx_bmi, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: 'WEIGHT',
            data: [0, 3, 8, 5, 16, 11, 18],
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 0,
            borderColor: '#22c55e'
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
                    color: 'black',
                    lineWidth: 1
                }
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false,
                    drawTicks: false,
                    drawOnChartArea: true,
                    color: 'black',
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

new Chart(ctx_bmr, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: 'WEIGHT',
            data: [0, 3, 8, 5, 16, 11, 18],
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 0,
            borderColor: '#ebb613'
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
                    color: 'black',
                    lineWidth: 1
                }
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false,
                    drawTicks: false,
                    drawOnChartArea: true,
                    color: 'black',
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


new Chart(ctx_body_temperature, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: 'WEIGHT',
            data: [0, 3, 8, 5, 16, 11, 18],
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 0,
            borderColor: '#ef4444'
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
                    color: 'black',
                    lineWidth: 1
                }
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false,
                    drawTicks: false,
                    drawOnChartArea: true,
                    color: 'black',
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


new Chart(ctx_blood_pressure, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: 'Sys',
            data: [0, 3, 8, 5, 16, 11, 18],
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 0,
            borderColor: '#22c55e'
        },
        {
            label: '    Dia',
            data: [20, 15, 25, 18, 20, 15, 22], 
            borderWidth: 2.5,
            tension: 0.4,
            pointRadius: 0,
            borderColor: '#408b86'
        }
    ]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: true,
                    drawBorder: false,
                    drawTicks: false,
                    drawOnChartArea: false,
                    color: 'black',
                    lineWidth: 1
                }
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false,
                    drawTicks: false,
                    drawOnChartArea: true,
                    color: 'black',
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