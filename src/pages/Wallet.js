import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchThunk } from '../actions';
import CoinSelect from '../components/CoinSelect';
import Description from '../components/Description';
import Expense from '../components/Expense';
import MethodSelect from '../components/MethodSelect';
import TagSelect from '../components/TagSelect';
import Table from '../components/Table';
import Footer from '../components/Footer';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveWalletInfo = this.saveWalletInfo.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  saveWalletInfo() {
    const { userInfo } = this.props;
    const { value, description, currency, method, tag } = this.state;
    userInfo({ value, description, currency, method, tag });
    this.setState({ value: '', description: '' });
  }

  render() {
    const { value, description } = this.state;
    return (
      <div>
        <Header />
        <div className="menu-container">
          <div className=" px-2 py-2 border border-gray-300 text-gray-900 rounded-md mx-auto max-w-6xl">
            <p className="text-2xl font-medium text-stone-900 text-center mb-3 border-b-2 border-gray-100 py-2">
              Adicione suas despesas abaixo:
            </p>
            <div className="inputs-container">
              <CoinSelect
                onChange={ this.handleChange }
              />
              <Expense
                onChange={ this.handleChange }
                value={ value }
              />
              <TagSelect
                onChange={ this.handleChange }
              />
              <MethodSelect
                onChange={ this.handleChange }
              />
              <Description
                onChange={ this.handleChange }
                description={ description }
              />
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-m font-medium rounded-md text-gray-300 bg-green-900 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-2"
                type="button"
                onClick={ this.saveWalletInfo }
              >
                Adicionar Despesa
              </button>
            </div>
          </div>
        </div>
        <Table />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userInfo: (payload) => dispatch(fetchThunk(payload)),
});

Wallet.propTypes = {
  userInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
