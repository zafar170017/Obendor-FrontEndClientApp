
import './NavBar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar bg-primary-dark navbar-expand p-2">
         
            <a className="navbar-brand text-center col-xs-12 col-md-3 col-lg-2 mr-0" href="index.html">
              {/* <!-- <img src="assets/polished-logo-small.png" alt="logo" width="42px"> --> */}
              SalesOwlsApps</a>
            <button className="btn btn-link d-block d-md-none" data-toggle="collapse" data-target="#sidebar-nav" role="button">
              <span class="oi oi-menu"></span>
            </button>
            
            <input className=" bg-primary-darkest form-control d-none d-md-block w-50 ml-3 mr-2" type="text" placeholder="Search" aria-label="Search"/>
            {/* <!-- <div class="dropdown d-none d-md-block">
              <img class="d-none d-lg-inline rounded-circle ml-1" width="32px" src="assets/azamuddin.jpg" alt="MA"/>
              <button class="btn btn-link btn-link-primary dropdown-toggle" id="navbar-dropdown" data-toggle="dropdown">
                Muhammad Azamuddin
              </button>
              <div class="dropdown-menu dropdown-menu-right" id="navbar-dropdown">
                <a href="#" class="dropdown-item">Profile</a>
                <a href="#" class="dropdown-item">Setting</a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">Sign Out</a>
              </div>
            </div> --> */}
          </nav>
        );
    }
  }
  
  export default Navbar;
  