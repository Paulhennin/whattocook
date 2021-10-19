import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function List({ meals }) {
  return (
    <section className="cards-deck" key={meals}>
      {meals}
    </section>
  );
}

List.propTypes = {
  meals: PropTypes.array.isRequired,
};
