document.addEventListener("DOMContentLoaded", function () {
    var options = {
        chart: {
            height: 550,
            type: 'line',
            stacked: false,

        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        dataLabels: {
            enabled: false
        },

        series: [
            {
                name: 'Line 1',
                data: [83, 86, 85, 96, 90, 83, 94, 91, 85, 96]
            },
            {
                name: 'Line 2',
                data: [85, 83, 88, 94, 93, 87, 91, 96, 89, 91]
            },
            {
                name: 'Line 3',
                data: [82, 81, 83, 99, 91, 83, 99, 92, 81, 93]
            },

            {
                name: 'Line 4',
                data: [45, 41, 50, 53, 52, 52, 48, 50, 49, 48]
            },
            {
                name: 'Line 5',
                data: [49, 45, 49, 51, 56, 53, 48, 49, 52, 54]
            },
            {
                name: 'Line 6',
                data: [82, 81, 83, 99, 91, 83, 99, 92, 81, 93]
            }
        ],


        xaxis: {
            categories: ['31/08/57', '31/08/57', '31/08/57', '31/08/57', '31/08/57', '31/08/57',
                '31/08/57', '31/08/57', '31/08/57', '31/08/57'],

        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value + " " + "mmol/L";
                },
                style: {
                    colors: '#000',
                    fontSize: '12px',
                    fontWeight: 800,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
            min: 0,
            max: 100,
            
            
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    };

    var chart = new ApexCharts(document.querySelector("#chartdetail"), options);
    chart.render();
});

chart.render();