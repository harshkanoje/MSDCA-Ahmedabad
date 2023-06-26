import React from 'react';

function About() {
  return (
    <div>
      <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '50px',
        fontWeight: 'bold',
        textAlign: 'center',
      }}>Who we are</h2>
      <br/>
      <p style={{
        flex: 1,
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        textAlign: 'center',
        marginLeft:"100px",
        marginRight:"100px"
      }}>A brainchild of Aarka Sports, M.S. Dhoni Cricket Academy started with the single thought of giving back to the aspiring sports community in our country. Mentored by M.S.Dhoni and founded by Mihir Diwakar, MSDCA is redefining the standards for coaching and developing cricket globally. Equipped with advanced technology, premier coaching facilities, and qualified coaches, MSDCA is spreading its wings to every corner of the globe.</p>
    </div>
  );
}

export default About;
