import { createContext } from 'react';

const TrackerCotext = createContext({
  ipAddress: '',
  city: '',
  timeZone: '',
  isp: '',
  location: [0, 0],
  searchIP: () => {},
});

export default TrackerCotext;
