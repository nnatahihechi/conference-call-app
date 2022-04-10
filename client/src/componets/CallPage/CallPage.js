import{ FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './CallPage.scss'


const CallPageFooter = () => {
    return (
        <div className="footer-item">
        <div className="left-item">
        <div className="icon-block">
meeting details
<FontAwesomeIcon className="icon" icon={faAngleUp}/>
        </div>
        </div>
    
        
        <div className="center-item">
            <div className="icon-block">
                <FontAwesomeIcon className="icon" icon={faMicrophone}/>
            </div>
            </div>
            
            <div className="icon-block">
                <FontAwesomeIcon className="icon" icon={faPhone}/>
            </div>
            
            <div className="icon-block">
                <FontAwesomeIcon className="icon" icon={faVideo}/>
            </div>

           
           <div className="right-item">
               <div className="icon-block">
                   <FontAwesomeIcon className="icon red" icon={faClosedCaptioning}/>
                   <p className="title">Turn on Caption </p>
                   </div>
                   
            <div className="icon-block">
                   <FontAwesomeIcon className="icon red" icon={faClosedCaptioning}/>
                   <p className="title"> Present now </p>
                    </div>
               </div>
               
            </div>
        
    )

}


export default CallPageFooter

