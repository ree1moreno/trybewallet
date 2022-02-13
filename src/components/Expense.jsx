import React from 'react';
import PropTypes from 'prop-types';

class Expense extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
        <label htmlFor="value" className="text-lg text-stone-900">
          Valor:
          {' '}
          <input
            autoComplete="off"
            className="input-field focus:outline-none focus:ring-green-500 focus:border-green-600 w-20"
            type="number"
            data-testid="value-input"
            name="value"
            onChange={ onChange }
            value={ value }
            />
       </label>
    );
  }
}

Expense.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Expense;
