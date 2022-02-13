import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';
import trybeWallet from '../wallet.png';
import '../index.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isButtonDisable: true,
    };

    this.inputValidation = this.inputValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  inputValidation() {
    const { email, password } = this.state;
    // ref: https://stackoverflow.com/questions/35788383/regex-validation-in-javascript-email
    const EMAIL_REGEX = /\S+@\S+\.\S+/;
    const EMAIL_VALIDATE = EMAIL_REGEX.test(email);
    const MIN_PASSWORD_LENGTH = 6;
    const PASSWORD_VALIDATE = password.length >= MIN_PASSWORD_LENGTH;

    if (EMAIL_VALIDATE && PASSWORD_VALIDATE) {
      this.setState({ isButtonDisable: false });
    } else {
      this.setState({ isButtonDisable: true });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, this.inputValidation);
  }

  handleClick() {
    const { history, userEmail } = this.props;
    const { email } = this.state;
    userEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isButtonDisable } = this.state;
    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 login-container">
        <div className="max-w-md w-full space-y-8">
        <img
          className="mx-auto h-12 w-auto"
          src={trybeWallet}
          alt="wallet logo"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          TrybeWallet
        </h2>
        <form className="mt-8 space-y-6" action="#">
          <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email:
                </label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-m"
                    data-testid="email-input"
                    id="email"
                    name="email"
                    onChange={ this.handleChange }
                    placeholder="email"
                    type="email"
                    value={ email }
                  />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha:
                </label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-m"
                    data-testid="password-input"
                    id="password"
                    name="password"
                    onChange={ this.handleChange }
                    placeholder="senha"
                    type="password"
                    value={ password }
                  />
              </div>
            </div>
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-m font-medium rounded-md text-white bg-green-900 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              disabled={ isButtonDisable }
              onClick={ this.handleClick }
              type="button"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (value) => dispatch(saveEmail(value)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  userEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
