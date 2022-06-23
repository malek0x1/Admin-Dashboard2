import React from 'react'
import './Dashboard.css';
import Main from './Main';
import Sidebar from './Sidebar';
const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <Sidebar/>

            </div>
            <div className="main">
                <Main/>
            </div>


        </div>
    )
}

export default Dashboard