import React from 'react';

const Images = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontFamily: 'PT sans', color: '#65A0FB', fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>Images</h2>
      <h5 style={{ flex: 1, fontSize: '15px', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.7)', textAlign: 'center', marginLeft: "100px", marginRight: "100px" }}>Take a moment to browse through our captivating collection of images at Ascademy.</h5>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: "#F4F1FD", flexWrap: 'wrap',borderTopRightRadius: "50px" ,borderBottomLeftRadius:"50px" }}>
        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/1.jpeg" className="card-img-top" alt="Image 1" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/2.jpeg" className="card-img-top" alt="Image 2" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/3.jpeg" className="card-img-top" alt="Image 3" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/4.jpeg" className="card-img-top" alt="Image 4" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/9.jpeg" className="card-img-top" alt="Image 5" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/6.jpeg" className="card-img-top" alt="Image 6" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/7.jpeg" className="card-img-top" alt="Image 7" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/8.jpeg" className="card-img-top" alt="Image 8" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

       
      </div>
    </div>
  );
}

export default Images;
