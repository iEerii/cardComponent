import Sedan from '../assets/icon-sedans.svg'
import Suvs from '../assets/icon-suvs.svg'
import Luxury from '../assets/icon-luxury.svg'

import { Vehicle } from "./Vehicle"
import '../styles/menu.css'

export const Menu = () => {
    return (
        <section className="vehicleContainer">
            <ul className='vehicleContainer__list'>
                <li>
                    <Vehicle 
                        bgColor='orange'
                        svg={ Sedan }
                        vehicleType='Sedans'
                        description='Choose a seddan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
                        fontColor='orangeText'
                    />
                </li>
                <li>
                    <Vehicle
                        bgColor='cyan'
                        svg={ Suvs }
                        vehicleType='Suvs'
                        description='Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.'
                        fontColor='cyanText'
                    />
                </li>
                <li>
                    <Vehicle 
                        bgColor='darkCyan'
                        svg={ Luxury }
                        vehicleType='Luxury'
                        description='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
                        fontColor='darkCyanText'
                    />
                </li>
            </ul>
        </section>
    )
}
