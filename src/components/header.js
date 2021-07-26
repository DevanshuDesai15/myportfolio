import React from "react"
import Typed from "react-typed"

const header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Devanshu Desai</h1>
                <Typed
                    className="typed-text"
                    strings={["Mobile Developer","Web Developer","Researcher","ML Enthusiast"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main">Contact me!</a>
            </div>
        </div>
    )
}

export default header
