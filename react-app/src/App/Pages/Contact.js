import Header from "../Components/Header";
import "./Contact.css";

// Getting icons from material ui
// https://material-ui.com/components/material-icons/
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

const Contact = () => {
    return (
        <div className="Contact">
            <div className="nav">
                <Header />
            </div>
            <div className="caption1">
                You can contact me through the following modes below!
            </div>
            <div className="icon">
                <a href="/contact">
                    <span className="insta" title="coming soon!">
                        <InstagramIcon />
                    </span>
                </a>
                <a href="/contact">
                    <span className="fb" title="coming soon!">
                        <FacebookIcon />
                    </span>
                </a>
                <a href="https://github.com/joalliswellchin">
                    <span className="github">
                        <GitHubIcon />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/joel-chin-a4a129139/">
                    <span className="linkedin">
                        <LinkedInIcon />
                    </span>
                </a>
                <a href="/contact">
                    <span className="email" title="coming soon!">
                        <EmailIcon />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Contact;