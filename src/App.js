import React from 'react';
import PriceCard from './components/priceCard.js';
import './App.css';

const plans = [
  {
    name: 'Free',
    price: 0,
    buttonText: 'Sign up for free',
    features: [
      { label: 'Single User', enabled: true },
      { label: '5GB Storage', enabled: true },
      { label: 'Unlimited Public Projects', enabled: true },
      { label: 'Community Access', enabled: true },
      { label: 'Unlimited Private Projects', enabled: false },
      { label: 'Dedicated Phone Support', enabled: false },
      { label: 'Free Subdomain', enabled: false },
      { label: 'Monthly Status Reports', enabled: false },
    ],
  },
  {
    name: 'Pro',
    price: 9,
    buttonText: 'Get Started',
    features: [
      { label: '5 Users', enabled: true },
      { label: '50GB Storage', enabled: true },
      { label: 'Unlimited Public Projects', enabled: true },
      { label: 'Community Access', enabled: true },
      { label: 'Unlimited Private Projects', enabled: true },
      { label: 'Dedicated Phone Support', enabled: true },
      { label: 'Free Subdomain', enabled: true },
      { label: 'Monthly Status Reports', enabled: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 49,
    buttonText: 'Contact Us',
    features: [
      { label: 'Unlimited Users', enabled: true },
      { label: '150GB Storage', enabled: true },
      { label: 'Unlimited Public Projects', enabled: true },
      { label: 'Community Access', enabled: true },
      { label: 'Unlimited Private Projects', enabled: true },
      { label: 'Dedicated Phone Support', enabled: true },
      { label: 'Unlimited Free Subdomains', enabled: true },
      { label: 'Monthly Status Reports', enabled: true },
    ],
  },
];

function App() {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {plans.map((plan, index) => (
          <div className="col" key={index}>
            <PriceCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
