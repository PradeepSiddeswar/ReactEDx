import React from "react";

const Navbar4 = () => {
    return (
        <>
            <div class="container text-center ">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/09/28191405/iStock-1194783078.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Product management</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <button type="button" class="btn btn-success">Executive Education</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Sales_Led_Product_Led_or_Human_Led_Growth.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Chief Digital officer Programme</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                                <button type="button" class="btn btn-success">Executive Education</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://www.matichon.co.th/wp-content/uploads/2019/10/%E0%B8%A0%E0%B8%9B-digital-transformation-728x400.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Certificate Programme</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                                <button type="button" class="btn btn-success">Executive Education</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 m-4">
                    <li class="nav-item">
                        <button type="button" class="btn btn-danger">
                            <a class="nav-link active" aria-current="page" href="#">Explore More Executive Education</a>
                        </button>
                    </li>
                </ul>
                <hr />
            </div>
        </>
    )
}

export default Navbar4;