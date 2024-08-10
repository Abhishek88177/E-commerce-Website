
import { useState } from "react";
import "../assets/css/product.css";
import ProductCard from "./ProductCard";
import Slider from "react-slick";

const ProductMain = () =>{

    const productList = [
        {id: 1,name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',quantity:2,image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Snack',rating:'3',price:'28.9'},
        {id: 2,name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',quantity:2,image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Snack',rating:'3',price:'28.9'},
        {id: 3,name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',quantity:2,image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Snack',rating:'3',price:'28.9'},
        {id: 4,name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',quantity:2,image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Snack',rating:'3',price:'28.9'},
        {id: 5,name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',quantity:2,image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Snack',rating:'3',price:'28.9'},
        {id: 6,name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',quantity:2,image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Snack',rating:'3',price:'28.9'},
        {id: 7,name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',quantity:2,image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Food',rating:'3',price:'28.9'},
        {id: 8,name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',quantity:2,image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Food',rating:'3',price:'28.9'},
        {id: 9,name:'Seeds of Change Organic Quinoa, Brown, & Red Rice',quantity:2,image : "https://i.pinimg.com/736x/8f/62/69/8f6269bdaf67e8005855e3911695a59c.jpg",type:'Food',rating:'3',price:'28.9'},

    ]

    const [listItems , setListItems] = useState(productList);

    const sortItems = (protype)=>{
        if(protype == 'All'){
            setListItems(productList);
        }
        else{
            setListItems(productList.filter(item => item.type === protype));
        }
    }


    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows : false, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    }

    return(
        <>
              <div className="container-fluid category-field my-3">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-5">
                            <h2 className="text-category">Popular Product</h2>
                        </div>

                        <div className="col-md-7">
                            <ul className="category-list">
                                <li className="category-list-text" onClick={()=>sortItems('All')}>All</li>
                                <li className="category-list-text" onClick={()=>sortItems('Snack')}>Coffes & Teas</li>
                                <li className="category-list-text" onClick={()=>sortItems('Food')}>Pet Foods</li>
                                <li className="category-list-text">Vegetables</li>
                                <li className="category-list-text">Coffes & Teas</li>
                                <li className="category-list-text">Pet Foods</li>
                                <li className="category-list-text">Vegetables</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container ">
                <div className="col-md-12 ">
                    {/* <div className="row mx-auto d-flex"> */}

                <div className="slider-container">
      <Slider {...settings}>
      {
                    listItems.map((items,index)=>(
                        <ProductCard name={items.name} image={items.image} type={items.type}
                        rating={items.rating} price={items.price}
                        />
                    ))
                }
      </Slider>
    </div>     
                
            {/* </div> */}
            </div>
            </div>
        </>
    )
}

export default ProductMain;