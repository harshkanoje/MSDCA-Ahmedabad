import React from 'react';

function Features() {
  const introStyle = {
    fontFamily: 'PT sans',
    color: '#65A0FB',
    fontSize: '80px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: '28px'
  };
  const contentStyle = {
    flex: 1,
    // fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.7)',
    // overflow: 'hidden',      // Added to handle overflow
    // whiteSpace: 'nowrap' ,
    fontSize: '1.2em', // Using relative units for font size

  };

  return (
    <div>
      <style>
        {`
        .animated-card {
          display: flex;
          height: 300px;
          width: 10px;
          background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)";
          border-radius: 10px;
          box-shadow: -1rem 0 3rem #0003;
          margin-left: -50px;
          transition: 0.4s ease-out;
          position: relative;
          left: 0px;
        }
        
        .animated-card:hover {
          transform: translateY(-20px);
          transition: 0.4s ease-out;
        }
        
        .animated-card:hover ~ .animated-card {
          position: relative;
          left: 50px;
          transition: 0.4s ease-out;
        }
        
        .animated-card-inner {
          display: flex;
          height: 100%;
          width: 100%;
          border-radius: 20px;
          border-color: grey;
          border-style: solid;
          border-width: 1px;
        }
      
        @media (max-width: 768px) {
          .animated-card {
            width: 100%;
            height: 80px; /* Reduce the height for smaller screens */
            margin: 0 0 20px 0;

          }

          .animated-card:hover ~ .animated-card {
            position: relative;
            left: 0;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .animated-card {
            width: calc(50% - 20px);
            height: 250px; /* Adjust the height for medium-sized screens */
            font-size : 2rem
          }

          .animated-card:hover ~ .animated-card {
            position: relative;
            left: 20px;
          }
        }

        @media (min-width: 1025px) and (max-width: 1440px) {
          .animated-card {
            width: calc(33.33% - 20px);
            height: 300px; /* Adjust the height for larger screens */
          }

          .animated-card:hover ~ .animated-card {
            position: relative;
            left: 20px;
          }
        }



        `}
      </style>
      <br />

      <div style={{ backgroundColor: "#EFF2FF", height: "400px", display: "flex", justifyContent: "center", marginRight: "20px", borderRadius: "0 0 50px 0", alignItems: "center", flexWrap: 'wrap' }}>

        <div className="card animated-card" style={{ width: '15rem', borderRadius: "20px", borderColor: "white" }}>
          <div className="card-body overflow: 'hidden', whiteSpace: 'nowrap' ">
            <h5 className="card-title" style={{ fontFamily: 'PT sans', color: '#65A0FB', fontSize: "60px", marginTop: "50px" }}>49</h5>
            <p className="card-text" style={contentStyle}>
              Number of Academies.
            </p>
          </div>
        </div>

        <div className="card animated-card" style={{ width: '15rem', borderRadius: "20px", borderColor: "white", flexWrap: 'wrap' }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontFamily: 'PT sans', color: '#65A0FB', fontSize: "60px", marginTop: "50px" }}>10K +</h5>
            <p className="card-text" style={contentStyle}>
              Academy Students.
            </p>
          </div>
        </div>

        <div className="card animated-card" style={{ width: '15rem', borderRadius: "20px", borderColor: "white" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontFamily: 'PT sans', color: '#65A0FB', fontSize: "60px", marginTop: "50px" }}>10K +</h5>
            <p className="card-text" style={contentStyle}>
              Online Students
            </p>
          </div>
        </div>

        <div className="card animated-card" style={{ width: '15rem', borderRadius: "20px", borderColor: "white" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontFamily: 'PT sans', color: '#65A0FB', fontSize: "60px", marginTop: "50px" }}>650</h5>
            <p className="card-text" style={contentStyle}>
              Online Certifications.
            </p>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Features;
