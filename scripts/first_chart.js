Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Watermelon', 'Apples', 'Bananas', 'Oranges',]
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Makiya and Alan\'s house'
      }
    },
    series: [{
      name: 'Makiya',
      data: [6, 0, 4, 2]
    }, {
      name: 'Alan',
      data: [6, 7, 3, 4]
    }]
  });
