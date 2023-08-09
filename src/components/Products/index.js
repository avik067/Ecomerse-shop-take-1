import Header from '../Header'
import './index.css'

const Products = () => {
  console.log('product')

  return (
    <>
      <Header />
      <img
        className="product"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
      />
    </>
  )
}

export default Products
