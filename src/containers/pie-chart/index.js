import React, { useEffect, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import am4themes_material from "@amcharts/amcharts4/themes/material";
import { Select } from "antd";
// import ReactGA from "react-ga";
import ReCAPTCHA from "react-google-recaptcha";
am4core.useTheme(am4themes_animated);
//CHANGE THEME
// am4core.useTheme(am4themes_material);
const { Option } = Select;
function Chart(props) {
  useEffect(() => {
    // ReactGA.plugin.require("localHitSender", { path: "/log", debug: true });
    // ReactGA.plugin.execute("ecommerce", "addTransaction", {
    //   id: "jd38je31j",
    //   revenue: "3.50",
    // });
  });
  const [chartType, setType] = useState(0);
  // const setColor = (chart) => {
  //   chart.colors.list = [
  //     "#2F348F",
  //     "#395FAC",
  //     "#7987C3",
  //     "#EC1F26",
  //     "#141447",
  //     "#00368C",
  //     "#425799",
  //     "#B20016",
  //     "#212174",
  //     "#0047B9",
  //     "#5571C6",
  //     "#DF001C",
  //     "#251C65",
  //     "#243CAC",
  //     "#6168C3",
  //     "#FF3E39",
  //     "#222665",
  //     "#2F66AC",
  //     "#5F78C3",
  //     "#EC3D54",
  //   ].map((item) => am4core.color(item));
  // };
  const showChart = () => {
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9,
      },
      {
        country: "Czech Republic",
        litres: 301.9,
      },
      {
        country: "Ireland",
        litres: 201.1,
      },
      {
        country: "Germany",
        litres: 165.8,
      },
      {
        country: "Australia",
        litres: 139.9,
      },
      {
        country: "Austria",
        litres: 128.3,
      },
      {
        country: "UK",
        litres: 99,
      },
      {
        country: "Belgium",
        litres: 60,
      },
      {
        country: "The Netherlands",
        litres: 50,
      },
    ];
    // Set inner radius
    chart.innerRadius = am4core.percent(chartType);
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 0.5;

    //SET COLOR
    // setColor(pieSeries)

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    //disabled ticks and label
    //   pieSeries.labels.template.disabled = true;
    // pieSeries.ticks.template.disabled = true;

    //disable Tooltip when hover slide
    // pieSeries.slices.template.tooltipText = "";

    //disable growing on hover=>scale=1, change opacity of slice when hover:
    // let hs = pieSeries.slices.template.states.getKey("hover");
    // hs.properties.scale = 1;
    // hs.properties.fillOpacity = 0.5;

    //add legend
    // chart.legend = new am4charts.Legend();

    //Labels inside Pie chart slices
    // pieSeries.ticks.template.disabled = true;
    // pieSeries.alignLabels = false;
    // pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    // pieSeries.labels.template.radius = am4core.percent(-40);
    // pieSeries.labels.template.fill = am4core.color("white");

    //Selectively placing labels inside or outside slices
    // pieSeries.labels.template.adapter.add("radius", function(radius, target) {
    //   if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
    //     return 0;
    //   }
    //   return radius;
    // });

    // pieSeries.labels.template.adapter.add("fill", function(color, target) {
    //   if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
    //     return am4core.color("#000");
    //   }
    //   return color;
    // });
  };
  useEffect(() => showChart());
  const onChange = (value) => {
    console.log("Captcha value:", value);
  };
  const reCaptcha2 = () => {
    return (
      <ReCAPTCHA
        sitekey="6Lfo5tcZAAAAAGR5qXSfU7097BY1CMVHxTv2B3Bw"
        onChange={onChange}
        theme="dark"
        size="normal"
        //size: compact, normal or invisible
      />
    );
  };
  return (
    <div>
      <Select
        value={chartType}
        onChange={(e) => setType(e)}
        showSearch
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        style={{ width: 120 }}
      >
        <Option value={0}>Pie Chart</Option>
        <Option value={50}>Donut Chart</Option>
      </Select>
      <div id="chartdiv" style={{ width: "100%", height: "400px" }}></div>
      {reCaptcha2()}
    </div>
  );
}

export default Chart;
