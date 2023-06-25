import React from 'react'

function Navbar() {
  return (
    // <div> Navbar component defined here
    <div className="text-center">

{/* Navbar Component start here */}

<style>{`
  .navbar-transparent {
    background-color: transparent;
  }
`}</style>


<nav className="navbar navbar-expand-lg navbar-transparent" style={{ position: 'fixed', top: 8, left: 4, right: 4, backgroundColor: 'transparent', backdropFilter: 'blur(10px)', borderRadius: "20px" }}>
  <div className="container-fluid">

    <img src="./images/logo.png" style={{ height: "50px", width: "100px", marginTop: "-2px" }} />
    <button className="btn" style={{ borderRadius: "20px" }}>
      <a className="navbar-brand" href="#" style={{    fontFamily: 'PT sans',
color: '#65A0FB',
fontSize: '30px',
fontWeight: 'bold',
textAlign: 'center',}}>
        MSDCA
      </a>
    </button>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="btn" style={{ borderRadius: "20px" }}>
            <a className="nav-link active" aria-current="page" href="#" style={{ flex: 1,
fontSize: "15px",
fontWeight: "bold",
color: 'blue'}}>
              <i className="fa-solid fa-house"></i> &nbsp;Home
            </a>
          </button>
        </li>

        <li className="nav-item">
          <button className="btn" style={{ borderRadius: "20px" }}>
            <a className="nav-link" href="#" style={{ flex: 1,
fontSize: "15px",
fontWeight: "bold",
color: 'blue'}}>
              <i className="fa-solid fa-bars"></i> &nbsp;About us
            </a>
          </button>
        </li>

        <li className="nav-item">
          <button className="btn" style={{ borderRadius: "20px" }}>
            <a className="nav-link" href="#" style={{ flex: 1,
fontSize: "15px",
fontWeight: "bold",
color: 'blue'}}>
              <i className="fa-solid fa-camera"></i>&nbsp; Gallery
            </a>
          </button>
        </li>

        <li className="nav-item">
          <button className="btn" style={{ borderRadius: "20px" }}>
            <a className="nav-link" href="#" style={{ flex: 1,
fontSize: "15px",
fontWeight: "bold",
color: 'blue'}}>
            <i class="fa-solid fa-map-pin"></i> &nbsp;Locate us
            </a>
          </button>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn" style={{ backgroundColor: "yellow", color: "black", borderRadius: "20px", width: "100px" }} type="submit">Plans</button>&nbsp; &nbsp;
        <button className="btn btn-primary" style={{ color: "black", borderRadius: "20px", width: "150px" }} type="submit">Contact Us</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar