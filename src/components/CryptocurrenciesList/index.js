import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptoListItem from '../CryptocurrencyItem'

import './index.css'

class CryptoList extends Component {
  state = {bLogList: [], isLoading: true}

  componentDidMount() {
    this.dataCurrency()
  }

  dataCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedList = data.map(dataItem => ({
      currencyLogo: dataItem.currency_logo,
      currencyName: dataItem.currency_name,
      euroValue: dataItem.euro_value,
      usdValue: dataItem.usd_value,
      id: dataItem.id,
    }))
    console.log(updatedList, data)
    this.setState({bLogList: updatedList, isLoading: false})
  }

  render() {
    const {bLogList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto"
        />
        <ul>
          <div>
            <div className="nav-cont1">
              <h1>Coin Type</h1>
            </div>
            <div>
              <div className="nav-cont2">
                <h1>Uso</h1>
              </div>
              <div className="nav-cont2">
                <h1>Euro</h1>
              </div>
            </div>
          </div>
          {bLogList.map(eachBlogList => {
            return (
              <CryptoListItem
                key={eachBlogList.id}
                eachBlogList={eachBlogList}
              />
            )
          })}
        </ul>
      </>
    )
  }
}

export default CryptoList
