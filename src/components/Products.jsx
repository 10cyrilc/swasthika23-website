import React from 'react'

function Products() {
    return (
        <section className="products" id="products">
            <div className="container">
                <h2>Events</h2>
                <p>There are two sets of Events <strong>Technical and Non-Techincal.</strong>
                    Those are</p>

                <ul className="list-portfolio">

                    <li>
                        <a href="https://27n.gg/assets/pdf/Dropem_platform.pdf" target="_blank"
                            className="portfolio-item">
                            <div className="portfolio-item-header">01</div>
                            <div className="portfolio-item-body">
                                <div className="portfolio-item-image">
                                    <img src="app/dropem_preview.png" alt="Dropem" />
                                    <div className="portfolio-item-overlay">
                                        <i className="icon">
                                            <svg>
                                                <use xlinkHref="#pixelated-circle"></use>
                                            </svg>
                                        </i>
                                        <div className="text">More</div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item-footer">
                                <h3>Dropem</h3>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://27n.gg/assets/pdf/27nerds.pdf" target="_blank" className="portfolio-item">
                            <div className="portfolio-item-header">02</div>
                            <div className="portfolio-item-body">
                                <div className="portfolio-item-image">
                                    <img src="app/bms_preview.png" alt="Dropem" />
                                    <div className="portfolio-item-overlay">
                                        <i className="icon">
                                            <svg>
                                                <use xlinkHref="#pixelated-circle"></use>
                                            </svg>
                                        </i>
                                        <div className="text">More</div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item-footer">
                                <h3>Banner Management System</h3>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </section>
    )
}

export default Products