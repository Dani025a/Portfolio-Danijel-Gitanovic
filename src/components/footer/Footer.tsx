import './footer.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import phone from '../../assets/phoneIcon.png'
import email from '../../assets/emailIcon.png'
import typescrpt from '../../assets/Typescript.png'
import react from '../../assets/React.png'
import nodejs from '../../assets/nodejs.png'
import mysql from '../../assets/mysql.png'



const Footer = () => {
    return (
        <div>    
            <div className='footer-content'>
                <div className='footer-contact'>
                <h1>Contact Me</h1>
                <div className='footer-contactme-items'>                
                <div className='footer-phone'>
                <img src={phone}></img>
                <p>+45 23 32 19 17</p>
                </div>
                <div className='footer-email'>
                <img src={email}></img>
                <p>danijelgitanovic@gmail.com</p>
                </div>
                </div>
                </div>

                <div className='footer-links'>
                <h1>Links</h1>
                <div className='footer-images'>
          <a href="https://github.com/Dani025a" target="_blank" rel="noopener noreferrer">
          <img src={github}></img>
          </a>
          <a href="https://www.linkedin.com/in/danijel-gitanovic-368a171b5/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin}></img>
          </a>
          </div>
                </div>
                <div className='footer-links'>
                <h1>Website info</h1>
                <p>This webiste is build with</p>
                <div className='footer-images'>
          <img src={typescrpt}></img>
          <img src={react}></img>
          <img src={nodejs}></img>
          <img src={mysql}></img>

          </div>
                </div>

            </div>        
    <div className='footer-copyright'>
        <p>Copyright ©2024 Designed by Danijel Gitanovic </p>
        </div>
    </div>

  )
}

export default Footer