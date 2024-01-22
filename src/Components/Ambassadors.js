import React from 'react';

function Ambassadors() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontFamily: 'PT sans', color: '#65A0FB', fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>Ambassadors</h2>
     
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div className="card" style={{ width: '18rem', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/ambassadors/1.jpeg" className="card-img-top" alt="..." style={{borderRadius:"20px"}}/>
          <div className="card-body">
            <h5 className="card-title">Dishyant Yagnik</h5>
            <p className="card-text">Played IPL for Rajasthan Royal from 2011 to 2015. RR Coach in IPL. Played ICL for Delhi Giants from 2007 to 2009</p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/ambassadors/2.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      <style>
        {`
          @media screen and (max-width: 768px) {
            .card {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Ambassadors;