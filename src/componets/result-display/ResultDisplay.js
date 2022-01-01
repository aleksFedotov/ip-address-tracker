import React, { useContext, useEffect } from 'react';
import TrackerCotext from '../../store/tracker-context';

import Spinner from '../ui/spinner/Spinner';

const ResultDisplay = () => {
  const trackerCtx = useContext(TrackerCotext);

  const { ipAddress, city, timeZone, isp, searchIP, isLoading } = trackerCtx;

  useEffect(() => {
    searchIP();
  }, []);

  return (
    <div className="results">
      <div className="results__content">
        <h2 className="results__header">ip address</h2>
        <p className="result__data">{!isLoading ? ipAddress : <Spinner />}</p>
      </div>
      <div className="results__content">
        <h2 className="results__header">location</h2>
        <p className="result__data">{!isLoading ? city : <Spinner />}</p>
      </div>
      <div className="results__content">
        <h2 className="results__header">timezone</h2>
        <p className="result__data">{!isLoading ? timeZone : <Spinner />}</p>
      </div>
      <div className="results__content">
        <h2 className="results__header">isp</h2>
        <p className="result__data">{!isLoading ? isp : <Spinner />}</p>
      </div>
    </div>
  );
};

export default ResultDisplay;
