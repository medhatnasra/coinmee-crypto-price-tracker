import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import { CoinContext } from "./Helpers/Context";

function App() {
  const [CoinData, setCoinData] = useState([]);
  const [FetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await response.json();
      setCoinData(data);
      setFetchedData(data);
    };
    FetchData();
  }, []);

  const Filterfunction = (x) => {
    let value = x.toLowerCase();
    let NewArray = FetchedData.filter((f) => {
      return f.name.toLowerCase().indexOf(value) !== -1;
    });
    setCoinData(NewArray);
  };

  return (
    <div className="app">
      <CoinContext.Provider
        value={{ CoinData, setCoinData, FetchedData, Filterfunction }}
      >
        <Header />
        <Main />
      </CoinContext.Provider>
    </div>
  );
}

export default App;
