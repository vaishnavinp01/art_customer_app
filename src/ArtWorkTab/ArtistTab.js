import React, { useEffect, useState } from "react";
import "../ArtWorkCSS/ArtistTab.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const ArtWorkTab = () => {
  // AllArtists
  const [AllArtists, setAllArtists] = useState([]);
  // AllArtists
  useEffect(() => {
    axios
      .get("http://localhost:5000/artapi/allartists")
      .then((result) => {
        setAllArtists(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ marginTop: "5px" }}>
      {/* <h4 className="artisttab-h4">TopArtist</h4> */}
      <Container>
        <Row>
          {AllArtists.map((art) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card className="artisttab-card">
                  <div className="artisttab-image">
                    <Card.Img
                      className="artisttab-img"
                      src={`http://localhost:5000${art.ArtistProfile}`}
                    />
                  </div>
                  <Card.Body className="artisttab-body">
                    <Card.Text className="artisttab-text">
                      {art.ArtistFullName}
                    </Card.Text>
                    <Card.Text className="artisttab-text">
                      {art.ArtistEmail}
                    </Card.Text>
                    <Card.Text className="artisttab-text">
                      {art.ArtistCity}
                    </Card.Text>
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

export default ArtWorkTab;
