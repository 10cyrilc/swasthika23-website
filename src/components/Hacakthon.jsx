import React from 'react'

function Hacakthon() {
    return (
        <section className="vacancies">
            <div className="container">
                <div className="promo-title">
                    <ul className="list-flames">
                        <li>
                            <i className="icon"><svg>
                                <use xlinkHref="#flame"></use>
                            </svg></i>
                            <i className="icon flame-animate flame-animate-1"><svg>
                                <use xlinkHref="#flame-filled"></use>
                            </svg></i>
                        </li>
                        <li>
                            <i className="icon"><svg>
                                <use xlinkHref="#flame"></use>
                            </svg></i>
                            <i className="icon flame-animate flame-animate-2"><svg>
                                <use xlinkHref="#flame-filled"></use>
                            </svg></i>
                        </li>
                        <li>
                            <i className="icon"><svg>
                                <use xlinkHref="#flame"></use>
                            </svg></i>
                            <i className="icon flame-animate flame-animate-3"><svg>
                                <use xlinkHref="#flame-filled"></use>
                            </svg></i>
                        </li>
                    </ul>
                    <h2>FlagShip Event <br />Hackathon</h2>
                    <div className="button-wrap">
                        <a href="https://codex.10cyrilc.me" target="_blank"
                            className="button-secondary full-width">Register Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hacakthon