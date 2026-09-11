import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import logo from '../assets/logo.jpg'
import './Navbar.css'

function Navbar() {
  const { totalCount } = useCart()

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Meyra Paxlava" />
          <span>Meyra Paxlava</span>
        </Link>

        <nav className="navbar-links">
          <NavLink to="/" end>
            Ana Səhifə
          </NavLink>
          <NavLink to="/mehsullar">Məhsullar</NavLink>
          <NavLink to="/haqqimizda">Haqqımızda</NavLink>
          <NavLink to="/elaqe">Əlaqə</NavLink>
        </nav>

        <Link to="/sebet" className="navbar-cart">
          Səbət
          {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
        </Link>
      </div>
    </header>
  )
}

export default Navbar
