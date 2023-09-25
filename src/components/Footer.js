import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import githubLogo from "../assets/github-logo.png"
import hhLogo from "../assets/hh-logo.png"
import mailLogo from "../assets/mail-logo.jpg"
import linkedinLogo from "../assets/linkedin-logo.png"

export const Footer = () => {
  return (
    <MDBFooter className='text-center text-white' style={{backgroundColor:'#0a0c0d'}}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <a href='https://github.com/mawag511'><button  style={{ backgroundColor: '#fff', borderColor: 'white'}} floating className='m-1'>
            <img className="footer-github-logo" src={githubLogo} alt="Github Icon" />
          </button></a>
          <a href='https://hh.ru/resume/f76c3179ff0bf680ed0039ed1f794369727775?hhtmFrom=resume_list'><button  style={{ backgroundColor: '#fff', borderColor: 'white'}} floating className='m-1'>
            <img className="footer-hh-logo" src={hhLogo} alt="HeadHunter Icon" />
          </button></a>
          <a href='https://www.linkedin.com/in/maria-ginaldi-06068125b/'><button  style={{ backgroundColor: '#fff', borderColor: 'white'}} floating className='m-1'>
            <img className="footer-linkedin-logo" src={linkedinLogo} alt="Linkedin Icon" />
          </button></a>
          <a href='mailto:ginaldi.maria@gmail.com'><button  style={{ backgroundColor: '#fff', borderColor: 'white'}} floating className='m-1'>
            <img className="footer-mail-logo" src={mailLogo} alt="Mail Icon" />
          </button></a>
        </section>
      </MDBContainer>

      <div className='text-center p-3'  style={{ backgroundColor: ' #08090a', color: "#00ff4c"}}>
        Copyright 2022. All Rights Reserved 
      </div>
    </MDBFooter>
  );
}