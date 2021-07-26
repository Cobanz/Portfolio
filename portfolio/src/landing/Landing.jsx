import React from 'react'
import Me from "/Users/grant/Development/Real_Portfolio/Portfolio/portfolio/src/me.png"

function Landing() {
    return (
        <div>
            <header>"And you can call me anything besides late for supper" - Bob *grand-daddy* Nichols</header>
            <br/>
            <div className="landing_container">
            <h1 className="landing_hello">Hey, I'm Grant!</h1>
            <img className="landing_image" src={Me} alt="image of me"></img>
            <h4 className="landing_correction">P.S. Well I'm really <u>Charles G. Nichols</u>, but I go by Grant</h4>
            </div>
        </div>
    )
}

export default Landing
