import React from 'react'

function Contact() {
    return (
        <section className="contact-us contact-us-section" id="contact-us">
            <div className="container">
                <form className="form form-contact-us" action="https://formspree.io/" method="POST">
                    <header className="form-header">
                        <h2>Get Connected</h2>
                    </header>
                    <div className="form-body">
                        <div className="form-content">
                            <div className="row row-with-2-columns">
                                <div className="col">
                                    <div className="text-input">
                                        <input type="text" placeholder="Name" id="name" name="name" required />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="text-input">
                                        <input type="email" placeholder="Email" id="email" name="email" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="text-input">
                                        <textarea name="question" id="question" cols={30} rows={10} placeholder="Message" required defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="form-footer">
                            <div className="button-wrap">
                                <button className="button-primary full-width" type="submit">Send</button>
                            </div>
                        </footer>
                    </div>
                </form>
            </div>
            <Rabbits />
        </section>
    )
}

function Rabbits() {
    return (
        <div className="rabbits-wrap">

            <div className="contact-rabbit-1 rabbit index-1 draggable" style={{ touchAction: 'none' }}>
                <i className="icon">
                    <svg>
                        <use xlinkHref="#rabbit" />
                    </svg>
                </i>
            </div>
            <div className="contact-rabbit-2 rabbit index-1 draggable" style={{ touchAction: 'none' }}>
                <i className="icon">
                    <svg>
                        <use xlinkHref="#rabbit" />
                    </svg>
                </i>
            </div>
            <div className="contact-rabbit-3 rabbit index-1 draggable" style={{ touchAction: 'none' }}>
                <i className="icon">
                    <svg>
                        <use xlinkHref="#rabbit" />
                    </svg>
                </i>
            </div>
            <div className="contact-rabbit-4 rabbit index-1 draggable" style={{ touchAction: 'none' }}>
                <i className="icon">
                    <svg>
                        <use xlinkHref="#rabbit" />
                    </svg>
                </i>
            </div>
            <div className="contact-rabbit-5 rabbit index-1 draggable" style={{ touchAction: 'none' }}>
                <i className="icon">
                    <svg>
                        <use xlinkHref="#rabbit" />
                    </svg>
                </i>
            </div>
            <div className="contact-rabbit-6 rabbit index-1 draggable" style={{ touchAction: 'none' }}>
                <i className="icon">
                    <svg>
                        <use xlinkHref="#rabbit" />
                    </svg>
                </i>
            </div>
            <div className="contact-rabbit-7 rabbit index-1 draggable" style={{ touchAction: 'none' }}>
                <i className="icon">
                    <svg>
                        <use xlinkHref="#rabbit" />
                    </svg>
                </i>
            </div>
            <div className="contact-rabbit-8 rabbit index-1 draggable" style={{ touchAction: 'none' }}>
                <i className="icon">
                    <svg>
                        <use xlinkHref="#rabbit" />
                    </svg>
                </i>
            </div>
            <div className="contact-rabbit-9 rabbit index-1 draggable" style={{ touchAction: 'none' }}>
                <i className="icon">
                    <svg>
                        <use xlinkHref="#rabbit" />
                    </svg>
                </i>
            </div>
            <div className="contact-rabbit-10 rabbit index-1 draggable" style={{ touchAction: 'none' }}>
                <i className="icon">
                    <svg>
                        <use xlinkHref="#rabbit" />
                    </svg>
                </i>
            </div>
        </div>
    )
}

export default Contact