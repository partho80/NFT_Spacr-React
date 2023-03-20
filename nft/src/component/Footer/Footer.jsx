import React from 'react'

function Footer() {
  return (
      <div>
          <footer className="footer-wrapper" >
        <div className="footer-top">
            <div className="container">
                <div className="row gy-4 gy-lg-0">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget widget-about">
                            <a href="#" className="footer-logo">
                                <img src="./assets/img/logo-text.png" alt="NFTSpace" />
                            </a>
                            <p className="body-text">
                                The worlds largest digital marketplace for crypto collectibities
                                and non-fungible tokens (NFTs) Buy, Sell and discover exclusive
                                digital assets.
                            </p>
                            <ul className="footer-social-icons">
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-slack"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-discord"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget widget-marketplace">
                            <h3 className="widget-heading heading-tertiary">Marketplace</h3>
                            <ul className="widget-items">
                                <li><a href="#">All NFTs</a></li>
                                <li><a href="#">Art</a></li>
                                <li><a href="#">Music</a></li>
                                <li><a href="#">Virtual World </a></li>
                                <li><a href="#">New</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget widget-marketplace">
                            <h3 className="widget-heading heading-tertiary">Resources</h3>
                            <ul className="widget-items">
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Parner</a></li>
                                <li><a href="#">Docs</a></li>
                                <li><a href="#">Newsletter </a></li>
                                <li><a href="#">Suggestions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget widget-marketplace">
                            <h3 className="widget-heading heading-tertiary">Community</h3>
                            <ul className="widget-items">
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Newsletter</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget widget-newsletter">
                            <h3 className="widget-heading heading-tertiary">Newsletter</h3>
                            <p className="body-text">
                                Subscribe our newsletter to get daily update.
                            </p>
                            <div className="footer-search-box">
                                <div className="search-form-group">
                                    <input type="text" placeholder="Your email..." />
                                    <button className="button search-button">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyrights">
            <div className="container">
                <p className="body-text">&copy;2022 NFTSpace, All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    <div className="mouse-cursor"></div>

    </div>
  )
}

export default Footer