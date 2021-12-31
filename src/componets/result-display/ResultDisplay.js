import React, { useContext, useEffect } from 'react';
import TrackerCotext from '../../store/tracker-context';

import Spinner from '../ui/spinner/Spinner';

const ResultDisplay = () => {
  const trackerCtx = useContext(TrackerCotext);

  const { ipAddress, city, timeZone, isp } = trackerCtx;

  useEffect(() => {
    trackerCtx.searchIP();
  }, []);

  return (
    <div className="results">
      <div className="results__content">
        <h6 className="results__header">ip address</h6>
        <p className="result__data">{ipAddress ? ipAddress : <Spinner />}</p>
      </div>
      <div className="results__content">
        <h6 className="results__header">location</h6>
        <p className="result__data">{city ? city : <Spinner />}</p>
      </div>
      <div className="results__content">
        <h6 className="results__header">timezone</h6>
        <p className="result__data">{timeZone ? timeZone : <Spinner />}</p>
      </div>
      <div className="results__content">
        <h6 className="results__header">isp</h6>
        <p className="result__data">{isp ? isp : <Spinner />}</p>
      </div>
    </div>
  );
};

export default ResultDisplay;
