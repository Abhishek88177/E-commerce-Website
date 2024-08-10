
import React, { useState } from "react";
import "../assets/css/category.css";
import FeaturedCatCard from "./FeaturedCatCard";

const Category = () =>{

    const categoriesList =  [
        { id: 1, name: 'Vegetable', image: "https://jthemes.net/themes/f-html/naturix-html/assets/img/products/1.png" ,quantity :60, bgcolor:"#FFF3FF"},
        { id: 2, name: 'Strawberry', image: "https://pngimg.com/uploads/strawberry/strawberry_PNG89.png" ,quantity :59, bgcolor:"#ECFFEC"},
        { id: 3, name: 'PineApple', image: "https://icons.veryicon.com/png/o/food--drinks/vegetables-and-fruits/pineapple-38.png" ,quantity :40, bgcolor:"#FEEFEA"},
        { id: 4, name: 'Custard apple', image: "https://i.pinimg.com/originals/ac/b4/96/acb496f933f6bb9f1db4e98547cd4721.png" ,quantity :12, bgcolor:"#FFF3EB"},
        { id: 5, name: 'Coffe & Tea', image: "https://static.vecteezy.com/system/resources/previews/024/062/653/original/splashing-tea-or-coffee-from-white-cup-3d-icon-png.png" ,quantity :98, bgcolor:"#FFF3FF"},
        { id: 6, name: 'Burger', image: "https://pngfre.com/wp-content/uploads/Burger-45.png" ,quantity :1, bgcolor:"#F2FCE4"},
        { id: 7, name: 'Custard apple', image: "https://i.pinimg.com/originals/ac/b4/96/acb496f933f6bb9f1db4e98547cd4721.png" ,quantity :12, bgcolor:"#FFF3EB"},
        { id: 8, name: 'Coffe & Tea', image: "https://static.vecteezy.com/system/resources/previews/024/062/653/original/splashing-tea-or-coffee-from-white-cup-3d-icon-png.png" ,quantity :98, bgcolor:"#FFF3FF"},
        { id: 9, name: 'Burger', image: "https://pngfre.com/wp-content/uploads/Burger-45.png" ,quantity :1, bgcolor:"#F2FCE4"},
        { id: 10, name: 'Burger', image: "https://pngfre.com/wp-content/uploads/Burger-45.png" ,quantity :1, bgcolor:"#F2FCE4"},
        { id: 1, name: 'Vegetable', image: "https://jthemes.net/themes/f-html/naturix-html/assets/img/products/1.png" ,quantity :60, bgcolor:"#FFF3FF"},
        { id: 2, name: 'Strawberry', image: "https://pngimg.com/uploads/strawberry/strawberry_PNG89.png" ,quantity :59, bgcolor:"#ECFFEC"},
        { id: 3, name: 'PineApple', image: "https://icons.veryicon.com/png/o/food--drinks/vegetables-and-fruits/pineapple-38.png" ,quantity :40, bgcolor:"#FEEFEA"},
        { id: 4, name: 'Custard apple', image: "https://i.pinimg.com/originals/ac/b4/96/acb496f933f6bb9f1db4e98547cd4721.png" ,quantity :12, bgcolor:"#FFF3EB"},
        { id: 5, name: 'Coffe & Tea', image: "https://static.vecteezy.com/system/resources/previews/024/062/653/original/splashing-tea-or-coffee-from-white-cup-3d-icon-png.png" ,quantity :98, bgcolor:"#FFF3FF"},
        { id: 6, name: 'Burger', image: "https://pngfre.com/wp-content/uploads/Burger-45.png" ,quantity :1, bgcolor:"#F2FCE4"},
        { id: 7, name: 'Custard apple', image: "https://i.pinimg.com/originals/ac/b4/96/acb496f933f6bb9f1db4e98547cd4721.png" ,quantity :12, bgcolor:"#FFF3EB"},
        { id: 8, name: 'Coffe & Tea', image: "https://static.vecteezy.com/system/resources/previews/024/062/653/original/splashing-tea-or-coffee-from-white-cup-3d-icon-png.png" ,quantity :98, bgcolor:"#FFF3FF"},
        { id: 9, name: 'Burger', image: "https://pngfre.com/wp-content/uploads/Burger-45.png" ,quantity :1, bgcolor:"#F2FCE4"}, 
   
      ];

    // const [categoriesList , setCategoriesList] = useState([]);

    // const getAllCategory = () =>{
        
    // }

    return(
        <>
            <div className="container-fluid category-field my-3">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="text-category">Featured Categories</h2>
                        </div>

                        <div className="col-md-5">
                            <ul className="category-list">
                                <li className="category-list-text">Cake & Milk</li>
                                <li className="category-list-text">Coffes & Teas</li>
                                <li className="category-list-text">Pet Foods</li>
                                <li className="category-list-text">Vegetables</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        <div className="container-fluid">
            <div className="cat-items-list mx-1 my-3">
            {
                categoriesList.map((item,index)=>(
                    <div className="card-cat-main mx-2 my-1 px-3" style={{backgroundColor : item.bgcolor,width:'130px'}}>
                        <FeaturedCatCard name={item.name} image={item.image} quantity={item.quantity}/>
            </div>
                ))
            }
            </div>
            </div>
        </>
    )
}

export default Category;