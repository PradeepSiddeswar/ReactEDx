import React from "react";

const Navbar6 = () => {
    return (
        <>
            <div class="card mb-4" style={{ maxWidth: '1900px', backgroundColor: '#00262b' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://www.edx.org/images/people/learners/learner4.png" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title" style={{ color: 'white' }}>For Learners</h5>
                            <p class="card-text" style={{ color: 'white' }}>Propel your career, get degree,<br></br> knowledge at any level.</p>
                            <p class="card-text" style={{ color: 'white' }}><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title" style={{ color: 'white' }}>For Businesses</h5>
                            <p class="card-text" style={{ color: 'white' }}>Upskill employees and build a culture of learning<br></br> a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text" style={{ color: 'white' }}><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title" style={{ color: 'white' }}>For Education</h5>
                            <p class="card-text" style={{ color: 'white' }}> Expand your curriculum <br></br>Through blended learning.</p>
                            <p class="card-text" style={{ color: 'white' }}><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar6;