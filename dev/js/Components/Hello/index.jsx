import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.trigger = this.trigger.bind(this);
    this.loadMovies = this.loadMovies.bind(this);
    this.state = {
      value: '',
    };
  }

  onChange(e) {
    this.setState({ value: e.target.value }, this.trigger);
  }

  loadMovies() {
    this.props.getMovies();
  }

  trigger() {
    this.props.sayHello(this.state.value);
  }

  render() {
    console.log(this.props.movies);
    return (
      <div>
        <h1>{this.props.hello}</h1>
        <input type="text" onChange={this.onChange} value={this.state.value} />
        <br /><br />
        <button type="button" onClick={this.loadMovies}>Load movies</button>
      </div>
    );
  }
}

Hello.propTypes = {
  sayHello: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
  hello: PropTypes.string.isRequired,
  movies: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    movies: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.string,
      ),
    ),
  }).isRequired,
};

Hello.defaultProps = {
  movies: {},
};

export default Hello;
