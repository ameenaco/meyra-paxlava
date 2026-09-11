import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3>Meyra Paxlava</h3>
          <p>Gasimov family's - Ənənədən gələn şirin möcüzə</p>
        </div>

        <div>
          <h4>Keçidlər</h4>
          <Link to="/">Ana Səhifə</Link>
          <Link to="/mehsullar">Məhsullar</Link>
          <Link to="/haqqimizda">Haqqımızda</Link>
          <Link to="/elaqe">Əlaqə</Link>
        </div>

        <div>
          <h4>Əlaqə</h4>
          <p>Bakı, Azərbaycan</p>
          <p>+994 50 123 45 67</p>
          <p>info@meyrapaxlava.az</p>
        </div>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Meyra Paxlava. Bütün hüquqlar qorunur.
      </p>
    </footer>
  )
}

export default Footer
