import React from 'react';
import '../css/Header.css';

export class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm shadow p-3 mb-5 text-white head">
                <span className="navbar-brand mb-0 h1">
                    <i className="fas fa-bars "></i>
                </span>

                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span>Bills</span>
                        </li>
                    </ul>
                </div>  
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <i className="fas fa-plus"></i>
                    </li>
                </ul>      
            </nav>

        );
    }
}