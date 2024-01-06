import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";

function Chart(props) {
  const [options, setOptions] = useState({}); // Initialize options later

  useEffect(() => {
    const successfulCount = props.data.reduce(
      (count, item) => count + (item.successful ? 1 : 0),
      0
    );
    const unsuccessfulCount = props.data.length - successfulCount;

    const chartData = [
      { category: "Successful", value: successfulCount },
      { category: "Unsuccessful", value: unsuccessfulCount },
    ];
    setOptions({
      data: chartData,
      title: {
        text: "Portfolio Composition",
      },
      series: [
        {
          type: "pie",
          angleKey: "value",
          legendItemKey: "category",
        },
      ],
    });
  }, [props.data]);

  return <AgChartsReact options={options} />;
}

export default Chart;
