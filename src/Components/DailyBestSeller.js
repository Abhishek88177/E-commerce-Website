import { useEffect, useState } from "react";
import "../assets/css/category.css"
import ProductCard from "./ProductCard";

const DailyBestSeller = () =>{

    const [listItems , setListItems] = useState([]);

    const sortItems = (protype)=>{
        if(protype == 'All'){
            setListItems(productList);
        }
        else{
            setListItems(productList.filter(item => item.type === protype));
        }
    }

    
    const productList = [
        {name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Snack',rating:'3',price:'28.9'},
        {name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Snack',rating:'3',price:'28.9'},
        {name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Snack',rating:'3',price:'28.9'},
        {name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Snack',rating:'3',price:'28.9'},
    ]

   

    return(
        <>
            <div className="container-fluid category-field mt-5 mb-3">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-7">
                            <h2 className="text-category">DailyBestSeller</h2>
                        </div>

                        <div className="col-md-5">
                            <ul className="category-list">
                                <li className="category-list-text">Featured</li>
                                <li className="category-list-text">Coffes & Teas</li>
                                <li className="category-list-text">Pet Foods</li>
                                <li className="category-list-text">Vegetables</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className="section-one " style={{backgroundColor:'#ccfcf5',width:'100%',backgroundSize:'cover',borderRadius:'15px'}}>
                                <h1 className="text-left mx-5 py-5" >Bring<br /> nature<br /> into your<br /> home</h1>
                                <button className="button-shopnow mx-5 my-5">Shop Now <i class="ms-1 fa fa-arrow-right"></i></button>

                            </div>
                        </div>

                        <div className="col-md-9">
                        <div className="row mx-auto">
                
                {
                    productList.map((items,index)=>(
                        <ProductCard name={items.name} image={items.image} type={items.type}
                        rating={items.rating} price={items.price}
                        />
                    ))
                }
                </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid my-3">
                <div className="col-md-12" style={{backgroundColor: '#ECFFEC',width:'100%',backgroundSize:'cover',borderRadius:'20px'}}>
                    <div className="row">
                        <div className="col-md-6 pt-5 ps-5">
                            <h1 className="ms-5 mt-5">Stay home & get your daily <br />needs from our shop</h1>
                            <p className="ms-5 my-4">Start You'r Daily Shopping with Nest Mart</p>
                        </div>

                        <div className="col-md-6">
                            <img className="mt-5" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/feature.png" width="80%" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DailyBestSeller;