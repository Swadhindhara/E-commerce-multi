import './FooterBox.scss';
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FooterBox = () => {
  return (
    <div className="footer_box">
        <Link to={'/about'} className="box">
            <SiHomeassistantcommunitystore/>
            <h3>About US</h3>
            <small>Know about our company</small>
        </Link>
        <Link to={'/contact'} k className="box">
            <MdSupportAgent/>
            <h3>Contact Us</h3>
            <small>We are here to help</small>
        </Link>
        <Link className="box">
            <FaQuestionCircle/>
            <h3>FAQ</h3>
            <small>Get all Answers</small>
        </Link>
    </div>
  )
}

export default FooterBox