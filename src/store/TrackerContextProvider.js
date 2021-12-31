import React, { useState } from 'react';

import TrackerCotext from './tracker-context';

const TrackerContextProvider = (props) => {
  const [trackerData, setTrackerData] = useState({
    ipAddress: '',
    city: '',
    timeZone: '',
    isp: '',
    location: [0, 0],
    error: false,
  });

  const searchIP = async (ip) => {
    let url;

    if (ip) {
      url = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}&domain=${ip}`;
    } else {
      url = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}`;
    }
    const fetchData = async () => {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(res.status);
      }

      const resData = await res.json();

      setTrackerData({
        ipAddress: resData.ip,
        city: `${resData.location.region}, ${resData.location.city}`,
        timeZone: `UTC ${resData.location.timezone}`,
        isp: resData.isp,
        location: [resData.location.lat, resData.location.lng],
        error: false,
      });
    };

    try {
      await fetchData();
    } catch (error) {
      setTrackerData((prevState) => {
        return { ...prevState, error: true };
      });
      return;
    }
  };

  return (
    <TrackerCotext.Provider
      value={{
        ipAddress: trackerData.ipAddress,
        city: trackerData.city,
        timeZone: trackerData.timeZone,
        isp: trackerData.isp,
        location: trackerData.location,
        error: trackerData.error,
        searchIP: searchIP,
      }}
    >
      {props.children}
    </TrackerCotext.Provider>
  );
};

export default TrackerContextProvider;
