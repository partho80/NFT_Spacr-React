import React from 'react'

function TopArtist() {
  return (
      <div>
            <section className="top-artist-wrapper section-padding pt-0" data-aos="fade-up">
        <div className="container">
            <div className="section-head">
                <h2 className="heading-primary">Top <span className="gradient">Artist</span></h2>
                <div className="select-wrapper">
                    <select>
                        <option value="1">Weekly</option>
                        <option value="2">Monthly</option>
                        <option value="3">Yearly</option>
                    </select>
                </div>
            </div>
            <div className="artist-slider owl-carousel">
                {/* <!-- Slider Item --> */}
                <div className="artist-card">
                    <div className="card-thumb bg-cover" style={{ backgroundImage: `url('./assets/img/artists/cover1.png')` }}>
                    </div>
                    <div className="card-content">
                        <a href="author.html" className="artist-avatar-wrapper">
                            <div className="artist-avatar bg-cover"  style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <a href="author.html">
                            <h3 className="heading-tertiary artist-name">
                               Taylor Swift
                            </h3>
                        </a>
                        <div className="artist-info">
                            <p>5.6 <span>ETH</span></p>
                            <span className="net-items">40 Items</span>
                        </div>
                        <ul className="author-socials d-flex align-items-center justify-content-center gap-4">
                            <li>
                                <a href="#"><i className="fab fa-discord"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-slack"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </li>
                        </ul>   
                    </div>
                </div>
                {/* <!-- Slider Item --> */}
                <div className="artist-card">
                          <div className="card-thumb bg-cover" style={{ backgroundImage: `url('./assets/img/artists/cover2.png')` }}>
                    </div>
                    <div className="card-content">
                        <a href="#" className="artist-avatar-wrapper">
                            <div className="artist-avatar bg-cover"  style={{backgroundImage: `url('./assets/img/artists/artist2.jpg')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <a href="author.html">
                            <h3 className="heading-tertiary artist-name">
                               John Smith
                            </h3>
                        </a>
                        <div className="artist-info">
                            <p>4.5 <span>ETH</span></p>
                            <span className="net-items">29 Items</span>
                        </div>
                        <ul className="author-socials d-flex align-items-center justify-content-center gap-4">
                            <li>
                                <a href="#"><i className="fab fa-discord"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-slack"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </li>
                        </ul>   
                    </div>
                </div>
                {/* <!-- Slider Item --> */}
                <div className="artist-card">
                    <div className="card-thumb bg-cover" style={{ backgroundImage: `url('./assets/img/artists/cover3.png')` }}>
                    </div>
                    <div className="card-content">
                        <a href="#" className="artist-avatar-wrapper">
                            <div className="artist-avatar bg-cover" style={{backgroundImage: `url('./assets/img/artists/artist3.jpg')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <a href="author.html">
                            <h3 className="heading-tertiary artist-name">
                               Maria
                            </h3>
                        </a>
                        <div className="artist-info">
                            <p>4.5 <span>ETH</span></p>
                            <span className="net-items">27 Items</span>
                        </div>
                        <ul className="author-socials d-flex align-items-center justify-content-center gap-4">
                            <li>
                                <a href="#"><i className="fab fa-discord"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-slack"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </li>
                        </ul>   
                    </div>
                </div>
                {/* <!-- Slider Item --> */}
                <div className="artist-card">
                    <div className="card-thumb bg-cover"style={{ backgroundImage: `url('./assets/img/artists/cover4.png')` }}>
                    </div>
                    <div className="card-content">
                        <a href="#" className="artist-avatar-wrapper">
                            <div className="artist-avatar bg-cover" style={{backgroundImage: `url('./assets/img/artists/artist-sm1.png')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <a href="#">
                            <h3 className="heading-tertiary artist-name">
                               David Miller
                            </h3>
                        </a>
                        <div className="artist-info">
                            <p>4.5 <span>ETH</span></p>
                            <span className="net-items">23 Items</span>
                        </div>
                        <ul className="author-socials d-flex align-items-center justify-content-center gap-4">
                            <li>
                                <a href="#"><i className="fab fa-discord"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-slack"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </li>
                        </ul>   
                    </div>
                </div>
                {/* <!-- Slider Item --> */}
                <div className="artist-card">
                    <div className="card-thumb bg-cover"style={{ backgroundImage: `url('./assets/img/artists/cover1.png')` }}>
                    </div>
                    <div className="card-content">
                        <a href="author.html" className="artist-avatar-wrapper">
                            <div className="artist-avatar bg-cover"  style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <a href="author.html">
                            <h3 className="heading-tertiary artist-name">
                                Taylor Swift
                            </h3>
                        </a>
                        <div className="artist-info">
                            <p>5.6 <span>ETH</span></p>
                            <span className="net-items">40 Items</span>
                        </div>
                        <ul className="author-socials d-flex align-items-center justify-content-center gap-4">
                            <li>
                                <a href="#"><i className="fab fa-discord"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-slack"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </li>
                        </ul>   
                    </div>
                </div>
                {/* <!-- Slider Item --> */}
                <div className="artist-card">
                    <div className="card-thumb bg-cover" style={{ backgroundImage: `url('./assets/img/artists/cover2.png')` }}>
                    </div>
                    <div className="card-content">
                        <a href="#" className="artist-avatar-wrapper">
                            <div className="artist-avatar bg-cover"  style={{backgroundImage: `url('./assets/img/artists/artist2.jpg')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <a href="#">
                            <h3 className="heading-tertiary artist-name">
                               John Smith
                            </h3>
                        </a>
                        <div className="artist-info">
                            <p>4.5 <span>ETH</span></p>
                            <span className="net-items">29 Items</span>
                        </div>
                        <ul className="author-socials d-flex align-items-center justify-content-center gap-4">
                            <li>
                                <a href="#"><i className="fab fa-discord"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-slack"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </li>
                        </ul>   
                    </div>
                </div>
                {/* <!-- Slider Item --> */}
                <div className="artist-card">
                    <div className="card-thumb bg-cover" style={{ backgroundImage: `url('./assets/img/artists/cover3.png')` }}>
                    </div>
                    <div className="card-content">
                        <a href="#" className="artist-avatar-wrapper">
                            <div className="artist-avatar bg-cover"  style={{backgroundImage: `url('./assets/img/artists/artist3.jpg')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <a href="#">
                            <h3 className="heading-tertiary artist-name">
                               Mariia
                            </h3>
                        </a>
                        <div className="artist-info">
                            <p>4.5 <span>ETH</span></p>
                            <span className="net-items">27 Items</span>
                        </div>
                        <button type="button" className="button follow-btn">
                            <span className="icon">
                                <i className="fas fa-user-plus"></i>
                            </span>
                        </button>
                    </div>
                </div>
                {/* <!-- Slider Item --> */}
                <div className="artist-card">
                    <div className="card-thumb bg-cover" style={{ backgroundImage: `url('./assets/img/artists/cover4.png')` }}>
                    </div>
                    <div className="card-content">
                        <a href="#" className="artist-avatar-wrapper">
                            <div className="artist-avatar bg-cover" style={{backgroundImage: `url('./assets/img/artists/artist-sm1.png')`}}>
                                <span className="varified">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        </a>
                        <a href="#">
                            <h3 className="heading-tertiary artist-name">
                                David Miller
                            </h3>
                        </a>
                        <div className="artist-info">
                            <p>4.5 <span>ETH</span></p>
                            <span className="net-items">23 Items</span>
                        </div>
                        <ul className="author-socials d-flex align-items-center justify-content-center gap-4">
                            <li>
                                <a href="#"><i className="fab fa-discord"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-slack"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </li>
                        </ul>   
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default TopArtist