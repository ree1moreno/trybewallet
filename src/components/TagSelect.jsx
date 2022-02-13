import React from 'react';
import PropTypes from 'prop-types';

class TagSelect extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="tag" className="text-lg text-stone-900">
        Tag:
        {' '}
        <select 
          data-testid="tag-input"
          name="tag"
          onChange={ onChange }
          id="tag"
          className="input-field focus:outline-none focus:ring-green-500 focus:border-green-600 w-32"
        >
          <option value=""> </option>
          <option value="Alimentação">
            Alimentação
          </option>
          <option value="Lazer">
            Lazer
          </option>
          <option value="Trabalho">
            Trabalho
          </option>
          <option value="Transporte">
            Transporte
          </option>
          <option value="Saúde">
            Saúde
          </option>
        </select>
      </label>
    );
  }
}

TagSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TagSelect;
