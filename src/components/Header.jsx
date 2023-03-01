import React from 'react'
import Logo from '../assets/images/favicon/favicon.ico'

function Header() {
    return (
        <header className="header sticky">
            <nav className="main-nav">
                <div className="logo-wrap">
                    <a className="logo" href="#home">
                        <img src={Logo} alt="Logo" width="50" />
                    </a>
                </div>
                <ul className="main-links">
                    <li>
                        <a href="#home">
                            Home
                            <i className="icon"><svg>
                                <use xlinkHref="#home"></use>
                            </svg></i>
                        </a>
                    </li>
                    <li>
                        <a href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#products">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#contact-us">
                            Contact us
                            <i className="icon"><svg>
                                <use xlinkHref="#mail"></use>
                            </svg></i>
                        </a>
                    </li>
                </ul>
                <ul className="social-links">
                    <li>
                        <a href="https://www.facebook.com/27nerds" target="_blank">
                            Facebook
                            <i className="icon"><svg>
                                <use xlinkHref="#facebook"></use>
                            </svg></i>
                        </a>
                    </li>
                    {/* <li>
                        <a href="https://www.linkedin.com/company/27-nerds" target="_blank">
                            <span>LinkedIn</span>
                            <i className="icon"><svg>
                                <use xlinkHref="#linkedin"></use>
                            </svg></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/27-nerds" target="_blank">
                            <span>Medium</span>
                            <i className="icon"><svg>
                                <use xlinkHref="#medium"></use>
                            </svg></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/27nerds" target="_blank">
                            <span>Dribbble</span>
                            <i className="icon"><svg>
                                <use xlinkHref="#dribbble"></use>
                            </svg></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/27NERDS" target="_blank">
                            <span>Behance</span>
                            <i className="icon"><svg>
                                <use xlinkHref="#behance"></use>
                            </svg></i>
                        </a>
                    </li> */}
                </ul>
            </nav>
            <button className="toggle-mobile-nav">
                <i className="icon"><svg>
                    <use xlinkHref="#menu"></use>
                </svg></i>
            </button>
        </header>
    )
}

export default Header