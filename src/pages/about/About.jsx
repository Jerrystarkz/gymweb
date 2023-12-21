import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat, exercitationem quis tempore harum error adipisci.
    </Header>

{/* OUR STORY SECTION */}
    <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="OurStoryImage" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Rem repudiandae quam ad ab earum nam soluta aut, commodi 
               unde, sunt tempore aliquid explicabo laudantium autem 
               distinctio aliquam! Minus, explicabo deserunt!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Numquam maiores laborum totam. Corporis odit, tenetur 
               delectus velit quia blanditiis deleniti.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Expedita, ipsum.</p>
          </div>
        </div>
    </section>
{/* OUR VISION SECTION */}
    <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Rem repudiandae quam ad ab earum nam soluta aut, commodi 
               unde, sunt tempore aliquid explicabo laudantium autem 
               distinctio aliquam! Minus, explicabo deserunt!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Numquam maiores laborum totam. Corporis odit, tenetur 
               delectus velit quia blanditiis deleniti.</p>
          
          </div>
            <div className="about__section-image">
              <img src={VisionImage} alt="OurVisionImage" />
            </div>
        </div>
    </section>

{/* OUR MISION SECTION */}
    <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="OurMissionImage" />
          </div>

          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Rem repudiandae quam ad ab earum nam soluta aut, commodi 
               unde, sunt tempore aliquid explicabo laudantium autem 
               distinctio aliquam! Minus, explicabo deserunt!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Numquam maiores laborum totam. Corporis odit, tenetur 
               delectus velit quia blanditiis deleniti.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Expedita, ipsum.</p>
          </div>
        </div>
    </section>
    </>
  )
}

export default About



