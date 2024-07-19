import '../styles/vehicle.css'

export const Vehicle = ({ svg, vehicleType, description, bgColor, fontColor}) => {
    return (
        <div className={`autoContainer ${ bgColor }`} >
            <div className="autoContainer__type">
                <img className="autoContainer__type-img" src={ svg } alt="" />
                <h1 className="autoContainer__type-tittle">{ vehicleType }</h1>
                <p className="autoContainer__type-par">{ description }</p>
            </div>
            <div className="autoContainer__button"> 
                <button className={`${ fontColor }`}>
                    Learn More
                </button>
            </div>
        </div>
    )
}
