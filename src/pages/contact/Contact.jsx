import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'


const Contact = () => {
  return (
  <>
    <Header title="Get In Touch" image={HeaderImage} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Totam esse odio harum quibusdam iure vero ab hic, nemo 
          porro rerum.?
    </Header>
    <section className="contact">

      <div className="container contact__container">
        <div className="contact__wrapper">
          
          <a href="mailto:jerrynuhu99@gmail.com" target="_blank" rel="noopener noreferrer">{MdEmail}</a>
          <a href="http://m.me/jerry.nuhu" target="_blank" rel="noopener noreferrer">{BsMessenger}</a>
          <a href="https://wa.me/+2348169495620" target="_blank" rel="noopener noreferrer">{IoLogoWhatsapp}</a>
        </div>
       </div>

    </section>
    
  </>
  )
}

export default Contact
