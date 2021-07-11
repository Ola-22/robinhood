import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import StatsRow from "./StatsRow";

const TOKEN = "c3kol1qad3idu4kfj2f0";
const BASE_URL = "https://finnhub.io/api/v1/quote";

export default function Stats() {
  const [stockData, setStockData] = useState([]);

  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  useEffect(() => {
    let tempStocksData = [];
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "FB",
      "BABA",
      "UBER",
      "DIS",
      "SBUX",
    ];

    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          console.log(res);
          tempStocksData.push({
            name: stock,
            ...res?.data,
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      // console.log(testData);
      setStockData(tempStocksData);
      console.log(tempStocksData);
    });
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {/* {myStocks.map((stock) => (
              <StatsRow
              key={stock.data.ticker}
              name={stock.data.ticker}
              openPrice={stock.info.o}
              volume={stock.data.shares}
              price={stock.info.c}
              />
            ))} */}
          </div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
