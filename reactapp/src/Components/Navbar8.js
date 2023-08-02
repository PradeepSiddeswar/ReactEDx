import React from "react";

const Navbar8 = () => {
    return (
        <>
            <div class="container text-center">
                {/* <a class="icon-link " style={{ color: 'black' }} href="#">
                    <button class="btn btn-primary"><i class="fa fa-facebook"></i> | Facebook</button>
                </a>
                
                <a class="icon-link p-left " href="#">
                    <button class="btn btn-primary"><i class="fa fa-envelope" aria-hidden="true"></i> | Gmail</button>
                </a> */}
                <p>As a mission-driven organization, we're relentlessly pursuing our vision of a world where every learner can access education to unlock their potential, without the <br></br>barriers of cost or location.<br></br>
                Build systems that make the digital world work. <br></br>Become a full stack developer ready to enter the high-demand world of programming. <br></br>You’ll also gain access to continuation courses that provide additional competitive skills, such as Python, Java, C#, and Amazon Web Services. No previous coding experience is required.</p>
                <div class="gap-6">
                    <div class="p-2 g-col-6">
                        <a class="icon-link " style={{ color: 'black' }} href="https://www.facebook.com/">
                            <button class="btn btn-primary"><i class="fa fa-facebook"></i> | Facebook</button>
                        </a>
                    </div>
                    <div class="p-2 g-col-6">
                        <a class="icon-link p-left " href="https://web.whatsapp.com/">
                            <button class="btn btn-success">
                                <i class="fa fa-whatsapp" aria-hidden="true"></i> whatsapp
                            </button>
                        </a>
                    </div>
                    <div class="p-2 g-col-6">
                        <a class="icon-link p-left " href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1309030980%3A1690867039976283">
                            <button class="btn btn-danger"> <i class="fa fa-envelope" aria-hidden="true"></i> | Gmail</button>
                        </a>
                    </div>
                    <br></br>
                    <div class="p-2 g-col-6">
                        <a class="icon-link p-left " href="https://github.com/">
                            <button class="btn btn-dark"> <i class="fa fa-github" aria-hidden="true"></i>  Github</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar8;