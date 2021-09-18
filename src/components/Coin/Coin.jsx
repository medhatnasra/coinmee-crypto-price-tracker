import React from "react";
import "./Coin.css";

const Coin = ({ image, name, price, symbol, market, volume, pricechange }) => {
  return (
    <div className="coin">
      <img src={image} alt={name} className="coin__image" />
      <div className="title">
        <h3>{name}</h3>
        <strong>{symbol}</strong>
      </div>

      <h3>${price}</h3>
      <div className="market">
        MarketCap : <span>${market.toLocaleString()}</span>
      </div>
      <div className="volume">
        Volume(24h) : <span>${volume.toLocaleString()}</span>
      </div>

      {pricechange > 0 ? (
        <div className="percentage">
          <i className="fas fa-arrow-up" style={{margin: ".5rem"}}></i>
          <h4>{pricechange.toFixed(2)}%</h4>
        </div>
      ) : (
        <div className="percentage" style={{ backgroundColor: "red" }}>
                    <i className="fas fa-arrow-down" style={{margin: ".5rem"}}></i>

          <h4>{pricechange.toFixed(2)}%</h4>
        </div>
      )}
    </div>
  );
};

export default Coin;
