import './aboutMe.css';
import ChatBubble from '../chatBubble/Chatbubble';
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import cv from '../../assets/Danijel Gitanovic CV - EN.pdf'; // Make


const AboutMe = () => {
  return (
    <div className='aboutme-content' id="about">
      <div className='about-me-container_one'>
      <div className='bubble'>
      <ChatBubble></ChatBubble>
      </div>
      <div className='about-me-name_text'>
        <h1>Danijel Gitanovic</h1>
        </div>
      <div className='about-me-job-text'>
      <h2>I am a <span className="highlight">FullStack</span> developer</h2>
      </div> 
      <div className='about-me-description-text'>
      <p>Computer Science graduate eager to engage in innovative work. Passionate about technology, I'm constantly seeking to learn and apply new skills. Ready to contribute to dynamic tech environments and grow professionally.</p>
      </div> 
      <div className='aboutme-btn-container'>
      <button className='aboutme-btn'>
                    <a  href={cv} download="Danijel_Gitanovic_CV.pdf" className="aboutme-btn-text">Download CV</a>
                </button>
                </div>
      </div>
      <div className='about-me-container_two'> 
        <div className='about-me-portrait_circle'>
        </div>
          <div className='images'>
          <a href="https://github.com/Dani025a" target="_blank" rel="noopener noreferrer">
          <img src={github}></img>
          </a>
          <a href="https://www.linkedin.com/in/danijel-gitanovic-368a171b5/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin}></img>
          </a>
          </div>
        </div>

    </div>
  );
};

export default AboutMe;
