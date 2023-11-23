import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Sidebar from "./Sidebar";

function Dashboard() {
    return (
        <div>
            <div className="container">
                <div style={{height: 100}}></div>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-9">
                        <h3>Dashboard</h3>
                        <p>Xin chào !</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;