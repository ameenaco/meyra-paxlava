import { Link } from 'react-router-dom'
import heroImg from '../assets/baklava-tray.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="hero-badge">Gasimov family's</span>
          <h1>Ənənədən gələn şirin möcüzə</h1>
          <p>
            Meyra Paxlava ailəmizin nəsildən-nəsilə keçən reseptləri ilə,
            yerli qoz və təbii inqrediyentlərdən hazırlanır. Hər dilimdə
            məhəbbətlə hazırlanmış Azərbaycan dadı.
          </p>
          <div className="hero-buttons">
            <Link to="/mehsullar" className="btn">
              Məhsullara bax
            </Link>
            <Link to="/haqqimizda" className="btn btn-outline">
              Haqqımızda
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Meyra Paxlava" />
        </div>
      </div>
    </section>
  )
}

export default Hero
