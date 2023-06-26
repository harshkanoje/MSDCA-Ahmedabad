import React from 'react';

function Contact() {
  return (
    <div>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="column">
            <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29375.64494896459!2d72.48947343423568!3d23.02540171379218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e853621d55185%3A0xd21d507f311ca2ad!2sMS%20DHONI%20CRICKET%20ACADEMY!5e0!3m2!1sen!2sin!4v1687721634933!5m2!1sen!2sin"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  border: '0',
                  borderRadius: '20px'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
          <div className="column">
            <form action="/action_page.php">
              <div style={{ textAlign: 'left' }}>
                <label htmlFor="fname">First Name</label>
              </div>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." style={{ borderRadius: "20px" }} />
              <div style={{ textAlign: 'left' }}>
                <label htmlFor="lname">Last Name</label>
              </div>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." style={{ borderRadius: "20px" }} />

              <div style={{ textAlign: 'left' }}>
                <label htmlFor="subject">Subject</label>
              </div>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: '170px', borderRadius: "20px" }}
              ></textarea>
              <input type="submit" value="Submit" style={{ backgroundColor: "#649FFB", borderRadius: "20px" }} />
            </form>
          </div>
        </div>
      </div>

      <style>
        {`
        * {
          box-sizing: border-box;
        }
        
        /* Style inputs */
        input[type='text'],
        select,
        textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          margin-top: 6px;
          margin-bottom: 16px;
          resize: vertical;
        }
        
        input[type='submit'] {
          background-color: #04AA6D;
          color: white;
          padding: 12px 20px;
          border: none;
          cursor: pointer;
        }
        
        input[type='submit']:hover {
          background-color: #45a049;
        }
        
        /* Style the container/contact section */
        .container {
          border-radius: 5px;
          padding: 10px;
        }
        
        /* Create two columns that float next to each other */
        .column {
          float: left;
          width: 50%;
          margin-top: 6px;
          padding: 20px;
        }
        
        /* Clear floats after the columns */
        .row:after {
          content: '';
          display: table;
          clear: both;
        }
        
        /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
        @media screen and (max-width: 600px) {
          .column,
          input[type='submit'] {
            width: 100%;
            margin-top: 0;
          }
        }
        `}
      </style>
    </div>
  );
}

export default Contact;
