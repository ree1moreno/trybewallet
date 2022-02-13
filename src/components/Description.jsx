import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  render() {
    const { onChange, description } = this.props;
    return (
      <label htmlFor="description" className="text-lg text-stone-900">
        Descrição:
        {' '}
        <input
          autoComplete="off"
          className="input-field focus:outline-none focus:ring-green-500 focus:border-green-600 w-80 description-field"
          type="text"
          data-testid="description-input"
          name="description"
          onChange={ onChange }
          value={ description }
          />
      </label>
    );
  }
}

Description.propTypes = {
  onChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default Description;
