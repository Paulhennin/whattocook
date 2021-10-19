import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Alphabet({ meals, setMeals, data, searchByLetter }) {
  const [alphabetList, setAlphabetList] = useState('');
  const handleSearchByLetter = (e) => {
    searchByLetter(e.target.id, setMeals, data);
  };
  useEffect(() => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split("");
    console.log(alphabet);
    const list = alphabet.map((letter, i) => {
      <></>;
      if (i < alphabet.length - 1) {
        return (
          <><span onClick={handleSearchByLetter} className="search-by-alphabet" key={letter} id={letter}> {letter} </span><span>-</span> </>
        );
      }
      else {
        return (
          <span onClick={handleSearchByLetter} className="search-by-alphabet" key={letter}  id={letter}>{letter}</span>
        )
      }
    });
    setAlphabetList(list);
  }, []);
  return (
    <div className="alphabet">{alphabetList}</div>
  );
}

Alphabet.propTypes = {
  meals: PropTypes.array.isRequired,
  setMeals: PropTypes.func.isRequired,
  searchByLetter: PropTypes.func.isRequired,
};
