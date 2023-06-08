import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <>
        <div className="main">
            <div className="four column row inside-main">
                {products.map((product) => {
                    const { id, title, image, price, category } = product;
                    const chandedTitle = title.slice(0, 20)+"...";
                    return(
                        <div className="four wide column each-card hoverImages "key={id}>
                        <Link to={`/product/${id}`}>
                          <div className=" ">
                            <div className="">
                              <div className="">
                                <img src={image} alt={title} height={250} width={250}/>
                              </div>
                              <div className="content">
                                <div className="title">{chandedTitle}</div>
                                <div className="price">$ {price}</div>
                                <div className="meta">{category}</div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                })}    
            </div>
        </div>        
                                    
    </>
  );
};

export default ProductComponent;
