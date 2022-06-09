import { useLocation } from "react-router-dom";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

const ProductItem = ()=>{
    const location = useLocation()
    console.log(location);
    return(
        <>
            <div className="card text-center" style={{width:"18rem"}}>
            <img src={location.state.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">{location.state.titre}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{location.state.contenu}</li>
                <li className="list-group-item">Date de parution: {location.state.date}</li>
            </ul>
            </div>
        </>
    )
}

export default ProductItem;