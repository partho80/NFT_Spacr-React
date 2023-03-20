import React from 'react'

function TopSellers() {
  return (
      <div>
           <section className="top-sellers-wrapper section-padding pt-0">
        <div className="container">
            <div className="section-head">
                <h2 className="heading-primary">Top <span className="gradient">Sellers</span></h2>
            </div>
            <div className="row gy-4">
                {/* <!-- Single Card --> */}
                <div className="col-lg-4 col-sm-6">
                    <div className="top-seller-card" data-aos="zoom-in">
                        <a href="author.html">
                            <div className="card-thumb bg-cover"  style={{backgroundImage: `url('./assets/img/artists/artist2.jpg')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <div className="card-info">
                            <h4 className="title">
                                <a href="author.html"> John Smith </a>
                            </h4>

                            <p className="items">
                                8.708
                                <span>ETH</span>
                            </p>
                        </div>
                        <a href="author.html" className="button">
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                {/* <!-- Single Card --> */}
                <div className="col-lg-4 col-sm-6">
                    <div className="top-seller-card" data-aos="zoom-in">
                        <a href="author.html">
                            <div className="card-thumb bg-cover"  style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <div className="card-info">
                            <h4 className="title">
                                <a href="author.html"> Taylor Swift </a>
                            </h4>

                            <p className="items">
                                8.0508
                                <span>ETH</span>
                            </p>
                        </div>
                        <a href="author.html" className="button">
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                {/* <!-- Single Card --> */}
                <div className="col-lg-4 col-sm-6">
                    <div className="top-seller-card" data-aos="zoom-in">
                        <a href="author.html">
                            <div className="card-thumb bg-cover" style={{backgroundImage: `url('./assets/img/artists/artist3.jpg')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <div className="card-info">
                            <h4 className="title">
                                <a href="author.html"> Maria Miller </a>
                            </h4>

                            <p className="items">
                                7.7808
                                <span>ETH</span>
                            </p>
                        </div>
                        <a href="author.html" className="button">
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                {/* <!-- Single Card --> */}
                <div className="col-lg-4 col-sm-6">
                    <div className="top-seller-card" data-aos="zoom-in">
                        <a href="author.html">
                            <div className="card-thumb bg-cover"  style={{backgroundImage: `url('./assets/img/artists/artist3.jpg')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <div className="card-info">
                            <h4 className="title">
                                <a href="author.html"> John Smith </a>
                            </h4>

                            <p className="items">
                                5.708
                                <span>ETH</span>
                            </p>
                        </div>
                        <a href="author.html" className="button">
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                {/* <!-- Single Card --> */}
                <div className="col-lg-4 col-sm-6">
                    <div className="top-seller-card" data-aos="zoom-in">
                        <a href="author.html">
                            <div className="card-thumb bg-cover"  style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <div className="card-info">
                            <h4 className="title">
                                <a href="author.html"> Taylor Swift </a>
                            </h4>

                            <p className="items">
                                5.7088
                                <span>ETH</span>
                            </p>
                        </div>
                        <a href="author.html" className="button">
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                {/* <!-- Single Card --> */}
                <div className="col-lg-4 col-sm-6">
                    <div className="top-seller-card" data-aos="zoom-in">
                        <a href="author.html">
                            <div className="card-thumb bg-cover"  style={{backgroundImage: `url('./assets/img/artists/artist3.jpg')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <div className="card-info">
                            <h4 className="title">
                                <a href="author.html"> Maria Miller </a>
                            </h4>

                            <p className="items">
                                4.908
                                <span>ETH</span>
                            </p>
                        </div>
                        <a href="author.html" className="button">
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default TopSellers