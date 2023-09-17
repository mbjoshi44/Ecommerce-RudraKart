import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  setSelectedProducts,
  deleteProducts,
} from "../redux/action/productAction";
import { setCartData } from "../redux/action/cartAction";

const Products = () => {
  const [cartStatus, setCartStatus] = useState(false);
  const [loader, setLoader] = useState(false);
  const temp = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);
  const cartData = useSelector((state) => state.cart.cartList);
  const { id } = temp;
  console.log(product);

  const getData = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    dispatch(setSelectedProducts(data));
    setLoader(false);
  };

  const checkCartStatus = () => {
    let temp =
      cartData &&
      cartData.map((ele) => {
        return ele.id;
      });
    if (temp.indexOf(product.id) > -1) {
      setCartStatus(true);
    } else {
      setCartStatus(false);
    }
  };
  useEffect(() => {
    checkCartStatus();
  }, [cartData]);

  useEffect(() => {
    setLoader(true);
    getData(id);
  }, [id]);

  const addToCartFn = (product) => {
    dispatch(setCartData(product));
  };
  const byeNow = (product) => {
    dispatch(setCartData(product));
    navigate("/cart");
  };
  useEffect(() => {
    return () => {
      dispatch(deleteProducts());
    };
  }, []);
  return (
    <>
      <div className="row mt-5">
        {!loader ? (
          <>
            <div className="col-md-6 ">
              <img
                src={product?.image}
                alt="Product pic"
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {product.category}
              </h4>

              <h1 className="display-5">{product?.title}</h1>
              <p className="lead fw-bolder">
                Rating {product?.rating.rate} <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">
                <i className="fas fa-rupee-sign"></i>
                {product?.price}
              </h3>
              <p className="lead">{product?.description}</p>

              {cartStatus ? (
                <Link to="/cart">
                  <button className="btn btn-outline-dark">Go To Cart</button>
                </Link>
              ) : (
                <button
                  className="btn btn-outline-dark"
                  onClick={() => addToCartFn(product)}
                >
                  Add To cart
                </button>
              )}

              <button
                className="btn btn-dark ms-2 px-3 py-2"
                onClick={() => byeNow(product)}
              >
                Buy Now
              </button>
            </div>
            {/*   */}
          </>
        ) : (
          <>
            <div className="col-12">
              <h2>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                  alt="loading"
                />
              </h2>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Products;
