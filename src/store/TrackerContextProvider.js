import React, { useState } from 'react';

import TrackerCotext from './tracker-context';

const TrackerContextProvider = (props) => {
  const [trackerData, setTrackerData] = useState({
    ipAddress: '192.212.174.101',
    city: 'California, South San Gabriel',
    timeZone: 'UTC -08:00',
    isp: 'Southern California Edison',
    location: [34.04915, -118.09462],
    error: false,
    isLoading: true,
  });

  const searchIP = async (ip) => {
    setTrackerData((prevState) => {
      return { ...prevState, error: false, isLoading: true };
    });

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
        isLoading: false,
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
        isLoading: trackerData.isLoading,
        searchIP: searchIP,
      }}
    >
      {props.children}
    </TrackerCotext.Provider>
  );
};

export default TrackerContextProvider;
