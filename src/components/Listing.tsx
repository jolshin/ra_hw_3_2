import React from "react";
import { ListingProps } from "../models/interfaces";

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const formatPrice = (price: string, currency_code: string) => {
    switch (currency_code) {
      case "USD":
        return `$${price}`;
      case "EUR":
        return `€${price}`;
      default:
        return `${price} ${currency_code}`;
    }
  };

  const getQuantityClass = (quantity: number) => {
    if (quantity <= 10) return "level-low";
    if (quantity <= 20) return "level-medium";
    return "level-high";
  };
  
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title.length > 50
                ? `${item.title.substring(0, 50)}…`
                : item.title}
            </p>
            <p className="item-price">
              {formatPrice(item.price, item.currency_code)}
            </p>
            <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
