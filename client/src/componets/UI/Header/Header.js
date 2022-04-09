import {FontAweSomeIcon} from "@fortawesome/react-fontawesome";
import {
    faQuestionCircle,
    faExclamationCircle,
    faCog
} from "@fortwesome/free-solid-svg-icons";

import './Header.scss'



const Header = () => {
    return (
       <div className = "header">
           <div clasName="logo">
             <img src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_2x_icon_124_40_292e71bcb52a56e2a9005164118f183b.png" alt="Google"/>
             <span className="help-text">
                 Meet 
             </span>
           </div>
           <div className="action-btn">
               <FontAweSomeIcon className="icon-block" icon={faQuestionCircle} />
               <FontAweSomeIcon className="icon-block" icon={faExclamationCircle} />
               <FontAweSomeIcon className="icon-block" icon={faCog} />
           </div>
       </div>
    )
}

export default Header;
