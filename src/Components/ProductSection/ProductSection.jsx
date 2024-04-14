import React, { useContext } from "react";
import "./productSection.css";
import ProductsContext from "../../Contexts/ProductContext";

const ProductSection = ({ title, infos }) => {
  const contextData = useContext(ProductsContext);

  return (
    <>
      {contextData.allProducts.map((productSection) => (
        <div className="row justify-content-center mt-5">
          <h3 className="text-center">{productSection.title}</h3>
          {productSection.infos.map((product) => (
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5">
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img
                    src="/images/1.jpg"
                    alt="Product"
                    className="card-img-top w-75"
                  />
                </div>
                <div className="card-body text-center">
                  <p className="card-text">{product.title}</p>
                  <p className="price">{product.price}$</p>
                  <br />
                  <a
                    href="/"
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.preventDefault();
                      contextData.setIsShowToast(true);
                      setTimeout(() => {
                        contextData.setIsShowToast(false);
                      }, 3000);
                      let newUserCardProduct = {
                        id: contextData.userCart.length + 1,
                        title: product.title,
                        price: product.price,
                        count: 1,
                      };

                      contextData.setUserCart((prevProducts) => [
                        ...prevProducts,
                        newUserCardProduct,
                      ]);
                    }}
                  >
                    Add to card
                  </a>
                  <a
                    href="/"
                    className="btn btn-outline-dark mt-3 text-capitalize"
                  >
                    More Information
                  </a>
                  <p className="number mt-3">Number: {product.number}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ProductSection;
