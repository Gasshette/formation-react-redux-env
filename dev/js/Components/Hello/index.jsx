import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.trigger = this.trigger.bind(this);
    this.state = {
      value: '',
    };
  }

  onChange(e) {
    this.setState({ value: e.target.value }, this.trigger);
  }

  trigger() {
    this.props.sayHello(this.state.value);
  }

  render() {
    return (
      <div>
        <h1>{this.props.hello}</h1>
        <input type="text" onChange={this.onChange} value={this.state.value} />
      </div>
    );
  }
}

Hello.propTypes = {
  sayHello: PropTypes.func.isRequired,
  hello: PropTypes.string.isRequired,
};

export default Hello;
