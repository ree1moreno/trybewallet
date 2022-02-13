import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';

class CoinSelect extends React.Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    const { currencies, onChange } = this.props;
    return (
      <label htmlFor="currency" className="text-lg text-stone-900">
        Moeda:
        {' '}
        <select
          className="input-field focus:outline-none focus:ring-green-500 focus:border-green-600 w-16"
          data-testid="currency-input"
          name="currency"
          id="currency"
          onChange={ onChange }
        >
          {currencies.map((coin) => (
            <option 
              key={ coin }
              value={ coin }
              data-testid={ coin }
            >
              { coin }
            </option>))}
        </select>
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchApi()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

CoinSelect.propTypes = {
  getCoins: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinSelect);
