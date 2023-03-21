 import React from 'react'

function Header() {
  return (
      <div>
           <header className="header-wrapper">
        <div className="container">
            <nav className="navbar-wrapper">
                <div className="navbar-content">
                    <a href="index.html" className="logo-wrapper">
                        <img src="./assets/img/logo-text.png" alt="NFT Space" />
                    </a>

                    <div className="content-right">
                        <ul className="nav-menu">
                            <li><a href="index.html">Home</a></li>
                            <li className="has-child">
                                <a href="#">Explore
                                    <span className="icon"> <i className="fal fa-chevron-down"></i> </span></a>
                                <ul className="submenu">
                                    <li><a href="explore.html">Items</a></li>
                                    <li><a href="item-details.html">Item Details</a></li>
                                </ul>
                            </li>
                            <li className="has-child">
                                <a href="#">Author
                                    <span className="icon"> <i className="fal fa-chevron-down"></i> </span></a>
                                <ul className="submenu">
                                    <li><a href="author.html">Author</a></li>
                                    <li><a href="wallet.html">Wallet</a></li>
                                    <li><a href="create.html">Create</a></li>
                                    <li><a href="login.html">Login</a></li>
                                </ul>
                            </li>
                            <li><a href="activity.html">Activity</a></li>
                            <li className="has-child">
                                <a href="#">Blog
                                    <span className="icon"> <i className="fal fa-chevron-down"></i> </span></a>
                                <ul className="submenu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="single-blog.html">Single Blog</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>

                        <div className="header-notification-wrapper" id="notification-btn">
                            <button type="button" className="notification-icon">
                                <i className="fal fa-bell"></i>
                            </button>
                            <span className="badge">5</span>
                            {/* <!-- Notification box --> */}
                            <div className="activity-wrapper home">
                                <div className="activity-box">
                                    <h4>Your recent activity</h4>
                                    {/* <!-- Card item --> */}
                                    <div className="activity-card">
                                        <a href="author.html">
                                                  <div className="card-avatar bg-cover"
                                                      style={{ backgroundImage: `url('./assets/img/artists/artist3.jpg')` }}></div>
                                        </a>
                                        <div className="card-info">
                                            <h4 className="name">
                                                <a href="author.html">Maria Miller</a>
                                            </h4>
                                            <p className="event">Started <span>following</span> you</p>
                                            <span className="meta"> <i className="fal fa-watch"></i> 2 hours ago</span>
                                        </div>
                                    </div>
                                    {/* <!-- Card item --> */}
                                    <div className="activity-card">
                                        <a href="author.html">
                                                  <div className="card-avatar bg-cover"
                                                      style={{ backgroundImage: `url('./assets/img/artists/artist1.jpg')` }}></div>
                                        </a>
                                        <div className="card-info">
                                            <h4 className="name">
                                                <a href="author.html">Taylor Swift</a>
                                            </h4>
                                            <p className="event"><span>Liked</span> your item</p>
                                            <span className="meta"> <i className="fal fa-watch"></i> 2 hours ago</span>
                                        </div>
                                    </div>
                                    {/* <!-- Card item --> */}
                                    <div className="activity-card">
                                        <a href="author.html">
                                                  <div className="card-avatar bg-cover"
                                                      style={{ backgroundImage: `url('./assets/img/artists/artist2.jpg')` }}></div>
                                        </a>
                                        <div className="card-info">
                                            <h4 className="name">
                                                <a href="author.html">John Lee</a>
                                            </h4>
                                            <p className="event"><span>Parchased</span> your item</p>
                                            <span className="meta"> <i className="fal fa-watch"></i> 4 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="activity-action">
                                        <a href="activity.html">See all activity</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="search-icon" id="search-icon">
                            <i className="fal fa-search" ></i>
                            <div className="header-search-box">
                                <div className="search-form-group">
                                    <input type="text" placeholder="Search here..." />
                                    <button className="button search-button">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <a href="wallet.html" className="button navbar-button button-primary">
                            <span className="icon">
                                <i className="fal fa-link"></i>
                            </span>
                            Connect Wallet</a>
                    </div>
                </div>
            </nav>
           
            {/* <!-- Mobile Nav --> */}
            <div className="mobile-nav-one-wrapper">
                <div className="row">
                    <div className="mobile-nav-wrap">
                        <div className="mobile-nav">
                            <button type="button" className="close-nav">
                                <i className="fal fa-times-circle"></i>
                            </button>
                            <nav className="sidebar-nav">
                                <ul className="metismenu" id="mobile-menu">
                                    <li><a href="index.html">Home</a></li>
                                    <li>
                                        <a href="#" className="has-arrow">Explore</a>
                                        <ul className="sub-menu">
                                            <li><a href="explore.html">Items</a></li>
                                            <li><a href="item-details.html">Item Details</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="has-arrow">Author</a>
                                        <ul className="sub-menu">
                                            <li><a href="author.html">Author</a></li>
                                            <li><a href="wallet.html">Wallet</a></li>
                                            <li><a href="create.html">Create</a></li>
                                            <li><a href="login.html">Login</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="activity.html">Activity</a></li>
                                    <li>
                                        <a href="#" className="has-arrow">Blog</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="single-post.html">Single Blog</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                                <a href="#" className="button button-secondary mt-4 ml-3 d-inline-block">
                                    <i className="fal fa-link"></i>
                                    Connect Wallet
                                </a>
                            </nav>

                            <div className="action-bar mt-5">
                                <a href="mailto:nftspace@gmail.com"><i className="fal fa-envelope"></i>support@shape.com</a>
                                <a href=""><i className="fal fa-phone"></i>+000 000 000</a>
                                <a href="#"><i className="fal fa-map-marker-alt"></i>Sydney, Australia</a>
                                <div className="social-icons d-flex">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-slack"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-discord"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>
            <div id="hamburger" className="hamburger">
                <span><i className="fal fa-bars"></i></span>
            </div>
        </div>

    </header>
    </div>
  )
}

export default Header