import React from 'react'

function Hero() {
    return (
        <div>
            <section className="hero-wrapper">
                <div className="container">
                    <div className="row gy-5 gy-lg-0">
                        <div className="col-lg-7">
                            <div className="left-content" data-aos="fade-up">
                                <h1 className="hero-heading">
                                    Explore, Create <br /> & Sell
                                    <span className="hero-gradient typed"></span> <br /> Digital Creativity
                                </h1>
                                <p className="body-text">
                                    The world's first and largest digital marketplace for NFT.
                                </p>
                                <div className="hero-counters">
                                    <div className="counter-item">
                                        <h3>
                                            <span className="counter-up">13954</span>
                                            <span className="plus">+</span>
                                        </h3>
                                        <p className="body-text">Collectibles</p>
                                    </div>
                                    <div className="counter-item">
                                        <h3>
                                            <span className="counter-up">3545</span>
                                            <span className="plus">+</span>
                                        </h3>
                                        <p className="body-text">Auctions</p>
                                    </div>
                                    <div className="counter-item">
                                        <h3>
                                            <span className="counter-up">3000</span>
                                            <span className="plus">+</span>
                                        </h3>
                                        <p className="body-text">Artist</p>
                                    </div>
                                </div>
                                <div className="hero-buttons d-flex flex-wrap d-block">
                                    <a href="explore.html" className="button button-primary">
                                        <span className="icon">
                                            <i className="fal fa-rocket"></i>
                                        </span>
                                        Explore Item</a>
                                    <a href="create.html" className="button button-secondary"><span className="icon"> <i className="fal fa-plus"></i> </span>Create</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 justify-content-center align-items-center">
                            <div className="hero-slider-wrapper">
                                {/* <!-- Single Slider  --> */}
                                <div className="single-slider bg-cover d-flex align-items-center">
                                    <div className="items-card-wrapper" data-animation="bounceInUp" data-delay=".2s">
                                        <a href="#" className="card-thumb-wrapper">
                                            <div className="card-thumb bg-cover" style={{ backgroundImage: `url('./assets/img/arts/art-1.png')` }}></div>
                                        </a>
                                        <div className="card-content">
                                            <div className="content-top">
                                                <h3 className="item-name heading-tertiary">
                                                    <a href="item-details.html">Spyster</a>
                                                </h3>
                                                <span className="stock">10+ Bits</span>
                                            </div>
                                            <div className="item-author">
                                                <a href="#">
                                                    <div className="author-avatar bg-cover" style={{backgroundImage: `url('./assets/img/artists/artist-sm1.png')`}}>
                                                                                       </div>
                                                </a>
                                                <a href="#" className="author-name">@johndoe</a>
                                            </div>
                                            <div className="item-bottom">
                                                <div className="item-price">
                                                    <span className="icon">
                                                        <img src="./assets/img/icons/eth.png" alt="" />
                                                    </span>
                                                    <span className="price">0.8 eth</span>
                                                </div>
                                                <a href="items-details" className="card-link">Place a bid</a>
                                            </div>
                                        </div>
                                        <div className="featured-pin">
                                            <h5>Featured Art</h5>
                                        </div>
                                        <span className="card-like">
                                            <i className="fas fa-heart"></i>
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- Single Slider  --> */}
                                <div className="single-slider bg-cover d-flex align-items-center">
                                    <div className="items-card-wrapper" data-animation="bounceInUp" data-delay=".2s">
                                        <a href="#" className="card-thumb-wrapper">
                                            <div className="card-thumb bg-cover"  style={{backgroundImage: `url('./assets/img/arts/art-2.png')`}}>
                                              </div>
                                        </a>
                                        <div className="card-content">
                                            <div className="content-top">
                                                <h3 className="item-name heading-tertiary">
                                                    <a href="item-details.html">OneLove</a>
                                                </h3>
                                                <span className="stock">10+ Bits</span>
                                            </div>
                                            <div className="item-author">
                                                <a href="#">
                                                    <div className="author-avatar bg-cover">
                                                      
                                                    </div>
                                                </a>
                                                <a href="#" className="author-name">@mariamiller</a>
                                            </div>
                                            <div className="item-bottom">
                                                <div className="item-price">
                                                    <span className="icon">
                                                        <img src="./assets/img/icons/eth.png" alt="" />
                                                    </span>
                                                    <span className="price">0.8 eth</span>
                                                </div>
                                                <a href="#" className="card-link">Place a bid</a>
                                            </div>
                                        </div>
                                        <div className="featured-pin">
                                            <h5>Featured Art</h5>
                                        </div>
                                        <span className="card-like">
                                            <i className="fas fa-heart"></i>
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- Single Slider  --> */}
                                <div className="single-slider bg-cover d-flex align-items-center">
                                    <div className="items-card-wrapper" data-animation="bounceInUp" data-delay=".2s">
                                        <a href="#" className="card-thumb-wrapper">
                                            <div className="card-thumb bg-cover" style={{backgroundImage: `url('./assets/img/arts/art-4.png')`}}>
                                               </div>
                                        </a>
                                        <div className="card-content">
                                            <div className="content-top">
                                                <h3 className="item-name heading-tertiary">
                                                    <a href="item-details.html">FightPunks</a>
                                                </h3>
                                                <span className="stock">10+ Bits</span>
                                            </div>
                                            <div className="item-author">
                                                <a href="#">
                                                    <div className="author-avatar bg-cover"></div>
                                                </a>
                                                <a href="#" className="author-name">@johnsmith</a>
                                            </div>
                                            <div className="item-bottom">
                                                <div className="item-price">
                                                    <span className="icon">
                                                        <img src="./assets/img/icons/eth.png" alt="" />
                                                    </span>
                                                    <span className="price">0.5 eth</span>
                                                </div>
                                                <a href="#" className="card-link">Place a bid</a>
                                            </div>
                                        </div>
                                        <div className="featured-pin">
                                            <h5>Featured Art</h5>
                                        </div>
                                        <span className="card-like">
                                            <i className="fas fa-heart"></i>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero