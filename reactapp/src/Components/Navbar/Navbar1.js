import React from "react";

const Navbar1 = () => {
    return(
        <>
        <div class="container text-center ">
  <div class="row">
    <div class=" d-flex col-12" style={{fontSize:'80px'}}>Fuel Your ambition</div>
  </div>
  <form class="d-flex" role="search" style={{marginTop:'50px'}}>
        <input class="me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item d-flex" style={{marginTop:'50px'}}>
          <a class="nav-link active" aria-current="page" href="#" style={{color:'blue'}}>Explore all Courses</a>
        </li>
      </ul>
      <div class="d-flex">
    <img src="https://www.edx.org/images/logos/fast-co.png" alt="txt" style={{height:'150px',  marginTop:'100px'}}></img>
    <h2 style={{marginTop:'150px', marginLeft:'100px'}}>Reconized for innovation in career-relevant learning</h2>
       </div>
       <hr/>
</div>

        </>
    )
}

export default Navbar1;