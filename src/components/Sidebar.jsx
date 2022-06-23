import React from 'react'
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className="left-side">
            <div className="header">
                <ul>
                    <span>Main Options</span>
                    <li><span className="icon">&#9813;</span>Home</li>
                    <li><span className="icon">&#9774;</span>Home</li>
                    <li><span className="icon">&clubs;</span>Home</li>
                    <li><span className="icon">&#9832;</span>Home</li>
                </ul>
            </div>
            <div className="body"> <ul>
                    <span>Main Options</span>
                    <li> <span className="icon">&#9873;</span> Home</li>
                    <li><span className="icon">&#9885;</span>Home</li>
                    <li><span className="icon">&#9884;</span>Home</li>
                    <li><span className="icon">&#9888;</span>Home</li>
                </ul></div>
            <div className="footer"> <ul>
                    <span>Main Options</span>
                    <li><span className="icon">&#9992;</span>Home</li>
                    <li><span className="icon">&#9813;</span>Home</li>
                </ul></div>
        </div>
    )
}

export default Sidebar