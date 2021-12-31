import React, { useState, useContext } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TrackerCotext from '../../store/tracker-context';
import { Fragment } from 'react/cjs/react.production.min';

const SearchBar = () => {
  const [inputText, setInputText] = useState('');
  const trackerCtx = useContext(TrackerCotext);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    trackerCtx.searchIP(inputText);
  };
  return (
    <div className="search__wrapper">
      {trackerCtx.error && (
        <div className="error">
          Input correct search term (IPv4,IPv6,domain)
        </div>
      )}
      <div className="search__box">
        <form className="search__form" onSubmit={submitHandler}>
          <input
            className="search__input"
            type="text"
            placeholder="Search for any IP address or domain"
            onChange={inputHandler}
            value={inputText}
          />
        </form>
        <button className="btn__submit" onClick={submitHandler}>
          <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
