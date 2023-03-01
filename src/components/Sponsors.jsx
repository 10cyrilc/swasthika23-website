import React from 'react'
import { sponsorData } from '../data/sponsors'

function Sponsors() {
    return (
        <section className="we-work-with">
            <div className="container">
                <h2>Our Sponsors</h2>
                <ul className="logos-list">
                    {
                        sponsorData.map((item) => {
                            return < Sponsor key={item.id} sponsor={item} />
                        })
                    }

                </ul>
            </div>
        </section>
    )
}

const Sponsor = ({ sponsor }) => {
    return (
        <li key={sponsor.id}>
            <a className="logos-list-item" target="_blank">
                <img src={sponsor.image} alt={sponsor.name} style={{ "height": "80px" }} />
            </a>
        </li>
    )

}

export default Sponsors