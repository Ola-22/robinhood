import "./style.css";
import { Line } from "react-chartjs-2";

export default function LineGraph() {
  const data = [
    {
      x: 10,
      y: 20,
    },
    {
      x: 15,
      y: 10,
    },
  ];
  return (
    <div className="linegraph">
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
              data: data,
            },
          ],
        }}
      />
    </div>
  );
}
