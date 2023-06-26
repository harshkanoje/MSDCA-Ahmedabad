import React from 'react';

function Members() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontFamily: 'PT sans', color: '#65A0FB', fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>Learn from the Experts</h2>
      <h5 style={{
        flex: 1,
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        textAlign: 'center',
        marginLeft: "100px",
        marginRight: "100px"
      }}>Benefit from the expertise of highly skilled and trained coaches!</h5><br />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div className="card" style={{ width: '18rem', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="https://banner2.cleanpng.com/20190509/xue/kisspng-clip-art-vector-graphics-illustration-portable-net-5cd3a876b40436.7585443215573750947374.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="https://banner2.cleanpng.com/20190509/xue/kisspng-clip-art-vector-graphics-illustration-portable-net-5cd3a876b40436.7585443215573750947374.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="https://banner2.cleanpng.com/20190509/xue/kisspng-clip-art-vector-graphics-illustration-portable-net-5cd3a876b40436.7585443215573750947374.jpg" className="card-img-top" alt="..." />
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

export default Members;
