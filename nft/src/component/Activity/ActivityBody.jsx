import React from 'react'

function ActivityBody() {
  return (
      <div>
            <section className="activity-wrapper section-padding">
            <div className="container activity-filter-tab">
                <div className="row gy-4 gy-md-0">
                    <div className="col-md-4">
                        <div className="activity-filter">
                            <h4>Filter your activity</h4>
                            <ul className="skltbs-tab-group filter-items">
                                <li className="skltbs-tab-item filter-item">
                                    <button className="skltbs-tab">All</button>
                                  </li>
                                <li className="skltbs-tab-item filter-item">
                                  <button className="skltbs-tab">Sales</button>
                                </li>
                                <li className="skltbs-tab-item filter-item">
                                    <button className="skltbs-tab">Liked</button>
                                </li>
                                <li className="skltbs-tab-item filter-item">
                                    <button className="skltbs-tab">Follow</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="activity-box skltbs-panel-group">
                            <div className="skltbs-panel">
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                            style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">Maria Miller</a>
                                        </h4>
                                        <p className="event">Started <span>following</span> you</p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 2 hours ago</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-user"></i>
                                    </div>
                                </div>
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                            style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">Taylor Swift</a>
                                        </h4>
                                        <p className="event"><span>Liked</span> your <a href="./item-details.html">item</a></p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 2 hours ago</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-heart"></i>
                                    </div>
                                </div>
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                           style={{backgroundImage: `url('./assets/img/artists/artist2.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">John Lee</a>
                                        </h4>
                                        <p className="event"><span>Parchased</span> your <a href="item-details.html">item</a> for 0.5ETH</p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 7/9/2022 at 12:00pm</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-shopping-bag"></i>
                                    </div>
                                </div>
                                 {/* <!-- Card item --> */}
                                 <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                            style={{backgroundImage: `url('./assets/img/artists/artist3.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">Maria Miller</a>
                                        </h4>
                                        <p className="event">Started <span>following</span> you</p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 2 hours ago</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-user"></i>
                                    </div>
                                </div>
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                           style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">Taylor Swift</a>
                                        </h4>
                                        <p className="event"><span>Liked</span> your <a href="./item-details.html">item</a></p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 2 hours ago</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-heart"></i>
                                    </div>
                                </div>
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                          style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">John Lee</a>
                                        </h4>
                                        <p className="event"><span>Parchased</span> your <a href="item-details.html">item</a> for 0.5ETH</p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 7/9/2022 at 12:00pm</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-shopping-bag"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="skltbs-panel">
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                           style={{backgroundImage: `url('./assets/img/artists/artist3.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">Maria Miller</a>
                                        </h4>
                                        <p className="event"><span>Parchased</span> your <a href="item-details.html">item</a> for 0.5ETH</p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 7/9/2022 at 12:00pm</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-shopping-bag"></i>
                                    </div>
                                </div>
                                 {/* <!-- Card item --> */}
                                 <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                           style={{backgroundImage: `url('./assets/img/artists/artist2.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">John Doe</a>
                                        </h4>
                                        <p className="event"><span>Parchased</span> your <a href="item-details.html">item</a> for 0.3ETH</p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 7/9/2022 at 12:00pm</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-shopping-bag"></i>
                                    </div>
                                </div>
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                           style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">Maria Miller</a>
                                        </h4>
                                        <p className="event"><span>Parchased</span> your <a href="item-details.html">item</a> for 0.5ETH</p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 7/5/2022 at 12:00pm</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-shopping-bag"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="skltbs-panel">
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                          style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">Taylor Swift</a>
                                        </h4>
                                        <p className="event"><span>Liked</span> your <a href="./item-details.html">item</a></p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 2 hours ago</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-heart"></i>
                                    </div>
                                </div>
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                        style={{backgroundImage: `url('./assets/img/artists/artist2.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">John Doe</a>
                                        </h4>
                                        <p className="event"><span>Liked</span> your <a href="./item-details.html">item</a></p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 7/9/2022 at 12:00pm</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-heart"></i>
                                    </div>
                                </div>
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                          style={{backgroundImage: `url('./assets/img/artists/artist3.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">Maria Miller</a>
                                        </h4>
                                        <p className="event"><span>Liked</span> your <a href="./item-details.html">item</a></p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 7/5/2022 at 12:00pm</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-heart"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="skltbs-panel">
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                            style={{backgroundImage: `url('./assets/img/artists/artist1.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">Taylor Swift</a>
                                        </h4>
                                        <p className="event">Started your following you</p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 2 hours ago</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-user"></i>
                                    </div>
                                </div>
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                           style={{backgroundImage: `url('./assets/img/artists/artist2.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">John Doe</a>
                                        </h4>
                                        <p className="event">Started your following you</p>
                                        <span className="meta"> <i className="fal fa-user"></i> 7/9/2022 at 12:00pm</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-heart"></i>
                                    </div>
                                </div>
                                {/* <!-- Card item --> */}
                                <div className="activity-card">
                                    <a href="author.html">
                                        <div
                                            className="card-avatar bg-cover"
                                          style={{backgroundImage: `url('./assets/img/artists/artist3.jpg')`}}
                                        ></div>
                                    </a>
                                    <div className="card-info">
                                        <h4 className="name">
                                            <a href="author.html">Maria Miller</a>
                                        </h4>
                                        <p className="event">Started your following you</p>
                                        <span className="meta"> <i className="fal fa-watch"></i> 4/6/2022 at 8:00pm</span>
                                    </div>
                                    <div className="activity-event">
                                        <i className="fal fa-user"></i>
                                    </div>
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

export default ActivityBody