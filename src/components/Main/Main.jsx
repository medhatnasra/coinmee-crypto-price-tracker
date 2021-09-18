import React, { useContext } from "react";
import Coin from "../Coin/Coin";
import "./Main.css";
import { CoinContext } from "../../Helpers/Context";

const Main = () => {
  const { CoinData } = useContext(CoinContext);

  return (
    <div className="main">
      {CoinData.map((c) => {
        return (
          <Coin
            key={c.id}
            image={c.image}
            title={c.title}
            name={c.name}
            symbol={c.symbol}
            market={c.market_cap}
            price={c.current_price}
            volume={c.total_volume}
            pricechange={c.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default Main;
