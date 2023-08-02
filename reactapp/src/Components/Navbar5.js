import React from "react";

const Navbar5 = () => {
    return (
        <>
            <div class="container text-center d-flex">
                <h1>Explore top courses</h1>
            </div>
            <div className="button d-flex  container text-center">
                <button type="button" class="btn btn-light" >Artificial intelligence</button>
                <button type="button" class="btn btn-light">Computer Science</button>
                <button type="button" class="btn btn-light">Data Science</button>
                <button type="button" class="btn btn-light">Business</button>
            </div>
            <div class=" container text-center d-flex ">
                <div class="row pt-4 ">
                    <div class="col-sm-3 ">
                        <div class="card">
                            <div class="card-body">
                                <img src="https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?b=1&s=612x612&w=0&k=20&c=5S5LGG4cZl8DE3T-kD5ZYQRZMntgYg4E2IQAB-VJjqg=" class="card-img-top" alt="..." />
                                <h5 class="card-title">Master of Science in Artificial intelligence(MSAI)</h5>
                                <p class="card-text">The University of Texas at Austin loction.</p>
                                <button type="button" class="btn btn-success">Master's Degree</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <img src="https://theonebrief.com/wp-content/uploads/2019/02/DigitalTransformations_Website_image-1000x589.png" class="card-img-top" alt="..." />
                                <h5 class="card-title">CS50's Introduction to Artificial Intelligence with Python</h5>
                                <p class="card-text">Harvard University of Texas Austin</p>
                                <button type="button" class="btn btn-success">Course</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <img src="https://www.e-spincorp.com/wp-content/uploads/2018/06/digital-transformation-espincorp.jpg" class="card-img-top" alt="..." />
                                <h5 class="card-title">Artificial Intelligence: implication for Bussiness Strategy</h5>
                                <p class="card-text">MIT Sloan Schools of Management</p>
                                <button type="button" class="btn btn-success">Excetive Eduction</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <img src="https://www.e-spincorp.com/wp-content/uploads/2018/06/digital-transformation-espincorp.jpg" class="card-img-top" alt="..." />
                                <h5 class="card-title">Artificial Intelligence: implication for Bussiness Strategy</h5>
                                <p class="card-text">MIT Sloan Schools of Management</p>
                                <button type="button" class="btn btn-success">Excetive Eduction</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button " class="btn btn-dark m-4"  >Explore More Ai Courses</button>


        </>
    )
}

export default Navbar5;