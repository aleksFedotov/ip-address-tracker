import { createContext } from 'react';

const TrackerCotext = createContext({
  ipAddress: '',
  city: '',
  timeZone: '',
  isp: '',
  location: [0, 0],
  error: false,
  isLoading: true,
  searchIP: () => {},
});

export default TrackerCotext;
