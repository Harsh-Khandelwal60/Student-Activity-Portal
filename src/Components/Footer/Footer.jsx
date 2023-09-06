import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    return ( 
        <footer className="pagefooter">
        <div className="container">
            <div className="row">
                <div className="footertext">
                    <div className="textbox">
                    <h2>Student Activity Council</h2>
                    <h4>Indian Institute of Information Technology and Management, Gwalior</h4>
                    </div>
                </div>
                <div className="footerlinks">
                    <div className="linksbox">
                        <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/events">Events</a></li>
                        
                    </ul>
                    </div>                    
                </div>
                
                <div className="footeremail">
                <div className="resoucesbox">
                        <h2>Resources</h2>
                    <ul>
                        <li><a href="/resources">Study Material</a></li>
                        <li><a href="https://iiitm.ac.in/index.php/en/quick-link/other-links/anti-ragging-ugc-notification/181-anti-ragging-ugc-notification" target='_blank' >Anti Ragging</a></li>
                        
                    </ul>
                    </div> 
                </div>
                <div className="mobilebox">
                    <div className="contactbox">
                        <h2>Contact Us</h2>
                    <ul>
                        <li><a href="#">iiitm.ac.in</a></li>
                    </ul>
                    </div>     
                    <div className="followbox">
                        <h2>Follow Us</h2>
                    <ul>
                    <a href="https://www.facebook.com/iiitm/" target="_blank" className="facebook"><FacebookIcon/></a>
                    <a href="https://www.instagram.com/iiitmgwaliorofficial/?hl=en" target="_blank" className="instagram"><InstagramIcon/></a>

                    <a href="https://www.linkedin.com/school/abv-indian-institute-of-information-technology-and-management/?originalSubdomain=in" target="_blank" className="linkedin"><LinkedInIcon/></a>
                    
                    <a href="https://www.youtube.com/channel/UCvD9gx_-9pzQ4XnuFC-BbLg" target="_blank" className="youtube"><YouTubeIcon/></a>
                    </ul>
                    </div> 
                    </div>
                <div className="footercontact">
                    <div className="contactbox">
                        <h2>Contact Us</h2>
                    <ul>
                        <li><a href="mailto: www.iiitm.ac.in" target="_blank">iiitm.ac.in</a></li>
                    </ul>
                    </div>     
                    <div className="followbox">
                        <h2>Follow Us</h2>
                    <ul>

                    <a href="https://www.facebook.com/iiitm/" target="_blank" className="facebook"><FacebookIcon/></a>
              <a href="https://www.instagram.com/iiitmgwaliorofficial/?hl=en" target="_blank" className="instagram"><InstagramIcon/></a>
              <a href="https://www.linkedin.com/school/abv-indian-institute-of-information-technology-and-management/?originalSubdomain=in" target="_blank" className="linkedin"><LinkedInIcon/></a>
              <a href="https://www.youtube.com/channel/UCvD9gx_-9pzQ4XnuFC-BbLg"><YouTubeIcon/></a>

                    </ul>
                    </div>                
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;