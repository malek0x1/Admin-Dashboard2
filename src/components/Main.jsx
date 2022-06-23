import React from 'react'
import Chart from './Chart'
import './Main.css'
const Main = () => {
    return (
        <div className="main">
            <div className="widgets">
                <div className="widget">

                    <p>Revenue</p>
                    <div className="widget-header">

                        <h1>900$</h1>
                        <div className="arrow">
                            <span>&#10140;</span>
                        </div>
                    </div>

                    <div className="widget-body">
                        <p>999+ orders this month</p>
                    </div>
                </div>
                <div className="widget">
                <p>Cost</p>
                    <div className="widget-header">
                        <h1>-200$</h1>
                        <div className="arrow-down">
                            <span>&#10140;</span>
                        </div>
                    </div>

                    <div className="widget-body">
                        <p>-100 new user this month</p>
                    </div>
                </div> <div className="widget">
                <p>Sales</p>
                    <div className="widget-header">
                        <h1>900$</h1>
                        <div className="arrow">
                            <span>&#10140;</span>
                        </div>
                    </div>

                    <div className="widget-body">
                        <p>999+ orders this month</p>
                    </div>
                </div>
            </div>
            <div className="graph">
                <Chart aspect={2 / 1} Title="Last 6 Month (Revenue)" />
            </div>
        </div>
    )
}

export default Main