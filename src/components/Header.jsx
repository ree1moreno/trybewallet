import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import trybeWallet from '../wallet.png';
import Logout from './Logout';


class Header extends React.Component {
  expensesSum() {
    const { expenses } = this.props;
    const sum = expenses
      .reduce((a, b) => a + (b.value) * b.exchangeRates[b.currency].ask, 0);
    return sum.toFixed(2);
  }


  render() {
    const { userEmail } = this.props;
    return (
      <div className="px-4 sm:px-6 header-bg">
        <div className="py-4">
          <div className="header-content">
            <div className="logo-container">
              <img
                  className="h-8 w-auto sm:h-10"
                  src={trybeWallet}
                  alt="wallet logo"
              />
              <h2 className="text-3xl font-extrabold text-gray-900">
                TrybeWallet
              </h2>
            </div>
            <p data-testid="email-field" className="text-lg font-medium text-orange-900">
              { `Olá: ${userEmail}`}
            </p>
            <div className="expense-container text-lg font-medium text-stone-900">
              <p>
                Despesa Total:
                {' '}
                <span data-testid="total-field">
                  {this.expensesSum()}
                </span>
              </p>          
              <span data-testid="header-currency-field">
                BRL
              </span>
            </div>
            <Logout />
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
