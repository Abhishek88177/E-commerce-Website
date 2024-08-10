
import "../assets/css/category.css";


const FeaturedCatCard = (props) =>{
    return(
        <>
                <div className="card-cat-image text-center">
                    <img src={props.image} width="70px" />
                </div>
                <div className="card-cat-text">
                <p className="name-of-cat">{props.name}</p>
                <p className="items-text">72 items</p>
                </div>
                </>
    )
}

export default FeaturedCatCard;