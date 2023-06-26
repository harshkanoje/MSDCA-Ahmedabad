import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent fixed-top" style={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)', borderRadius: '20px' }}>
      <div className="container">
        <a className="navbar-brand" href="#" style={{ fontFamily: 'PT sans', color: '#65A0FB', fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>
          <img src="./images/logo.png" alt="Logo" style={{ height: '50px', width: '100px', marginTop: '-2px' }} />
          MSDCA
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ fontSize: '15px', fontWeight: 'bold', color: 'blue' }}>
                <i className="fas fa-house"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ fontSize: '15px', fontWeight: 'bold', color: 'blue' }}>
                <i className="fas fa-bars"></i> About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ fontSize: '15px', fontWeight: 'bold', color: 'blue' }}>
                <i className="fas fa-camera"></i> Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ fontSize: '15px', fontWeight: 'bold', color: 'blue' }}>
                <i className="fas fa-map-pin"></i> Locate us
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-warning ms-2" style={{ borderRadius: '20px', width: '100px' }} type="submit">Plans</button>
            <button className="btn btn-primary ms-2" style={{ borderRadius: '20px', width: '150px' }} type="submit">Contact Us</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
