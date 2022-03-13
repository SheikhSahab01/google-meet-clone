import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faQuestionCircle,faExclamationCircle,faCog } from '@fortawesome/free-solid-svg-icons'
import Datetime from 'react-datetime';
import "./header.scss"

const Header = () =>{

    const CurrentDate = new Date().toDateString();
    const currenttime = new Date().toLocaleTimeString();

    return(
        <div className="header">
            <div className="logo">
                <img src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"alt="Google Meet" />
                <span className="logo-text">Meet</span>
            </div>
            <div className="action-btns">
            {CurrentDate} &nbsp;&nbsp;
            {currenttime}
            <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
            <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
            <FontAwesomeIcon className="icon-block" icon={faCog} />
            <img src="https://lh3.googleusercontent.com/ogw/ADea4I7bAVV808XvL_aPJ8rcLeosgknSW46nOTI3NyUjXg=s32-c-mo"></img>
            </div>
        </div>
    )
};


export default Header;