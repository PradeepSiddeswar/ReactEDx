import React from "react";

const Navbar1 = () => {
    return(
        <>
         <div class="card mb-4" style={{ maxWidth: '2000px', backgroundColor: '#e1dddb' }}>
        <div class="container text-center ">
  <div class="row">
    <div class=" d-flex col-12" style={{fontSize:'80px'}}>Fuel Your ambition</div>
  </div>
  <form class="d-flex" role="search" style={{marginTop:'50px'}}>
        <input class="me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-danger" type="submit">Search</button>
      </form>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item d-flex" style={{marginTop:'50px'}}>
          <a class="nav-link active" aria-current="page" href="#" style={{color:'blue'}}>Explore all Courses</a>
        </li>
      </ul>
      <div class="d-flex">
    <img src="https://www.edx.org/images/logos/fast-co.png" alt="txt" style={{height:'100px',  marginTop:'100px'}}></img>
    <h2 style={{marginTop:'130px', marginLeft:'100px'}}>Reconized for innovation in career-relevant learning</h2>
       </div>
</div>
</div>
        </>
    )
}

export default Navbar1;