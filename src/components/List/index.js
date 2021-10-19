import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function List({ allSettings, meals }) {
  return (
    <section className="cards-deck main" key={meals}>
      {meals}
    </section>
  );
}

List.propTypes = {
  allSettings: PropTypes.func.isRequired,
  meals: PropTypes.array.isRequired,
};
