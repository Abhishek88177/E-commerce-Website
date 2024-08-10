import { Button } from "react-bootstrap";
import "../assets/css/banner.css";

const Banners = () => {
    return (
        <section className="banner container-fluid my-5">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 my-2">
                        <div className="banner-1 d-flex"
                        //  style={{backgroundImage:"https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/banner-2.png"}}
                        >
                            <div className="banner-section ms-5">
                                <p className="card-text-banner">Everyday Fresh & Clean with Our Products</p>
                                <button className="button-shopnow">Shop Now <i class="ms-1 fa fa-arrow-right"></i></button>
                            </div>
                            <img className="banner-image1 my-auto" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/products/1.png" />
                        </div>
                    </div>

                    <div className="col-md-4 my-2">
                        <div className="banner-image2 d-flex "
                        //  style={{backgroundImage:"https://nest-frontend.netlify.app/assets/imgs/banner/banner-1.png"}}
                        >
                            {/* <img className="banner-images" src="" width="100%" /> */}
                            <div className="banner-section ms-3">
                                <p className="card-text-banner">Make your Breakfast Healthy and Easy</p>
                                <button className="button-shopnow">Shop Now <i class="ms-1 fa fa-arrow-right"></i></button>
                            </div>
                            <img className="banner-image1 my-auto me-2" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/banner-3.png" />

                        </div>
                    </div>

                    <div className="col-md-4 my-2">
                        <div className="banner-image3 d-flex"
                        //  style={{backgroundImage:"https://nest-frontend.netlify.app/assets/imgs/banner/banner-1.png"}}
                        >
                            {/* <img className="banner-images" src="" width="100%" /> */}
                            <div className="banner-section ms-5">
                                <p className="card-text-banner">The best Organic Products Online</p>
                                <button className="button-shopnow">Shop Now <i class="ms-1 fa fa-arrow-right"></i></button>
                            </div>
                            <img className="banner-image1 my-auto me-4" src="https://jthemes.net/themes/f-html/naturix-html/assets/img/extra/banner-2.png" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banners;