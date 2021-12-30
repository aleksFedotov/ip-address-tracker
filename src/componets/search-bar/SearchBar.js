import React from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="search__box">
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Search for any IP address or domain"
        />
      </form>
      <button className="btn__submit">
        <FontAwesomeIcon icon={faChevronRight} className="chevron" />
      </button>
    </div>
  );
};

export default SearchBar;
