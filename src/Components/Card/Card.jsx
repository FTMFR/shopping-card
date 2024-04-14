import React from "react";
import "./card.css";
import { BsBag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Card = () => {
  return (
    // Add active class to show bag sidebar
    <aside className="bag-sidebar">
      <h3 className="bag-title">
        <span>
          <BsBag />
          Bag
        </span>

        <span>
          <AiOutlineClose className="close-icon" />
        </span>
      </h3>
      <div className="row bag-wrapper">
        <div className="col-12 mt-5">
          <div className="cart py-3 px-3">
            <div className="col-12 text-center">
              <img
                src="/images/1.jpg"
                alt="Product"
                className="card-img-top w-75"
              />
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <p className="card-text">Samsung A51</p>
              <p className="price">12000$</p>
              <br />
              <a href="/" className="btn btn-danger" >
                Buy
              </a>
              <a href="/" className="btn btn-outline-dark mt-3 text-capitalize">
                More Information
              </a>
              <p className="number">1</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Card;
