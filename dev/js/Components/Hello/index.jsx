import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ hello }) => <h1>{hello}</h1>;

Hello.propTypes = {
  hello: PropTypes.string.isRequired,
};

export default Hello;

