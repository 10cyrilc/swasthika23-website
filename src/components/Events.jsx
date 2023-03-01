import React from 'react'
import { eventData } from '../data/events'

export default function Events() {
    return (
        <section className="board">
            <div className="container">
                <h2>Major Events</h2>

                <div className="splide is-initialized splide--slide splide--ltr splide--draggable is-active"
                    id="splide01" role="region" aria-roledescription="carousel">

                    <div className="splide__arrows splide__arrows--ltr">
                        <button className="splide__arrow splide__arrow--prev" aria-label="Previous slide"
                            aria-controls="splide01-track">
                            <i className="icon"><svg>
                                <use xlinkHref="#chevron-left"></use>
                            </svg></i>
                        </button>
                        <button className="splide__arrow splide__arrow--next" aria-label="Next slide"
                            aria-controls="splide01-track">
                            <i className="icon"><svg>
                                <use xlinkHref="#chevron-right"></use>
                            </svg></i>
                        </button>
                    </div>

                    <div className="splide__track splide__track--slide splide__track--ltr splide__track--draggable"
                        id="splide01-track" style={{
                            "paddingLeft": "0px; padding-right: 0px", "ariaLive": "polite",
                            "ariaAtomic": "true", "ariaBusy": "false"
                        }}>
                        <ul className="board-list splide__list" id="splide01-list" role="presentation"
                            style={{ "transform": "translateX(-1501.5px)" }}>
                            {eventData.map((item) => {
                                return <Event key={item.id} event={item} />
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Event = ({ event }) => {
    let splin_id = "splide01-slide" + event.id
    let label = event.id + " of " + eventData.length
    return (
        <li key={event.id} className="splide__slide" id={splin_id} role="group"
            aria-roledescription="slide" aria-label={label}
            style={{ "marginRight": "48px", "width": "324px", "ariaHidden": "true" }}>
            <div className="board-list-item" tabIndex="0">
                <div className="board-list-item-image">
                    <img src={event.image1} alt={event.name} />
                    <img className="on-hover" src={event.image2}
                        alt={event.name} />
                    <span className="high-five" tabIndex="0">
                        <span className="high-five-circle"></span>
                        {/* <svg className="hand-icon">
                            <use xlinkHref="#awaits_high_five"></use>
                        </svg> */}
                        <svg className="dashes-icon" xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 44.2 31.7" style={{ "enableBackground": "new 0 0 44.2 31.7" }}
                            xmlSpace="preserve">
                            <line
                                style={{ "fill": "none", "stroke": "#000000", "strokeWidth": 3, "strokeMiterlimit": 10 }}
                                x1="42.7" y1="20" x2="42.7" y2="0"></line>
                            <line
                                style={{ "fill": "none", "stroke": "#000000", "strokeWidth": 3, "strokeMiterlimit": 10 }}
                                x1="27.2" y1="22.7" x2="20.3" y2="4"></line>
                            <line
                                style={{ "fill": "none", "stroke": "#000000", "strokeWidth": 3, "strokeMiterlimit": 10 }}
                                x1="16.3" y1="30.6" x2="1" y2="17.7"></line>
                        </svg>
                    </span>
                </div>
                <h4 className="board-list-item-name"
                    style={{ "transform": "translate3d(0.00001px, -120px, 0.00001px)" }}>{event.name}</h4>
                <h4 className="board-list-item-name board-list-item-name--outlined"
                    style={{ "transform": "translate3d(0.00001px, -120px, 0.00001px)" }}>{event.name}</h4>
                {/* <div className="board-list-item-position"
                    style={{ "transform": "translate3d(0.00001px, -120px, 0.00001px)" }}>CEO</div> */}
            </div>
        </li>
    )
}