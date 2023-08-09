import Header from '../Header'
import './index.css'

const Carts = () => {
  console.log('product')

  return (
    <>
      <Header />
      <img
        className="cart"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
      />
    </>
  )
}

export default Carts
