import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';
import deleteIcon from '../delete-icon.png';

class Table extends React.Component {
  expensesSum() {
    const { expenses } = this.props;
    const sum = expenses
      .reduce((a, b) => a + (b.value) * b.exchangeRates[b.currency].ask, 0);
    return sum.toFixed(2);
  }

  render() {
    const { expenses, deleteExpense } = this.props;
    return (
      <div className="flex flex-col">
        {/* como criar uma tabela ref: https://blog.betrybe.com/html/table-html/ */}
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 table  text-center">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-green-900 uppercase tracking-wider"
                    >
                      Descrição
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-green-900 uppercase tracking-wider"
                    >
                      Tag
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-green-900 uppercase tracking-wider"
                    >
                      Método de pagamento
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-green-900 uppercase tracking-wider"
                    >
                      Valor
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-green-900 uppercase tracking-wider"
                    >
                      Moeda
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-green-900 uppercase tracking-wider"
                    >
                      Câmbio utilizado
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-green-900 uppercase tracking-wider"
                    >
                      Valor convertido
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-green-900 uppercase tracking-wider"
                    >
                      Moeda de conversão
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-green-900 uppercase tracking-wider"
                    >
                      Excluir
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {
                    expenses.map((item) => (
                      <tr key={ item.id }>
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                        >{item.description}</td>
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                        >{item.tag}</td>
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                        >{item.method}</td>
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                        >{item.value}</td>
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                        >{item.exchangeRates[item.currency].name}</td>
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          {Number(item.exchangeRates[item.currency].ask).toFixed(2)}
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          {(item.exchangeRates[item.currency].ask * item.value).toFixed(2)}
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                        >Real</td>
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          <button
                            data-testid="delete-btn"
                            onClick={ () => deleteExpense(item.id) }
                            type="button"
                          >
                            <img
                              alt="delete icon"
                              className="justify-center"
                              src={deleteIcon}
                              width="20px"
                            />
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (value) => dispatch(removeExpense(value)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
