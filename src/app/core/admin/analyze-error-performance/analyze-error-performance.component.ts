import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-analyze-error-performance',
  templateUrl: './analyze-error-performance.component.html',
  styleUrls: ['./analyze-error-performance.component.scss']
})
export class AnalyzeErrorPerformanceComponent implements OnInit {

  // Chart
  chart: any
  chart1: any
  chart2: any
  chart3: any
  chart4: any
  chart5: any

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
      this.getChart1()
      this.getChart2()
      this.getChart3()
      this.getChart4()
      this.getChart5()
    })
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
      if (this.chart1) {
        this.chart1.dispose()
      }
      if (this.chart2) {
        this.chart2.dispose()
      }
      if (this.chart3) {
        this.chart3.dispose()
      }
      if (this.chart4) {
        this.chart4.dispose()
      }
      if (this.chart5) {
        this.chart5.dispose()
      }
    })
  }

  getChart() {
    let chart = am4core.create("chartdiverror", am4charts.XYChart);

    // Add data
    chart.data = [{
      "date": new Date(2018, 3, 20),
      "value": 90
    }, {
      "date": new Date(2018, 3, 21),
      "value": 102
    }, {
      "date": new Date(2018, 3, 22),
      "value": 65
    }, {
      "date": new Date(2018, 3, 23),
      "value": 62
    }, {
      "date": new Date(2018, 3, 24),
      "value": 55
    }, {
      "date": new Date(2018, 3, 25),
      "value": 81,
      "disabled": false
    }];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;
    lineSeries.strokeDasharray = "5,4";

    // Add simple bullet
    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.disabled = true;
    bullet.propertyFields.disabled = "disabled";

    let secondCircle = bullet.createChild(am4core.Circle);
    secondCircle.radius = 6;
    secondCircle.fill = chart.colors.getIndex(8);


    bullet.events.on("inited", function (event) {
      animateBullet(event.target.circle);
    })


    function animateBullet(bullet) {
      let animation = bullet.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
      animation.events.on("animationended", function (event) {
        animateBullet(event.target.object);
      })
    }

  }

  getChart1() {
    let chart = am4core.create("chartdiverror1", am4charts.XYChart);

    // Add data
    chart.data = [{
      "date": new Date(2018, 3, 20),
      "value": 90
    }, {
      "date": new Date(2018, 3, 21),
      "value": 102
    }, {
      "date": new Date(2018, 3, 22),
      "value": 65
    }, {
      "date": new Date(2018, 3, 23),
      "value": 62
    }, {
      "date": new Date(2018, 3, 24),
      "value": 55
    }, {
      "date": new Date(2018, 3, 25),
      "value": 81,
      "disabled": false
    }];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;
    lineSeries.strokeDasharray = "5,4";

    // Add simple bullet
    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.disabled = true;
    bullet.propertyFields.disabled = "disabled";

    let secondCircle = bullet.createChild(am4core.Circle);
    secondCircle.radius = 6;
    secondCircle.fill = chart.colors.getIndex(8);


    bullet.events.on("inited", function (event) {
      animateBullet(event.target.circle);
    })


    function animateBullet(bullet) {
      let animation = bullet.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
      animation.events.on("animationended", function (event) {
        animateBullet(event.target.object);
      })
    }

  }

  getChart2() {
    let chart = am4core.create("chartdiverror2", am4charts.XYChart);

    // Add data
    chart.data = [{
      "date": new Date(2018, 3, 20),
      "value": 90
    }, {
      "date": new Date(2018, 3, 21),
      "value": 102
    }, {
      "date": new Date(2018, 3, 22),
      "value": 65
    }, {
      "date": new Date(2018, 3, 23),
      "value": 62
    }, {
      "date": new Date(2018, 3, 24),
      "value": 55
    }, {
      "date": new Date(2018, 3, 25),
      "value": 81,
      "disabled": false
    }];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;
    lineSeries.strokeDasharray = "5,4";

    // Add simple bullet
    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.disabled = true;
    bullet.propertyFields.disabled = "disabled";

    let secondCircle = bullet.createChild(am4core.Circle);
    secondCircle.radius = 6;
    secondCircle.fill = chart.colors.getIndex(8);


    bullet.events.on("inited", function (event) {
      animateBullet(event.target.circle);
    })


    function animateBullet(bullet) {
      let animation = bullet.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
      animation.events.on("animationended", function (event) {
        animateBullet(event.target.object);
      })
    }

  }

  getChart3() {
    let chart = am4core.create("chartdiverror3", am4charts.XYChart);

    // Add data
    chart.data = [{
      "date": new Date(2018, 3, 20),
      "value": 90
    }, {
      "date": new Date(2018, 3, 21),
      "value": 102
    }, {
      "date": new Date(2018, 3, 22),
      "value": 65
    }, {
      "date": new Date(2018, 3, 23),
      "value": 62
    }, {
      "date": new Date(2018, 3, 24),
      "value": 55
    }, {
      "date": new Date(2018, 3, 25),
      "value": 81,
      "disabled": false
    }];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;
    lineSeries.strokeDasharray = "5,4";

    // Add simple bullet
    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.disabled = true;
    bullet.propertyFields.disabled = "disabled";

    let secondCircle = bullet.createChild(am4core.Circle);
    secondCircle.radius = 6;
    secondCircle.fill = chart.colors.getIndex(8);


    bullet.events.on("inited", function (event) {
      animateBullet(event.target.circle);
    })


    function animateBullet(bullet) {
      let animation = bullet.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
      animation.events.on("animationended", function (event) {
        animateBullet(event.target.object);
      })
    }

  }

  getChart4() {
    let chart = am4core.create("chartdiverror4", am4charts.XYChart);

    // Add data
    chart.data = [{
      "date": new Date(2018, 3, 20),
      "value": 90
    }, {
      "date": new Date(2018, 3, 21),
      "value": 102
    }, {
      "date": new Date(2018, 3, 22),
      "value": 65
    }, {
      "date": new Date(2018, 3, 23),
      "value": 62
    }, {
      "date": new Date(2018, 3, 24),
      "value": 55
    }, {
      "date": new Date(2018, 3, 25),
      "value": 81,
      "disabled": false
    }];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;
    lineSeries.strokeDasharray = "5,4";

    // Add simple bullet
    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.disabled = true;
    bullet.propertyFields.disabled = "disabled";

    let secondCircle = bullet.createChild(am4core.Circle);
    secondCircle.radius = 6;
    secondCircle.fill = chart.colors.getIndex(8);


    bullet.events.on("inited", function (event) {
      animateBullet(event.target.circle);
    })


    function animateBullet(bullet) {
      let animation = bullet.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
      animation.events.on("animationended", function (event) {
        animateBullet(event.target.object);
      })
    }

  }

  getChart5() {
    let chart = am4core.create("chartdiverror5", am4charts.XYChart);

    // Add data
    chart.data = [{
      "date": new Date(2018, 3, 20),
      "value": 90
    }, {
      "date": new Date(2018, 3, 21),
      "value": 102
    }, {
      "date": new Date(2018, 3, 22),
      "value": 65
    }, {
      "date": new Date(2018, 3, 23),
      "value": 62
    }, {
      "date": new Date(2018, 3, 24),
      "value": 55
    }, {
      "date": new Date(2018, 3, 25),
      "value": 81,
      "disabled": false
    }];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;
    lineSeries.strokeDasharray = "5,4";

    // Add simple bullet
    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.disabled = true;
    bullet.propertyFields.disabled = "disabled";

    let secondCircle = bullet.createChild(am4core.Circle);
    secondCircle.radius = 6;
    secondCircle.fill = chart.colors.getIndex(8);


    bullet.events.on("inited", function (event) {
      animateBullet(event.target.circle);
    })


    function animateBullet(bullet) {
      let animation = bullet.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
      animation.events.on("animationended", function (event) {
        animateBullet(event.target.object);
      })
    }

  }

}
