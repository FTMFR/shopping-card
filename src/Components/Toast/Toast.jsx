import React, { useContext } from "react";
import ProductsContext from "../../Contexts/ProductContext";

const Toast = () => {
  const contextData = useContext(ProductsContext);

  return (
    <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
      <div
        className={`toast ${
          contextData.isShowToast ? "show" : ""
        } align-items-center text-white bg-primary`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn btn-close btn-close-white ms-3"
            onClick={() => contextData.setIsShowToast(false)}
          ></button>
          <div className="toast-body">
            محصول با موفقیت به سبد خرید اضافه گردید
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
