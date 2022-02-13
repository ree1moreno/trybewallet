import React from 'react';
import PropTypes from 'prop-types';

class MethodSelect extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="method" className="text-lg text-stone-900">
        Forma de Pagamento:
        {' '}
        <select
          className="input-field focus:outline-none focus:ring-green-500 focus:border-green-600 w-44"
          data-testid="method-input"
          id="method"
          name="method"
          onChange={ onChange }
        >
          <option value=""> </option>
          <option value="Dinheiro">
            Dinheiro
          </option>
          <option value="Cartão de crédito">
            Cartão de crédito
          </option>
          <option value="Cartão de débito">
            Cartão de débito
          </option>
        </select>
      </label>
    );
  }
}

MethodSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default MethodSelect;
