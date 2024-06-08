import {Component} from 'react'

import CryptoList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bg-container">
        <CryptoList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
