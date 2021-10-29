import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardGroup, Icon, Image } from "semantic-ui-react";
import { getData } from "../redux/actions/countActions";

const api = require("../network/apiCalls");

const ProductPage = () => {
  const data = useSelector((product) => product.products.products);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const product_list = await api.getData();
    dispatch(getData(product_list));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div class="topnav">
        <a class="active" href="#">
          Product List
        </a>
      </div>
      <div
        style={{ marginTop: "10px", marginLeft: "10px", marginRight: "10px" }}
      >
        <CardGroup itemsPerRow={5}>
          {data ? (
            data.map((m) => (
              <Card key={m.id}>
                <Card.Content>
                  <div style={{ height: "270px" }}>
                    <Image src={m.image} size="small" />
                  </div>

                  <Card.Description>
                    <Card.Header>
                      <div style={{ height: "60px", overflowY: "scroll" }}>
                        {/* <a onClick={() => console.log("key -> ", m.id)}> */}
                        <Link
                          to={`product/${m.id}`}
                          onClick={() => console.log(m.id)}
                        >
                          {m.title}
                        </Link>
                        {/* </a> */}
                      </div>
                    </Card.Header>
                    <Card.Header>$ {m.price}</Card.Header>
                    <Card.Meta>
                      <div
                        style={{
                          height: "200px",
                          overflowY: "scroll",
                          padding: "15px 15px 15px 15px",
                        }}
                      >
                        {m.description}
                      </div>
                    </Card.Meta>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Header>
                    <Icon name="star" />
                    {m.rating.rate} / 5
                  </Card.Header>
                </Card.Content>
              </Card>
            ))
          ) : (
            <h1>Data loading.....</h1>
          )}
        </CardGroup>
      </div>
    </>
  );
};

export default ProductPage;
