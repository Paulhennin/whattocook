import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function List({ allSettings, meals }) {
  useEffect(() => {
    allSettings();
  }, []);
  return (
    <section className="cards-deck main">
      {meals}
    </section>
  );
}

List.propTypes = {
  allSettings: PropTypes.func.isRequired,
  meals: PropTypes.array.isRequired,
};
