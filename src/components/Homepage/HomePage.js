import './HomePage.scss'
import Header from '../UI/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo,faKeyboard } from '@fortawesome/free-solid-svg-icons'
import Webcam from "react-webcam";

const HomePage = () =>{
    return(

        <div className="home-page">

            <Header/>

            <div className="body">

                <div className="Left-side">
                    <div className="content">
                        <h2>Permium video meetings. Now free for everyone.</h2>
                        <p>we re-engineered the services we built for secure business meetings, Google Meet, to make it free and avilable for all.</p>
                    
                        <div className="action-btns">
                            <button className="btn green">
                                <FontAwesomeIcon className="icon-block" icon={faVideo}/> New Meeting
                            </button>
                    
                    
                        <div className="container-main">
                            <div className="input-section">
                                <FontAwesomeIcon className="icon-block" icon={faKeyboard}/>
                                <input type="text" className="form-control" placeholder="Enter a code or link"></input>
                            </div>
                            <button className="btn no-bg">Join</button>
                        </div>

                        </div>

                        
                    </div>
                    <div className="help-text">
                            <a href="https://support.google.com/meet/?hl=en#topic=7306097">Learn more</a> about Google Meet.
                    </div>
                </div>


                <div className="Right-side">
                    <div className="">
                    <Webcam className="webcam"/>
                    </div>
                </div>

            </div>
        </div>
    )   
}


export default HomePage;