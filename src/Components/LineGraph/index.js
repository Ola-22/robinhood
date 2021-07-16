import "./style.css";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
        ticks: {
          display: false,
        },
      },
    ],
    y: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};
export default function LineGraph() {
  const [graphData, setGraphData] = useState([]);

  const createMockData = () => {
    let data = [];
    let value = 50;
    for (var i = 0; i < 366; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push({ x: date, y: value });
    }
    setGraphData(data);
  };

  useEffect(() => {
    createMockData();
  }, []);

  return (
    <div className="linegraph">
      {graphData?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                type: "line",
                backgroundColor: "black",
                borderColor: "#5AC53B",
                borderWidth: 2,
                pointBorderColor: "rgba(0, 0, 0, 0)",
                pointBackgroundColor: "rgba(0, 0, 0, 0)",
                pointHoverBackgroundColor: "#5AC53B",
                pointHoverBorderColor: "#000000",
                pointHoverBorderWidth: 4,
                pointHoverRadius: 6,
                data: graphData,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}
