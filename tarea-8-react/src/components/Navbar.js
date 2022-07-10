import './styles/Navbar.css'
import logo from '../assets/img/logo.png';

const Navbar = () => {
  return (
    <div>
        <nav>
                <ul className="navbar">
                    <li className="navbar__list--1">
                        <img className="navbar__logo" src={logo} alt="logo" />
                    </li>
                    <li className="navbar__list--2">
                        <a href="#home">Home</a>
                    </li>
                    <li className="navbar__list--3">
                        <a href="#home">About</a>
                    </li>
                    <li className="navbar__list--4">
                        <a href="#home">Services</a>
                    </li>
                    <li className="navbar__list--5">
                        <a href="#home">Portfolio</a>
                    </li>
                    <li className="navbar__list--6">
                        <a href="#home">Pages</a>
                    </li>
                    <li className="navbar__list--7">
                        <a href="#home">Contact</a>
                    </li>
                </ul>
            </nav>
    </div>
  )
}

export default Navbar