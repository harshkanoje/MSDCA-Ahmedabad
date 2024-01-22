import React from 'react';

function Concept() {
    return (
        <div>
            <h2 style={{
                fontFamily: "PT sans",
                color: "#65A0FB",
                fontSize: "40px",
                fontWeight: "bold",
                textAlign: "center",
                marginLeft: "29px"
            }}>Concept</h2>
            <br />
            <center>
                <div className="accordion" id="accordionExample" style={{ maxWidth: '90%' }}>
                    {/* Accordion 1 */}
                    <div className="accordion-item" style={{ borderRadius: '20px', border: '2px solid #dee2e6', marginBottom: '10px' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{
                                borderRadius: '20px', border: 'none', padding: '10px', flex: 1,


                                fontSize: "20px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'
                            }}>
                                Cricket in India: A Dream Pursued
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'
                            }}>
                                Over the past couple of decades, the game of Cricket has almost become a religion in India and has given scope for children of all ages to participate at different levels to pursue their dream of playing for India.
                            </div>
                        </div>
                    </div>

                    {/* Accordion 2 */}
                    <div className="accordion-item" style={{ borderRadius: '20px', border: '2px solid #dee2e6', marginBottom: '10px' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{
                                borderRadius: '20px', border: 'none', padding: '10px', fontSize: "20px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'
                            }}>
                                Success: School Premier League to South Africa
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'
                            }}>
                                Our School Premier League Season 1 was a success which culminated in our MSDCA players participating in the International Tour to South Africa.
                            </div>
                        </div>
                    </div>

                    {/* Accordion 3 */}
                    <div className="accordion-item" style={{ borderRadius: '20px', border: '2px solid #dee2e6', marginBottom: '10px' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{
                                borderRadius: '20px', border: 'none', padding: '10px', fontSize: "20px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'
                            }}>
                                Season 2: Expanding Reach to Schools
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'
                            }}>
                                Season 2 is aimed at reaching different levels, and our plan is to reach the unreached. With this aim, we are planning to target children in schools.
                            </div>
                        </div>
                    </div>

                    {/* Accordion 4 */}
                    <div className="accordion-item" style={{ borderRadius: '20px', border: '2px solid #dee2e6', marginBottom: '10px' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{
                                borderRadius: '20px', border: 'none', padding: '10px', fontSize: "20px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'
                            }}>
                                Empowering 15L+ Indian Schools: Creating a Player in Every School
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'
                            }}>
                                Here are more than 15 lakhs schools in India, out of which 11 lakhs+ are Government and Aided Schools, and 3.5 lakhs are Private Schools. With this as our target, we plan to reach out to the maximum number of schools and enhance the skills of students with the ulterior goal of creating 1 player per school.
                            </div>
                        </div>
                    </div>

                    {/* Accordion 5 */}
                    <div className="accordion-item" style={{ borderRadius: '20px', border: '2px solid #dee2e6', marginBottom: '10px' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{
                                borderRadius: '20px', border: 'none', padding: '10px', fontSize: "20px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'
                            }}>
                                Nurturing Future Stars: 10L+ Students on the International Stage
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'
                            }}>
                                To reach our goal, we are giving a chance to 10 lakh+ students to participate in our League and reach a stage to perform at the International level with clubs of different countries.
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default Concept;