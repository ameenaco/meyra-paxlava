import ProductCard from '../components/ProductCard'
import products from '../data/products'
import './Products.css'

function Products() {
  return (
    <div className="products-page">
      <div className="container">
        <h2 className="section-title">Məhsullarımız</h2>
        <p className="section-subtitle">
          Bakı paxlavasından hədiyyə qutularına qədər bütün çeşidimiz
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
