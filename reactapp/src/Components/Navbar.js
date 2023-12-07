import react from "react"

const Navbar = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-light shdow-lg ">

  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <img src="https://www.edx.org/images/logos/edx-logo-elm.svg" class="img-thumbnail" alt="..." style={{width:'60px'}}/>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand mb-2 p-2" href="#" style={{fontWeight:'bold'}}> edX For Management</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="FormSignin" style={{color:'#d23228', fontWeight:'bold'}}>Sign In</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="FormRegister" style={{color:'#d23228', fontWeight:'bold'}}>Register for free</a>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link disabled">Disabled</a> */}
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;
