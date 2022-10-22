var colors = Highcharts.getOptions().colors;
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Florida Voter Registration by Party Affiliation'
    },
    subtitle: {
        text: 'Source: ' +
            '<a https://dos.myflorida.com/elections/data-statistics/voter-registration-statistics/voter-registration-reports/voter-registration-by-party-affiliation/" ' +
            'target="_blank">Florida Division of Elections</a>'
    },
    xAxis: {
        categories: [
            '2017',
            '2018',
            '2019',
            '2020',
            '2021',
            '2022'
        ],
        crosshair: true
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'Total active registered voters'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Republican Party of Florida',
        data: [5259406, 5123799, 5218739, 4761405, 4718720, 4544708]

    }, {
        name: 'Florida Democratic Party',
        data: [4966873, 5080697, 5315954, 4986520, 4975895, 4807950]

    }, {
        name: 'Minor Parties',
        data: [260936, 253843, 231246, 147546, 113489, 65526]

    }, {
        name: 'No Party Affiliation',
        data: [3974540, 3829372, 3799799, 3641359, 3588518, 3449005]

    }]
});


Highcharts.chart('container10', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Voter Registration by County and Party for the top 10 most populated Florida Counties'
    },
  subtitle: {
      text: 'Source: ' +
          '<a https://dos.myflorida.com/elections/data-statistics/voter-registration-statistics/voter-registration-reports/voter-registration-by-county-and-party/" ' +
          'target="_blank">Florida Division of Elections</a>'
  },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} active registered voters<sub>2</sub>'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Republican Party of Florida',
        data: [{
            name: 'MIAMI-DADE',
            value: 436037
        }, {
            name: 'BROWARD',
            value: 264973
        },
        {
            name: "PALM BEACH",
            value: 289586
        },
        {
            name: "HILLSBOROUGH",
            value: 288919
        },
        {
            name: "ORANGE",
            value: 217697
        },
        {
            name: "PINELLAS",
            value: 246303
        },
        {
            name: "DUVAL",
            value: 229657
        },
        {
            name: "LEE",
            value: 226257
        },
        {
            name: "POLK",
            value: 174894
        },
        {
            name: "BREVARD",
            value: 195551
        }]
    }, {
        name: 'Florida Democratic Party',
        data: [{
             name: 'MIAMI-DADE',
            value: 575556
        }, {
            name: 'BROWARD',
            value: 596811
        },
        {
            name: "PALM BEACH",
            value: 398594
        },
        {
            name: "HILLSBOROUGH",
            value: 342075
        },
        {
            name: "ORANGE",
            value: 360808
        },
        {
            name: "PINELLAS",
            value: 237258
        },
        {
            name: "DUVAL",
            value: 261485
        },
        {
            name: "LEE",
            value: 128677
        },
        {
            name: "POLK",
            value: 148622
        },
        {
            name: "BREVARD",
            value: 130700
        }]
    }, {
        name: 'Minor Party',
        data: [{
            name: 'MIAMI-DADE',
            value: 23109
        }, {
            name: 'BROWARD',
            value: 19834
        },
        {
            name: "PALM BEACH",
            value: 21954
        },
        {
            name: "HILLSBOROUGH",
            value: 17241
        },
        {
            name: "ORANGE",
            value: 14861
        },
        {
            name: "PINELLAS",
            value: 13579
        },
        {
            name: "DUVAL",
            value: 12423
        },
        {
            name: "LEE",
            value: 8817
        },
        {
            name: "POLK",
            value: 8564
        },
        {
            name: "BREVARD",
            value: 10656
        }]
    }, {
        name: 'No Party Affiliation',
        data: [{
            name: 'MIAMI-DADE',
            value: 487758
        }, {
            name: 'BROWARD',
            value: 367560
        },
        {
            name: "PALM BEACH",
            value: 290828
        },
        {
            name: "HILLSBOROUGH",
            value: 273161
        },
        {
            name: "ORANGE",
            value: 274632
        },
        {
            name: "PINELLAS",
            value: 196175
        },
        {
            name: "DUVAL",
            value: 150704
        },
        {
            name: "LEE",
            value: 153499
        },
        {
            name: "POLK",
            value: 130205
        },
        {
            name: "BREVARD",
            value: 122328
        }]
    }]
});
