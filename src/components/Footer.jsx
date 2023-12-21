import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link>
                <img src={Logo} alt="footer" className="Logo" />
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur.
                     Lorem ipsum dolor sit, amet consectetur 
                     adipisicing elit. Minus, reprehenderit!</p>
                <div className="footer__socials">
                    <a href="http://linkedin.com" target="_blank" rel="noreferrer noopener">
                        <FaLinkedin/></a>
                    <a href="http://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebook/></a>
                    <a href="http://twitter.com" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                    <a href="http://instagram.com" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4 className="permalinks">Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4 className="insights">Insights</h4>
                <Link to="/$">Blog</Link>
                <Link to="/$">Case</Link>
                <Link to="/$">Events</Link>
                <Link to="/$">Communities</Link>
                <Link to="/$">FAQs</Link>
            </article>
            <article>
                <h4 className="intouch">Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/$">Support</Link>
              
                
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 JerryStarkz &copy; All Rights Reserved </small>
        </div>
    </footer>
  )
}

export default Footer
