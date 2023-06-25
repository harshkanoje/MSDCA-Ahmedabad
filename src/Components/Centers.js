import React from 'react';

function Centers() {
  return (
    <>
      <h2>Our Centers</h2>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {/* Card 1 */}
          <div className="card " style={{ width: '25rem', marginRight: '1rem', marginBottom: '1rem', borderColor: 'white' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68689084372!2d70.73889484950288!3d22.273625027346018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1687714596480!5m2!1sen!2sin" width="400" height="300" style={{ border: '0' , borderRadius:"20px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="card-body">
              <h5 className="card-title">Rajkot</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary" style={{ borderRadius: '20px' }}>Go somewhere</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ width: '25rem', marginRight: '1rem', marginBottom: '1rem', borderColor: 'white' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58502.41699326256!2d72.34177922008371!3d23.58994522747328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c422caf789ef5%3A0x170bbc90b8be8bdc!2sMehsana%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1687714899389!5m2!1sen!2sin" width="400" height="300" style={{border:"0" , borderRadius:"20px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="card-body">
              <h5 className="card-title">Mehsana</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary" style={{ borderRadius: '20px' }}>Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Centers;
