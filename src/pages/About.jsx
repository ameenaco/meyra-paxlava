import darkImg from '../assets/baklava-dark.jpg'
import './About.css'

function About() {
  return (
    <div className="about-page">
      <div className="container about-inner">
        <div className="about-image">
          <img src={darkImg} alt="Meyra Paxlava" />
        </div>

        <div className="about-text">
          <h2 className="about-title">Haqqımızda</h2>
          <p>
            Meyra Paxlava, Gasimov ailəsinin nəsildən-nəsilə ötürdüyü paxlava
            reseptləri əsasında yaradılıb. Məqsədimiz hər dəfə eyni dadı,
            eyni keyfiyyəti və eyni məhəbbəti süfrənizə gətirməkdir.
          </p>
          <p>
            Hər paxlavamız yerli qoz, təbii bal şərbəti və əl işi ilə
            hazırlanır. Sənaye üsulu ilə deyil, ailə mətbəxindəki
            ənənələrlə çalışırıq.
          </p>
          <ul className="about-list">
            <li>Təbii inqrediyentlər</li>
            <li>Əl işi məhəbbətlə</li>
            <li>Yerli qoz istifadəsi</li>
            <li>Gündəlik təzə hazırlanır</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
