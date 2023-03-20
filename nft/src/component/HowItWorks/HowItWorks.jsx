import React from 'react'

function HowItWorks() {
  return (
      <div>
           <section className="how-works-wrapper section-padding pt-0">
        <div className="container">
            <div className="section-head">
                <h2 className="heading-primary">How It <span className="gradient">Works</span></h2>
            </div>
            <div className="row gy-4 gy-lg-0">
                <div className="col-lg-3 col-sm-6">
                    <div className="how-works-card" data-aos="fade-up">
                        <span className="card-icon">
                            <i className="fal fa-wallet"></i>
                        </span>
                        <h3 className="card-heading heading-tertiary">Connect up wallet</h3>
                        <p className="body-text card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus, deserunt.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="how-works-card" data-aos="fade-down">
                        <span className="card-icon">
                            <i className="fal fa-layer-group"></i>
                        </span>
                        <h3 className="card-heading heading-tertiary">Create collections</h3>
                        <p className="body-text card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus, deserunt.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="how-works-card" data-aos="fade-up">
                        <span className="card-icon">
                            <i className="fal fa-plus-hexagon"></i>
                        </span>
                        <h3 className="card-heading heading-tertiary">Add NFTs</h3>
                        <p className="body-text card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus, deserunt.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="how-works-card" data-aos="fade-down">
                        <span className="card-icon">
                            <i className="fal fa-store"></i>
                        </span>
                        <h3 className="card-heading heading-tertiary">List for sale</h3>
                        <p className="body-text card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus, deserunt.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default HowItWorks