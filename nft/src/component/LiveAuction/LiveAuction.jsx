import React from 'react'

function LiveAuction() {
  return (
      <div>
           <section className="new-items-wrapper live-auction-wrapper section-padding pt-0">
        <div className="container">
            <div className="section-head">
                <h2 className="heading-primary">Live <span className="gradient">Auction</span></h2>
            </div>
            <div className="new-items-slider-wrapper owl-carousel">
                 {/* <!-- Slider item --> */}
                 <div className="slider-item">
                    <div className="items-card-wrapper">
                        <a href="auction-details.html" className="card-thumb-wrapper">
                            <div className="card-thumb bg-cover" style={{backgroundImage: `url('./assets/img/arts/art-4.png')`}}>
                                      
                                <div className="auction-countdown three"></div>
                            </div>
                        </a>
                        <div className="card-content">
                            <div className="content-top">
                                <h3 className="item-name heading-tertiary">
                                    <a href="auction-details.html">OneLove</a>
                                </h3>
                                <span className="stock">11+ Bits</span>
                            </div>
                            <div className="item-author">
                                <a href="author.html">
                                    <div className="author-avatar bg-cover" style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}></div>
                                </a>
                                <a href="author.html" className="author-name">@johonmiller</a>
                            </div>
                            <div className="item-bottom">
                                <div className="item-price">
                                    <span className="icon">
                                        <img src="./assets/img/icons/eth.png" alt="" />
                                    </span>
                                    <span className="price">0.4 eth</span>
                                </div>
                                <a href="auction-details.html" className="card-link">Place a bid</a>
                            </div>
                        </div>
                        <span className="card-like">
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                </div>
                {/* <!-- Slider item --> */}
                <div className="slider-item">
                    <div className="items-card-wrapper">
                        <a href="auction-details.html" className="card-thumb-wrapper">
                            <div className="card-thumb bg-cover" style={{backgroundImage: `url('./assets/img/arts/art-1.png')`}}>
                                <div className="auction-countdown one"></div>
                            </div>
                        </a>
                        <div className="card-content">
                            <div className="content-top">
                                <h3 className="item-name heading-tertiary">
                                    <a href="auction-details.html">Spyster</a>
                                </h3>
                                <span className="stock">10+ Bits</span>
                            </div>
                            <div className="item-author">
                                <a href="author.html">
                                    <div className="author-avatar bg-cover" style={{backgroundImage: `url('./assets/img/artists/artist-sm1.png')`}}></div>
                                </a>
                                <a href="author.html" className="author-name">@johndoe</a>
                            </div>
                            <div className="item-bottom">
                                <div className="item-price">
                                    <span className="icon">
                                        <img src="./assets/img/icons/eth.png" alt="" />
                                    </span>
                                    <span className="price">0.8 eth</span>
                                </div>
                                <a href="auction-details.html" className="card-link">Place a bid</a>
                            </div>
                        </div>
                        <span className="card-like">
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                </div>
                {/* <!-- Slider item --> */}
               <div className="slider-item">
                <div className="items-card-wrapper">
                    <a href="auction-details.html" className="card-thumb-wrapper">
                        <div className="card-thumb bg-cover" style={{backgroundImage: `url('./assets/img/arts/art-2.png')`}}>
                            <div className="auction-countdown two"></div>
                        </div>
                    </a>
                    <div className="card-content">
                        <div className="content-top">
                            <h3 className="item-name heading-tertiary">
                                <a href="auction-details.html">FightPunks</a>
                            </h3>
                            <span className="stock">11+ Bits</span>
                        </div>
                        <div className="item-author">
                            <a href="author.html">
                                <div className="author-avatar bg-cover" style={{backgroundImage: `url('./assets/img/artists/artist-sm3.png')`}}></div>
                            </a>
                            <a href="author.html" className="author-name">@johndoe</a>
                        </div>
                        <div className="item-bottom">
                            <div className="item-price">
                                <span className="icon">
                                    <img src="./assets/img/icons/eth.png" alt="" />
                                </span>
                                <span className="price">0.4 eth</span>
                            </div>
                            <a href="item-details.html" className="card-link">Place a bid</a>
                        </div>
                    </div>
                    <span className="card-like">
                        <i className="fas fa-heart"></i>
                    </span>
                </div>
               </div>
               {/* <!-- Slider-item --> */}
               <div className="slider-item">
                <div className="items-card-wrapper">
                    <a href="auction-details.html" className="card-thumb-wrapper">
                        <div className="card-thumb bg-cover" style={{backgroundImage: `url('./assets/img/arts/art-5.png')`}}>
                            <div className="auction-countdown four"></div>
                        </div>
                    </a>
                    <div className="card-content">
                        <div className="content-top">
                            <h3 className="item-name heading-tertiary">
                                <a href="item-details.html">NiTRo</a>
                            </h3>
                            <span className="stock">13+ Bits</span>
                        </div>
                        <div className="item-author">
                            <a href="author.html">
                                <div className="author-avatar bg-cover" style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}></div>
                            </a>
                            <a href="author.html" className="author-name">@bradmiller</a>
                        </div>
                        <div className="item-bottom">
                            <div className="item-price">
                                <span className="icon">
                                    <img src="./assets/img/icons/eth.png" alt="" />
                                </span>
                                <span className="price">0.4 eth</span>
                            </div>
                            <a href="item-details.html" className="card-link">Place a bid</a>
                        </div>
                    </div>
                    <span className="card-like">
                        <i className="fas fa-heart"></i>
                    </span>
                </div>
               </div>
                {/* <!-- Slider item -->/ */}
                <div className="slider-item">
                    <div className="items-card-wrapper">
                        <a href="auction-details.html" className="card-thumb-wrapper">
                            <div className="card-thumb bg-cover" style={{backgroundImage: `url('./assets/img/arts/art-4.png')`}}>
                                <div className="auction-countdown three"></div>
                            </div>
                        </a>
                        <div className="card-content">
                            <div className="content-top">
                                <h3 className="item-name heading-tertiary">
                                    <a href="auction-details.html">OneLove</a>
                                </h3>
                                <span className="stock">11+ Bits</span>
                            </div>
                            <div className="item-author">
                                <a href="author.html">
                                    <div className="author-avatar bg-cover" style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}} ></div>
                                </a>
                                <a href="author.html" className="author-name">@johnmiller</a>
                            </div>
                            <div className="item-bottom">
                                <div className="item-price">
                                    <span className="icon">
                                        <img src="./assets/img/icons/eth.png" alt="" />
                                    </span>
                                    <span className="price">0.4 eth</span>
                                </div>
                                <a href="auction-details.html" className="card-link">Place a bid</a>
                            </div>
                        </div>
                        <span className="card-like">
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                </div>
               
            </div>
        </div>
    </section>

    </div>
  )
}

export default LiveAuction