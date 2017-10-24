import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    inputText: ''
  };

  onTextInputChange = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  render() {
    const { inputText } = this.state;
    return <Input text={inputText} onChange={this.onTextInputChange} />;
  }
}

const Input = props => {
  const { text, onChange, ...rest } = props;

  return <input value={text} onChange={onChange} {...rest} />;
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default App;
