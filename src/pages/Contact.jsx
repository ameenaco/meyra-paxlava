import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="contact-page">
      <div className="container">
        <h2 className="section-title">Əlaqə</h2>
        <p className="section-subtitle">
          Sualınız var? Bizimlə əlaqə saxlayın
        </p>

        <div className="contact-inner">
          <div className="contact-info">
            <p>
              <strong>Ünvan:</strong> Bakı, Azərbaycan
            </p>
            <p>
              <strong>Telefon:</strong> +994 50 123 45 67
            </p>
            <p>
              <strong>Email:</strong> info@meyrapaxlava.az
            </p>
            <p>
              <strong>İş saatları:</strong> Hər gün 09:00 - 20:00
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Adınız"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Mesajınız"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="btn">
              Göndər
            </button>
            {sent && <p className="contact-success">Mesajınız göndərildi!</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
