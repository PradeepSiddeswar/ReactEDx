import React from "react";

const Navbar3 = () => {
    return (
        <>
            <div class="container text-center ">
                <div class="px-4 pt-5 container-mw-lg container-fluid ">
                    <h2 class="display-1 heading pb-4 pb-md-3 new-on-edx_header d-flex" style={{ fontWeight: 'bold', fontSize: '40px' }}>
                        <span class="emphasized " style={{ color: '#d23228', fontWeight: 'bold' }}>New</span>
                        " on edX"
                    </h2>
                    <div class=" d-flex ">
                        <a class="btn btn-light" href="#" role="button">Executive Education</a>
                        <button class="btn btn-light" type="submit">Master's Degrees</button>
                        <input class="btn btn-light" type="button" value="Bachelor's Degrees" />
                    </div>

                </div>
                <hr />
            </div>

        </>
    )
}

export default Navbar3;