import React from 'react';

function Reviews() {
  return (
    <div style={{ backgroundColor: "#F5F3F4", borderRadius: "30px 0 0 0" , marginLeft:"20px"}}>
      <h2 style={{fontFamily: 'PT sans',
    color: '#65A0FB',
    fontSize: '50px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: '28px'}}>Reviews</h2>
    <h5 style={{flex: 1,
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        textAlign: 'center',
        marginLeft:"100px",
        marginRight:"100px"}}>What our students say!</h5><br/>

      <div style={{ overflow: 'hidden' }}>
        <marquee scrollamount="3" direction="left" loop="infinite">
          <div style={{ display: 'flex' }}>
            <div className="card" style={{ 
              width: '18rem',
              marginRight: '1rem',
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
             
              borderRadius:"20px",
              backgroundColor:"#EFF2FF"
              

            }}>
              <img src="https://cdn.pixabay.com/photo/2018/09/06/18/26/person-3658927_960_720.png" className="card-img-top" alt="..." style={{ height: "150px", width: "150px" }} />
              <div className="card-body">
                <h5 className="card-title">Jaitra Desai</h5>
                <p className="card-text">Best Cricket Academy</p>
              </div>
            </div>

            {/* Add more cards here */}
            <div className="card" style={{
              width: '18rem',
              marginRight: '1rem',
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius:"20px",
              backgroundColor:"#E8FAE8"
              
            }}>
              <img src="https://cdn.pixabay.com/photo/2018/09/06/18/26/person-3658927_960_720.png"  className="card-img-top" alt="..." style={{ height: "150px", width: "150px" }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Best Cricket Academy</p>
              </div>
            </div>

            <div className="card" style={{
              width: '18rem',
              marginRight: '1rem',
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundColor:"#FFF7E3",
              borderRadius:"20px"
              
            }}>
              <img src="https://cdn.pixabay.com/photo/2018/09/06/18/26/person-3658927_960_720.png"  className="card-img-top" alt="..." style={{ height: "150px", width: "150px" }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Best Cricket Academy</p>
              </div>
            </div>

            <div className="card" style={{
              width: '18rem',
              marginRight: '1rem',
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundColor:"#EADFFE",
              borderRadius:"20px"
             
            }}>
              <img src="https://cdn.pixabay.com/photo/2018/09/06/18/26/person-3658927_960_720.png"  className="card-img-top" alt="..." style={{ height: "150px", width: "150px" }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Best Cricket Academy</p>
              </div>
            </div>

            <div className="card" style={{
              width: '18rem',
              marginRight: '1rem',
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius:"20px"
              
            }}>
              <img src="https://cdn.pixabay.com/photo/2018/09/06/18/26/person-3658927_960_720.png"  className="card-img-top" alt="..." style={{ height: "150px", width: "150px" }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Best Cricket Academy</p>
              </div>
            </div>

            <div className="card" style={{
              width: '18rem',
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundColor:"#EFF2FF",
              borderRadius:"20px"

             
            }}>
              <img src="https://cdn.pixabay.com/photo/2018/09/06/18/26/person-3658927_960_720.png"  className="card-img-top" alt="..." style={{ height: "150px", width: "150px" }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Best Cricket Academy</p>
              </div>
            </div>
          </div>
        </marquee>
      </div>
      <br/>
      
      
    </div>

    
  );
}

export default Reviews;
