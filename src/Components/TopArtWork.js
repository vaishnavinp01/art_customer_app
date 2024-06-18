import React, { useEffect, useState } from "react";
import "../CSS/TopArtWork.css";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";
import { addItem } from "../reduxwork/CartSlice";
import { useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import { FaRegCheckCircle, FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const TopArtWork = () => {
  // AllArtWorks
  const [AllArtWorks, setAllArtWorks] = useState([]);
  const dispatcher = useDispatch([]);

  // Snackbar
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
            <Col sm={12} md={9} lg={3}>
              <Card className="topartwork-card">
                <div className="topartwork-image">
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
                    <button
                      className="topartwork-button"
                      onClick={() => {
                        dispatcher(addItem(art));
                        handleClick();
                      }}
                    >
                      <FaShoppingCart />
                      Add to Cart
                    </button>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      anchorOrigin={{ vertical: "top", horizontal: "top" }}
                    >
                      <Alert
                        onClose={handleClose}
                        severity="success"
                        icon={<FaRegCheckCircle fontSize="inherit" />}
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleClose}
                          >
                            <IoMdClose fontSize="inherit" />
                          </IconButton>
                        }
                      >
                        Added to Cart
                      </Alert>
                    </Snackbar>
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
