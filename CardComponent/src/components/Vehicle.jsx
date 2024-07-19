import '../styles/vehicle.css'

export const Vehicle = ({ svg, vehicleType, description, bgColor, bRadiusLeft}) => {
    return (
        <div className={`autoContainer ${ bgColor }`} >
            <div className="autoContainer__type">
                <picture className="autoContainer__type-img">
                    <img src={ svg } alt="" />
                </picture>
                <h1 className="autoContainer__type-tittle">{ vehicleType }</h1>
                <p className="autoContainer__type-par">{ description }</p>
            </div>
            <div className="autoContainer__button"> 
                <button>
                    Learn More
                </button>
            </div>
        </div>
    )
}
