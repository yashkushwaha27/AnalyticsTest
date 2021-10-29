import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { removeData, setData } from "../redux/actions/countActions";
import { Image } from "semantic-ui-react";

const api = require("../network/apiCalls");

const SelectedProduct = () => {
  const { id } = useParams();
  const dispath = useDispatch();

  const productById = useSelector((product) => product.products.productById);

  const getDataByID = async (p_id) => {
    const product = await api.getDataByID(p_id);
    console.log("product by id -> ", product);
    dispath(setData(product));
  };

  useEffect(() => {
    getDataByID(id);
    return () => {
      dispath(removeData());
    };
  }, []);

  return (
    <>
      <div class="topnav">
        <a class="active" href="/">
          Product List
        </a>
        <a href="#">Selected Product : {productById?.title} </a>
      </div>
      <div
        className="ui placeholder segment"
        style={{ width: "80%", marginLeft: "10%" }}
      >
        <div
          className="ui two column stackable center aligned grid"
          style={{
            marginTop: "2.5%",
            marginBottom: "2.5%",
          }}
        >
          {productById ? (
            <div className="middle aligned row">
              <div className="column lp" style={{ paddingLeft: "100px" }}>
                <Image src={productById?.image} size="large" />
              </div>
              <div className="column rp">
                <h1>{productById?.title}</h1>
                <h2>
                  <a className="ui teal tag label">${productById?.price}</a>
                </h2>
                <h3 className="ui brown block header">
                  {productById?.category}
                </h3>
                <p>{productById?.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          ) : (
            <h1>Data loading.....</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectedProduct;
