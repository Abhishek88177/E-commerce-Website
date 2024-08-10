import { useContext } from "react";
import LoginContext from "../context/LoginContext";

const ProductCard = (props) => {

    const {addToCart} = useContext(LoginContext)

    const rating = props.rating; 
    const filledStars = '⭐'.repeat(rating);
    const emptyStars = '✰'.repeat(5 - rating);

    const stars = filledStars + emptyStars;


    return (
        <>
            <div className="border bg-white rounded px-2 m-2" style={{ fontFamily: "Cambria, Georgia, serif" ,width:'13rem'}}>

                <div>
                    <img src={props.image} className="rounded img-fluid"/>
                </div>

                <div className="cardtext pt-2 px-1">
                    <p style={{fontSize:'13px',fontWeight:'100'}}>{props.type}</p>
                    <h5 className="proname">{props.name}</h5>
                    <p className="prorating">{stars} (4.0)</p>
                    <div className="d-flex mt-3 py-1">
                    <p><b className="h5" style={{color:'#3BB77E'}}>${props.price}</b> | 10% Off</p>
                    <button className="btn btn-success btn-sm px-3 ms-2" onClick={()=>addToCart(props)}>Add</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCard;