import { useCart } from '../context/CartContext'
import './ProductCard.css'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <div className="product-card-footer">
          <span className="product-price">{product.price.toFixed(2)} AZN</span>
          <button className="btn" onClick={() => addToCart(product)}>
            Səbətə at
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
