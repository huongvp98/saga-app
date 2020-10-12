import React, { useEffect, useState } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Select } from 'antd';
am4core.useTheme(am4themes_animated);
const {Option} = Select
function Chart(props) {
  const [chartType, setType] = useState(0)
  const showChart = () =>{
    let chart = am4core.create("chartdiv", am4charts.PieChart);
  chart.data = [ {
    "country": "Lithuania",
    "litres": 501.9
  }, {
    "country": "Czech Republic",
    "litres": 301.9
  }, {
    "country": "Ireland",
    "litres": 201.1
  }, {
    "country": "Germany",
    "litres": 165.8
  }, {
    "country": "Australia",
    "litres": 139.9
  }, {
    "country": "Austria",
    "litres": 128.3
  }, {
    "country": "UK",
    "litres": 99
  }, {
    "country": "Belgium",
    "litres": 60
  }, {
    "country": "The Netherlands",
    "litres": 50
  } ];
  // Set inner radius
  chart.innerRadius = am4core.percent(chartType);
  // Add and configure Series
  let pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "litres";
  pieSeries.dataFields.category = "country";
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;

  // This creates initial animation
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
  }
  useEffect(()=>showChart())
  
  return (
    <div>
      <Select
      value={chartType}
      onChange={e=> setType(e)}
      showSearch
      filterOption ={(input, option)=> option.props.children.toLowerCase().indexOf(input.toLowerCase())>=0}
      >
        <Option value={0}>Pie Chart</Option>
        <Option value={50}>Donut Chart</Option>
      </Select>
      <div id="chartdiv" style={{ width: "100%", height: "400px" }}>
    </div>
    </div>
    
  );
}

export default Chart;