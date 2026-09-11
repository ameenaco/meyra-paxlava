import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice, clearCart } =
    useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-empty container">
        <h2>Səbətiniz boşdur</h2>
        <p>Hələ heç bir məhsul əlavə etməmisiniz</p>
        <Link to="/mehsullar" className="btn">
          Məhsullara bax
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page container">
      <h2 className="section-title">Səbətim</h2>

      <div className="cart-list">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p>{item.price.toFixed(2)} AZN</p>
            </div>

            <div className="cart-item-qty">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <div className="cart-item-total">
              {(item.qty * item.price).toFixed(2)} AZN
            </div>

            <button
              className="cart-item-remove"
              onClick={() => removeFromCart(item.id)}
            >
              Sil
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <button className="btn btn-outline" onClick={clearCart}>
          Səbəti təmizlə
        </button>

        <div className="cart-summary-total">
          <span>Cəmi:</span>
          <strong>{totalPrice.toFixed(2)} AZN</strong>
        </div>
      </div>

      <div className="cart-checkout">
        <button
          className="btn"
          onClick={() => {
            alert('Sifarişiniz qəbul edildi!')
            clearCart()
          }}
        >
          Sifarişi tamamla
        </button>
      </div>
    </div>
  )
}

export default Cart
