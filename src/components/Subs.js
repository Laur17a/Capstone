import React from 'react';
import reel from '../pics/reel.png';
import '../App.css';
import list from '../components/data'; // Import the subscription data

function Subscriptions () {


  return(<div>

  <h1>Choose Your Subscription</h1>

  <div className="subscription-list">
      {list.map((subscription) => (
          <div key={subscription.id} className="subscription-card">
              <img src={subscription.img} alt={subscription.service} />
              <h2>{subscription.service}</h2>
              <p>{subscription.serviceInfo}</p>
              <p>${subscription.price.toFixed(2)} / month</p>
              <button>Add to Cart</button>
          </div>
      ))}
  </div>

  </div>);
};

export default Subscriptions;