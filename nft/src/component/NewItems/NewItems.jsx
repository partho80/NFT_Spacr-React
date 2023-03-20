import React from 'react'

function NewItems() {
  return (
      <div>
          <section className="new-items-wrapper section-padding pt-0">
        <div className="container">
            <div className="section-head">
                <h2 className="heading-primary">New & Hot <span className="gradient">Items</span></h2>
            </div>
            <div className="new-items-slider-wrapper owl-carousel">
                {/* <!-- Slider item --> */}
                <div className="slider-item">
                    <div className="items-card-wrapper">
                        <a href="item-details.html" className="card-thumb-wrapper">
                            <div className="card-thumb bg-cover" style={{backgroundImage: `url('./assets/img/arts/art-1.png')`}}></div>
                        </a>
                        <div className="card-content">
                            <div className="content-top">
                                <h3 className="item-name heading-tertiary">
                                    <a href="item-details.html">FightPunks</a>
                                </h3>
                                <span className="stock">11+ Bits</span>
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
                <div className="slider-item">
                    <div className="items-card-wrapper">
                        <a href="item-details.html" className="card-thumb-wrapper">
                            <div className="card-thumb bg-cover"style={{backgroundImage: `url('./assets/img/arts/art-4.png')`}}></div>
                        </a>
                        <div className="card-content">
                            <div className="content-top">
                                <h3 className="item-name heading-tertiary">
                                    <a href="item-details.html">OneLove</a>
                                </h3>
                                <span className="stock">11+ Bits</span>
                            </div>
                            <div className="item-author">
                                <a href="author.html">
                                    <div className="author-avatar bg-cover"  style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}></div>
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
                                <a href="item-details.html" className="card-link">Place a bid</a>
                            </div>
                        </div>
                        <span className="card-like">
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="items-card-wrapper">
                        <a href="item-details.html" className="card-thumb-wrapper">
                            <div className="card-thumb bg-cover"style={{backgroundImage: `url('./assets/img/arts/art-5.png')`}}></div>
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
                                    <div className="author-avatar bg-cover"  style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}></div>
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
                <div className="slider-item">
                    <div className="items-card-wrapper">
                        <a href="item-details.html" className="card-thumb-wrapper">
                            <div className="card-thumb bg-cover"style={{backgroundImage: `url('./assets/img/arts/art-1.png')`}}></div>
                        </a>
                        <div className="card-content">
                            <div className="content-top">
                                <h3 className="item-name heading-tertiary">
                                    <a href="item-details.html">Spyster</a>
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
                                <a href="item-details.html" className="card-link">Place a bid</a>
                            </div>
                        </div>
                        <span className="card-like">
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="items-card-wrapper">
                        <a href="item-details.html" className="card-thumb-wrapper">
                            <div className="card-thumb bg-cover" style={{backgroundImage: `url('./assets/img/arts/art-4.png')`}}></div>
                        </a>
                        <div className="card-content">
                            <div className="content-top">
                                <h3 className="item-name heading-tertiary">
                                    <a href="item-details.html">OneLove</a>
                                </h3>
                                <span className="stock">11+ Bits</span>
                            </div>
                            <div className="item-author">
                                <a href="author.html">
                                    <div className="author-avatar bg-cover" style={{backgroundImage: `url('./assets/img/arts/art-1.png')`}}></div>
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
                                <a href="item-details.html" className="card-link">Place a bid</a>
                            </div>
                        </div>
                        <span className="card-like">
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="items-card-wrapper">
                        <a href="item-details.html" className="card-thumb-wrapper">
                            <div className="card-thumb bg-cover"style={{backgroundImage: `url('./assets/img/arts/art-1.png')`}}></div>
                        </a>
                        <div className="card-content">
                            <div className="content-top">
                                <h3 className="item-name heading-tertiary">
                                    <a href="item-details.html">Spyster</a>
                                </h3>
                                <span className="stock">10+ Bits</span>
                            </div>
                            <div className="item-author">
                                <a href="author.html">
                                    <div className="author-avatar bg-cover"style={{backgroundImage: `url('./assets/img/artists/artist-sm1.png')`}}></div>
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
                                <a href="item-details.html" className="card-link">Place a bid</a>
                            </div>
                        </div>
                        <span className="card-like">
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="items-card-wrapper">
                        <a href="item-details.html" className="card-thumb-wrapper">
                            <div className="card-thumb bg-cover" style={{backgroundImage: `url('./assets/img/arts/art-4.png')`}} ></div>
                        </a>
                        <div className="card-content">
                            <div className="content-top">
                                <h3 className="item-name heading-tertiary">
                                    <a href="item-details.html">OneLove</a>
                                </h3>
                                <span className="stock">11+ Bits</span>
                            </div>
                            <div className="item-author">
                                <a href="author.html">
                                    <div className="author-avatar bg-cover" style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}></div>
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
                                <a href="item-details.html" className="card-link">Place a bid</a>
                            </div>
                        </div>
                        <span className="card-like">
                            <i className="fas fa-heart"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="section-button">
                <a href="explore.html" className="button button-secondary"> Explore More </a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default NewItems