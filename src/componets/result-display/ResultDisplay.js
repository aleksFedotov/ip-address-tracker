import React from 'react';

const ResultDisplay = () => {
  return (
    <div className="results">
      <div className="results__content">
        <h6 className="results__header">ip address</h6>
        <p className="result__data">192.212.174.101</p>
      </div>
      <div className="results__content">
        <h6 className="results__header">location</h6>
        <p className="result__data">Brooklyn, NY, 10001</p>
      </div>
      <div className="results__content">
        <h6 className="results__header">timezone</h6>
        <p className="result__data">UTC -05:00</p>
      </div>
      <div className="results__content">
        <h6 className="results__header">isp</h6>
        <p className="result__data">SpaceX Starlink</p>
      </div>
    </div>
  );
};

export default ResultDisplay;
