import React from 'react';
import PropTypes from 'prop-type';

const Hello = ({ hello }) => <h1>{hello} !</h1>;

Hello.propTypes = {
  hello: PropTypes.string.isRequired,
};

export default Hello;

