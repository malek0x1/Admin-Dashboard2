import React from 'react'
import './Navbar.css'

const Navbar = () => {

    const funcResize = () => {
        var element = document.querySelector(".navbar ul");

        element.style.display = "flex";

    }


    const func = () => {

        var element = document.querySelector(".navbar ul");
        if (element.style.display == "flex") {
            element.style.display = "none";
            document.body.querySelector("span").innerHTML = "&#9776;";
            document.body.querySelector("span").style.fontSize = "30px";

        }

        else {
            element.style.display = "flex";
            document.body.querySelector("span").innerHTML = "&times;";
            document.body.querySelector("span").style.fontSize = "50px";

        }


    }


    return (
        <div className="navbar">
            <div className="navbar-logo">Logo</div>
            <div className="navbar-items">
                <ul>
                    <li>Home</li>
                    <li>Other</li>
                    <li>Other</li>
                    <li>Other</li>
                </ul>
            </div>
            <span onClick={func} className="burger">&#9776; </span>

        </div>
    )
}

export default Navbar