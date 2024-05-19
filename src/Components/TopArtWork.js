import React, { useEffect, useState } from "react";
import "../CSS/TopArtWork.css";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";
import { addItem } from "../reduxwork/CartSlice";
import { useDispatch } from "react-redux";

const TopArtWork = () => {
  // AllArtWorks
  const [AllArtWorks, setAllArtWorks] = useState([]);

  const dispatcher = useDispatch([]);

  // AllArtWorks
  useEffect(() => {
    axios
      .get("http://localhost:5000/artapi/allartworks")
      .then((result) => {
        setAllArtWorks(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h4 className="topartwork-h4">TopArtWork</h4>
      <Row>
        {AllArtWorks.map((art) => {
          return (
            <Col sm={12} md={8} lg={4}>
              <Card className="topartwork-card">
                <div className="topimg">
                <Card.Img
                  className="topartwork-img"
                  src={`http://localhost:5000${art.ArtWorkImage}`}
                />
                </div>
               
                <Card.Body className="topartwork-body">
                  <Card.Text className="topartwork-text">
                    {art.ArtWorkName}
                  </Card.Text>
                  <div>
                    <Card.Text className="topartwork-text">
                      &#8377;{art.ArtWorkPrice}
                    </Card.Text>
                  </div>
                  <Card.Text className="topartwork-text">
                    {art.ArtWorkFrameSize}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>
                    <Button
                      className="topartwork-button"
                      onClick={() => {
                        dispatcher(addItem(art));
                        alert("Added to Cart");
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default TopArtWork;
