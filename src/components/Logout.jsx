import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logout extends Component {
  render() {
    return (
      <Link to="/">
        <button
          className="group relative flex justify-center py-1 px-4 border border-transparent text-s font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-50"
          type="button"
        >
          Sair
        </button>
      </Link>
    )
  }
}
