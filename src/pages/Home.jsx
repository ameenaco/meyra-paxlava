import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import products from '../data/products'
import './Home.css'

function Home() {
  const featured = products.slice(0, 3)

  return (
    <div>
      <Hero />

      <section className="features">
        <div className="container features-grid">
          <div className="feature-item">
            <span className="feature-icon">🌿</span>
            <h4>Təbii İnqrediyentlər</h4>
            <p>Yalnız təbii və keyfiyyətli materiallardan istifadə edirik</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">❤️</span>
            <h4>Əl İşi Məhəbbətlə</h4>
            <p>Hər paxlava əl ilə, ailə reseptinə uyğun hazırlanır</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🌰</span>
            <h4>Yerli Qoz</h4>
            <p>Ən keyfiyyətli yerli qozlardan istifadə olunur</p>
          </div>
        </div>
      </section>

      <section className="home-products">
        <div className="container">
          <h2 className="section-title">Seçilmiş Məhsullar</h2>
          <p className="section-subtitle">
            Ən çox sevilən paxlava növlərimizlə tanış olun
          </p>

          <div className="products-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="home-products-more">
            <Link to="/mehsullar" className="btn">
              Bütün Məhsullar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
