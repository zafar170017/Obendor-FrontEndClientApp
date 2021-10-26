
import './sidebar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class sidebar extends React.Component{
    render(){
        return (
            <div className="polished-sidebar bg-light col-12 col-md-3 col-lg-2 p-0 collapse d-md-inline" id="sidebar-nav">

            <ul className="polished-sidebar-menu ml-0 pt-4 p-0 d-md-block">
              <input className="border-dark form-control d-block d-md-none mb-4" type="text" placeholder="Search" aria-label="Search"/>
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/OptimizeImage">Image Optimization</Link></li>
              <li><Link to="/ManualFile">Manual File Uploader</Link></li>
              <li><Link to="/ConvertImage">Convert PNG to JPG</Link></li>
              <li><a href="forms.html"><span className="oi oi-dollar"></span> Plan &amp; Price</a></li>
              <li><Link to="/Faq">FAQ</Link></li>
          
            </ul>
            {/* <div className="pl-3 d-none d-md-block position-fixed">
                <span className="oi oi-cog"></span> Setting
            </div> */}
        </div>
        );
    }
  }
  
  export default sidebar;
  