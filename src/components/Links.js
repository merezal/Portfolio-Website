import { forwardRef, useRef } from "react";
import "../App.css"

const PersonalLinks = forwardRef((props, ref) => {
    return(
        // <TransitionGroup          transitionName="slide"          transitionEnterTimeout={500}          transitionLeaveTimeout={300}>

            <div ref={ref} id="pageContent" className="App-content">
                <h1>Links</h1>
                <div className="text-justify">
                    <h2><a target="_blank" href="https://play.google.com/store/apps/details?id=com.mike.android.ncrypt">Google Playstore - Ncrypt</a></h2>
                    <h2><a target="_blank" href="https://www.linkedin.com/in/michael-jereza-360107181/">LinkedIn</a></h2>
                    <h2><a target="_blank" href="https://github.com/MichaelJereza">Github</a></h2>
                </div>
            </div>
        
        // </TransitionGroup>
    )
});

export default PersonalLinks;