import './index.css'

const CryptoListItem = ({eachBlogList}) => {
  const {currencyLogo, currencyName, euroValue, usdValue} = eachBlogList
  console.log(usdValue, euroValue)
  return (
    <li>
      <div className="list-cont1">
        <img src={currencyLogo} alt={currencyName} className="item-logo" />
        <p>{currencyName}</p>
      </div>
      <div
        style={{backgroundColor: 'black', marginRight: '30px'}}
        className="list-cont2"
      >
        <p>{euroValue}</p>
      </div>
      <div
        style={{backgroundColor: 'black', marginRight: '30px'}}
        className="list-cont2"
      >
        <p>{usdValue}</p>
      </div>
    </li>
  )
}

export default CryptoListItem
