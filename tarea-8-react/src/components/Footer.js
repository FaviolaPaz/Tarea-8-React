import './styles/Footer.css'
import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import linkedin from '../assets/img/linkedin.png';
import whatsapp from '../assets/img/whatsapp.png';


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__p">
            <p>Realizado por Faviola Paz</p>
        </div>
        <div className="footer__social">
            <ul>
                <li className="footer__list">
                    <a href="https://www.linkedin.com/in/faviola-paz/">
                        <img className="footer__img" alt="linkedin" src={linkedin} /> 
                    </a>
                </li>
            </ul>
            <ul>
                <li className="footer__list">
                    <a href="https://www.instagram.com/faviolapaz4/">
                        <img className="footer__img" alt="whatsapp" src={whatsapp} />  
                    </a>
                </li>
            </ul>
            <ul>
                <li className="footer__list">
                    <a href="https://www.linkedin.com/in/faviola-paz/">
                        <img className="footer__img" alt="instagram" src={instagram} /> 
                    </a>
                </li>
            </ul>
            <ul>
                <li className="footer__list">
                    <a href="https://www.facebook.com/faviolapaz4">
                        <img className="footer__img" alt="facebook" src={facebook} /> 
                    </a> 
                </li>
            </ul>
        </div>
    </div>
    )  
}

export default Footer