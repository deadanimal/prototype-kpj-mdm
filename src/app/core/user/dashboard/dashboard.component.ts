import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  // Chart
  private chart: any;
  private chart1: any;
  private chart2: any;
  private clicked: any = true;
  private clicked1: any = false;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        console.log("Chart disposed");
        this.chart.dispose();
      }
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart();
      // this.getChart1();
      this.getChart2();
      this.getChartpie2();
    });
  }

  getChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    // chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        month: "Jan",
        data1: 1,
        data2: 5,
        data3: 4,
      },
      {
        month: "Feb",
        data1: 3,
        data2: 2,
        data3: 7,
      },
      {
        month: "Mar",
        data1: 5,
        data2: 4,
        data3: 5,
      },
      {
        month: "Apr",
        data1: 3,
        data2: 3,
        data3: 5,
      },
      {
        month: "May",
        data1: 6,
        data2: 5,
        data3: 2,
      },
      {
        month: "Jun",
        data1: 2,
        data2: 4,
        data3: 1,
      },
      {
        month: "Jul",
        data1: 4,
        data2: 3,
        data3: 4,
      },
      {
        month: "Aug",
        data1: 6,
        data2: 5,
        data3: 2,
      },
      {
        month: "Sep",
        data1: 5,
        data2: 4,
        data3: 2,
      },
      {
        month: "Oct",
        data1: 5,
        data2: 5,
        data3: 2,
      },
      {
        month: "Nov",
        data1: 4,
        data2: 5,
        data3: 3,
      },
      {
        month: "Dec",
        data1: 5,
        data2: 6,
        data3: 4,
      },
    ];
    // Create category axis
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    // categoryAxis.renderer.opposite = true;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.renderer.inversed = true;
    valueAxis.title.text = "Amount";
    valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "data1";
    series1.dataFields.categoryX = "month";
    series1.name = "New Users";
    series1.strokeWidth = 3;
    series1.bullets.push(new am4charts.CircleBullet());
    series1.tooltipText = "Jumlah {name} in {categoryX}: {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible = false;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "data2";
    series2.dataFields.categoryX = "month";
    series2.name = "Active Users";
    series2.strokeWidth = 3;
    series2.bullets.push(new am4charts.CircleBullet());
    series2.tooltipText = "Jumlah {name} in {categoryX}: {valueY}";
    series2.legendSettings.valueText = "{valueY}";

    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "data3";
    series3.dataFields.categoryX = "month";
    series3.name = "Inactive Users";
    series3.strokeWidth = 3;
    series3.bullets.push(new am4charts.CircleBullet());
    series3.tooltipText = "Jumlah {name} in {categoryX}: {valueY}";
    series3.legendSettings.valueText = "{valueY}";

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    // Add legend
    chart.legend = new am4charts.Legend();
  }

  // getChart1() {
  //   let chart = am4core.create("chartdivpie1", am4charts.PieChart);
  //   chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  //   chart.data = [
  //     {
  //       item: "Lights",
  //       value: 40,
  //     },
  //     {
  //       item: "Fridge",
  //       value: 30,
  //     },
  //     {
  //       item: "TV",
  //       value: 20,
  //     },
  //     {
  //       item: "Washing Machine",
  //       value: 16,
  //     },
  //   ];
  //   chart.radius = am4core.percent(70);
  //   chart.innerRadius = am4core.percent(40);
  //   chart.startAngle = 180;
  //   chart.endAngle = 360;

  //   let series = chart.series.push(new am4charts.PieSeries());
  //   series.dataFields.value = "value";
  //   series.dataFields.category = "item";
  //   series.ticks.template.disabled = true;
  //   series.labels.template.disabled = true;

  //   series.slices.template.cornerRadius = 10;
  //   series.slices.template.innerCornerRadius = 7;
  //   series.slices.template.draggable = true;
  //   series.slices.template.inert = true;
  //   series.alignLabels = false;

  //   series.hiddenState.properties.startAngle = 90;
  //   series.hiddenState.properties.endAngle = 90;

  //   //chart.legend = new am4charts.Legend();
  //   // this.chart1 = chart;
  // }

  getChartpie2() {
    let chart = am4core.create("piechartdiv111", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "task";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    // change the cursor on hover to make it apparent the object can be interacted with
    pieSeries.slices.template.cursorOverStyle = [
      {
        property: "cursor",
        value: "pointer",
      },
    ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(
      new am4core.DropShadowFilter()
    );
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter());
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        task: "User 1",
        value: 501.9,
      },
      {
        task: "User 2",
        value: 304.8,
      },
      {
        task: "User 3",
        value: 200,
      },
      {
        task: "User 4",
        value: 400,
      },
    ];
  }

  getChart2() {
    let chart = am4core.create("chartdivdashboard", am4charts.XYChart);
    // chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        country: "Jan",
        visits: 3025,
      },
      {
        country: "Feb",
        visits: 1882,
      },
      {
        country: "Mar",
        visits: 1809,
      },
      {
        country: "Apr",
        visits: 1322,
      },
      {
        country: "May",
        visits: 1122,
      },
      {
        country: "Jun",
        visits: 1114,
      },
      {
        country: "July",
        visits: 984,
      },
      {
        country: "Aug",
        visits: 711,
      },
      {
        country: "Sep",
        visits: 665,
      },
      {
        country: "Oct",
        visits: 580,
      },
      {
        country: "Nov",
        visits: 443,
      },
      {
        country: "Dec",
        visits: 441,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();

    // this.chart2 = chart;
  }
}
