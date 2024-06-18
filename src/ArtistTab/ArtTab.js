import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../ArtistCSS/ArtTab.css";
import { useSelector } from "react-redux";

const ArtTab = () => {
  // AllArtWorks
  const [AllArtWorks, setAllArtWorks] = useState([]);
  const { UserData } = useSelector((state) => state.user);

  // AllArtWorks
  useEffect(() => {
    const artIdData = {
      ArtistId: UserData?.ArtistProfile?._id,
    };
    axios
      .post("http://localhost:5000/artapi/getartworksbyartistid", artIdData)
      .then((result) => {
        setAllArtWorks(result.data);
        console.log("DATA", result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h4 className="arttab-h4">ArtistId: </h4>
        <span style={{ marginBottom: "10px" }}>
          {UserData?.ArtistProfile?._id}
        </span>
      </div>
      <Container>
        <Row>
          {AllArtWorks.map((art) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card.Img
                  src={`http://localhost:5000${art.ArtWorkImage}`}
                ></Card.Img>
                <Card>
                  <Card.Body>
                    <Card.Text>{art.ArtWorkName}</Card.Text>
                    <Card.Text>&#8377;</Card.Text><Card.Text>{art.ArtWorkPrice}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ArtTab;
