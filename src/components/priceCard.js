import React from 'react';
import './priceCard.js';

const PriceCard = ({ plan }) => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h4 className="my-0 fw-normal">{plan.name}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          ${plan.price}<small className="text-muted">/mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className={feature.enabled ? '' : 'text-muted'}
            >
              {feature.enabled ? '✔' : '✖'} {feature.label}
            </li>
          ))}
        </ul>
        <button type="button" className="w-100 btn btn-lg btn-outline-primary">
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
