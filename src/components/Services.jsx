import React from 'react'

function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
                <h2>Services</h2>
                <ul className="services-list">

                    <li className="services-list-item">
                        <div className="services-list-item-title">
                            <i className="icon"><svg>
                                <use xlinkHref="#pc"></use>
                            </svg></i>
                            <h3>Software Solutions <br />Development</h3>
                        </div>
                        <div className="services-list-item-text">
                            <p>Our experience in the development of tools and features ensure
                                the smooth and flawless operation of eSports platforms. Due to our
                                banner management systems and extensions for YouTube and Twitch, you'll
                                be able to analyze your statistics, track chats, and even organize live
                                eSports tournaments.</p>
                        </div>
                        <div className="services-list-item-border"
                            style={{ "transform": "translate3d(100px, 0.00001px, 0.00001px)" }}></div>
                        <i className="icon tablet-and-less"><svg>
                            <use xlinkHref="#chevron-down"></use>
                        </svg></i>
                    </li>
                    <li className="services-list-item">
                        <div className="services-list-item-title">
                            <i className="icon"><svg>
                                <use xlinkHref="#cat"></use>
                            </svg></i>
                            <h3>Esports Visual <br />Design</h3>
                        </div>
                        <div className="services-list-item-text">
                            <p>Do you need a custom attractive design for your website or
                                app? Our best designers will create an eye-catching interface,
                                recognizable logo, and unique UI elements for your project.</p>
                        </div>
                        <div className="services-list-item-border"
                            style={{ "transform": "translate3d(100px, 0.00001px, 0.00001px)" }}></div>
                        <i className="icon tablet-and-less"><svg>
                            <use xlinkHref="#chevron-down"></use>
                        </svg></i>
                    </li>
                    <li className="services-list-item">
                        <div className="services-list-item-title">
                            <i className="icon"><svg>
                                <use xlinkHref="#stats"></use>
                            </svg></i>
                            <h3>Ingame Data <br />Parsing</h3>
                        </div>
                        <div className="services-list-item-text">
                            <p>27 Nerds provide you with robust data parsing apps for DOTA 2
                                and CS: GO. These applications will help you analyze your gaming skills
                                and share the statistics with your audience. By the way, it's also a
                                great way to get the information necessary to become a pro gamer!</p>
                        </div>
                        <div className="services-list-item-border"
                            style={{ "transform": "translate3d(100px, 0.00001px, 0.00001px)" }}></div>
                        <i className="icon tablet-and-less"><svg>
                            <use xlinkHref="#chevron-down"></use>
                        </svg></i>
                    </li>
                    <li className="services-list-item">
                        <div className="services-list-item-title">
                            <i className="icon"><svg>
                                <use xlinkHref="#stream"></use>
                            </svg></i>
                            <h3>Custom solution <br />for Broadcasting &amp; Streaming</h3>
                        </div>
                        <div className="services-list-item-text">
                            <p>We offer custom solutions for Twitch, YouTube, and Facebook
                                streamers. If you want to ensure high-quality broadcasting and
                                impressive interaction with your audience, 27 Nerds is your ideal
                                option. Our team will help you create a unique design, GIFs, and other
                                elements to enhance your personal brand.</p>
                        </div>
                        <i className="icon tablet-and-less"><svg>
                            <use xlinkHref="#chevron-down"></use>
                        </svg></i>
                    </li>

                </ul>

            </div>
        </section>
    )
}

export default Services