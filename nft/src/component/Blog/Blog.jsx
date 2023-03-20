import React from 'react'

function Blog() {
  return (
      <div>
           <section className="blog-wrapper section-padding pt-0">
        <div className="container">
            <div className="section-head">
                <h2 className="heading-primary">Lates <span className="gradient">Blog</span></h2>
            </div>

            <div className="row gy-4 gy-lg-0" data-aos="fade-up">
                {/* <!-- Blog item --> */}
                <div className="col-lg-4 col-sm-6">
                    <div className="blog-card">
                              <div className="blog-thumb bg-cover" style={{ backgroundImage: `url('./assets/img/arts/art-4.png')` }}>
                        </div>
                        <div className="blog-content">
                            <ul className="blog-meta">
                                <li className="meta-item">
                                    <span className="icon">
                                        <i className="fal fa-calendar-alt"></i>
                                    </span>
                                    April 3, 2022
                                </li>
                                <li className="meta-item">
                                    <span className="icon">
                                        <i className="fal fa-comment-alt"></i>
                                    </span>
                                    10 Comments
                                </li>
                                <li className="meta-item">
                                    <span className="icon">
                                        <i className="fal fa-share-alt"></i>
                                    </span>
                                    5 Shares
                                </li>
                            </ul>
                            <h3 className="blog-title">
                                <a href="single-blog.html"> What Is An NFT </a>
                            </h3>
                            <p className="blog-desc">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
                                sapiente!
                            </p>
                            <a href="single-blog.html" className="button"><i className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                {/* <!-- Blog item --> */}
                <div className="col-lg-4 col-sm-6">
                    <div className="blog-card">
                        <div className="blog-thumb bg-cover"style={{ backgroundImage: `url('./assets/img/arts/art-2.png')` }}>
                        </div>
                        <div className="blog-content">
                            <ul className="blog-meta">
                                <li className="meta-item">
                                    <span className="icon">
                                        <i className="fal fa-calendar-alt"></i>
                                    </span>
                                    April 5, 2022
                                </li>
                                <li className="meta-item">
                                    <span className="icon">
                                        <i className="fal fa-comment-alt"></i>
                                    </span>
                                    15 Comments
                                </li>
                                <li className="meta-item">
                                    <span className="icon">
                                        <i className="fal fa-share-alt"></i>
                                    </span>
                                    8 Shares
                                </li>
                            </ul>
                            <h3 className="blog-title">
                                <a href="single-blog.html"> How to connect wallet </a>
                            </h3>
                            <p className="blog-desc">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
                                sapiente!
                            </p>
                            <a href="single-blog.html" className="button"><i className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                {/* <!-- Blog item --> */}
                <div className="col-lg-4 col-sm-6">
                    <div className="blog-card">
                        <div className="blog-thumb bg-cover" style={{ backgroundImage: `url('./assets/img/arts/art-6.png')` }}>
                        </div>
                        <div className="blog-content">
                            <ul className="blog-meta">
                                <li className="meta-item">
                                    <span className="icon">
                                        <i className="fal fa-calendar-alt"></i>
                                    </span>
                                    April 5, 2022
                                </li>
                                <li className="meta-item">
                                    <span className="icon">
                                        <i className="fal fa-comment-alt"></i>
                                    </span>
                                    15 Comments
                                </li>
                                <li className="meta-item">
                                    <span className="icon">
                                        <i className="fal fa-share-alt"></i>
                                    </span>
                                    8 Shares
                                </li>
                            </ul>
                            <h3 className="blog-title">
                                <a href="single-blog.html"> How sell your NFTs </a>
                            </h3>
                            <p className="blog-desc">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
                                sapiente!
                            </p>
                            <a href="single-blog.html" className="button"><i className="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Blog