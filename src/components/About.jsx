import React from 'react'
import Gif1 from '../assets/gifs/game-gif-1.gif'
import Gif2 from '../assets/gifs/game-gif-2.gif'
import Gif3 from '../assets/gifs/game-gif-3.gif'
import Gif4 from '../assets/gifs/game-gif-4.gif'
import Gif5 from '../assets/gifs/game-gif-5.gif'
import Gif6 from '../assets/gifs/game-gif-6.gif'
import Gif7 from '../assets/gifs/game-gif-7.gif'
import Gif8 from '../assets/gifs/game-gif-8.gif'
import Gif9 from '../assets/gifs/game-gif-9.gif'

function About() {
    return (
        <div><section className="esports-section">
            <div className="container">
                <p className="esports-text">
                    {/* <span className="esports-words">
                        <span className="esports-word esports-word-1"
                            style={{ "transform": "translate3d(-550px, 674px, 0.00001px) scale(1.5)" }}>Swastika</span>
                        <span className="esports-word esports-word-2"
                            style={{ "transform": "translate3d(-20px, 449px, 0.00001px) scale(2)" }}>Swastika</span>
                        <span className="esports-word esports-word-3"
                            style={{ "transform": "translate3d(500px, 472px, 0.00001px) scale(1.8)" }}>Swastika</span>
                        <span className="esports-word esports-word-4"
                            style={{ "transform": "translate3d(40px, 674px, 0.00001px) scale(2.7)" }}>Swastika</span>
                    </span> */}
                    - The National Level Techno-Cultural Fest of Mar Baselios Christian College
                    of
                    Engineering and Technology, Peermade.Swastika offers a unique platform for the
                    participants from across the country to compete and showcase their technical skills, along with
                    the celebration of their talents.
                </p>
            </div>

            <ul className="esports-images">
                <li className="draggable" style={{ "left": "1228.66px", "top": "765.375px", "touchAction": "none" }}><img
                    src={Gif1} alt="Esports preview gif 1" /></li>
                <li className="draggable" style={{ "left": "818.411px", "top": "1866.74px", "touchAction": "none" }}><img
                    src={Gif2} alt="Esports preview gif 2" /></li>
                <li className="draggable" style={{ "left": "1046.2px", "top": "1565.9px", "touchAction": "none" }}><img
                    src={Gif3} alt="Esports preview gif 3" /></li>
                <li className="draggable keep-on-tablet" style={{ "left": "416.682px", "top": "814.224px", "touchAction": "none" }}><img
                    src={Gif4} alt="Esports preview gif 4" /></li>
                <li className="draggable" style={{ "left": "1535.94px", "top": "1478.3px", "touchAction": "none" }}><img
                    src={Gif5} alt="Esports preview gif 5" /></li>
                <li className="draggable" style={{ "left": "1281.19px", "top": "1773.2px", "touchAction": "none" }}><img
                    src={Gif6} alt="Esports preview gif 6" /></li>
                <li className="draggable keep-on-tablet" style={{ "left": "309.438px", "top": "1150.53px", "touchAction": "none" }}><img
                    src={Gif7} alt="Esports preview gif 7" /></li>
                <li className="draggable" style={{ "left": "1274.93px", "top": "1211.03px", "touchAction": "none" }}><img
                    src={Gif8} alt="Esports preview gif 8" /></li>
                <li className="draggable keep-on-tablet" style={{ "left": "93.8802px", "top": "1625.83px", "touchAction": "none" }}><img
                    src={Gif9} alt="Esports preview gif 9" /></li>
            </ul>

            {/* <div className="logo-glitched">
                <i className="icon"><svg>
                    <use xlinkHref="#logo-glitched"></use>
                </svg></i>
            </div> */}

        </section></div>
    )
}

export default About