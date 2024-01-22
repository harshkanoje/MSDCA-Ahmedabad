import React from 'react';
function Achievement() {
  return (
    <div>
      <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '50px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: '28px'
      }}>
        Our Achievements
      </h2>

      <p style={{
        flex: 1,
        fontSize: '15px',
        fontWeight: 'bold',
      }}>
        A journey from playing Local tournaments to International tournaments with International Cricket Clubs!
      </p>
      <br/>
      <div className="d-flex flex-row flex-wrap justify-content-around">
        <div className="card mb-2" style={{ width: '18rem', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src="./images/achievement images/1.jpeg" className="card-img-top" alt="..." style={{ height: '200px', borderRadius: '20px' }} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card mb-2" style={{ width: '18rem', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src="./images/achievement images/2.jpeg" className="card-img-top" alt="..." style={{ height: '200px', borderRadius: '20px' }} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card mb-2" style={{ width: '18rem', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src="./images/achievement images/3.jpeg" className="card-img-top" alt="..." style={{ height: '200px', borderRadius: '20px' }} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card mb-2" style={{ width: '18rem', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src="./images/achievement images/4.jpeg" className="card-img-top" alt="..." style={{ height: '200px', borderRadius: '20px' }} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
