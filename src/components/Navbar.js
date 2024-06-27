import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Navbar = (props) => {

    return <div>
         <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Textutils</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="">home</Link>
          </li>
          <li className="nav-item">
             <Link className="nav-link" to="/about">about</Link> 
           </li>  
          
       
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkMode</label>
        </div>

      </div>
    </div>
  </nav>
    </div>;
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
// #endregion

export default Navbar;