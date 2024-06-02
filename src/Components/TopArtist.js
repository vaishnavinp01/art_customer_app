import React, { useEffect, useState } from "react";
import "../CSS/TopArtist.css";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TopArtist = () => {
  // AllArtists
  const [AllArtists, setAllArtists] = useState([]);
  const navigator = useNavigate();
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
    <div>
      <h4 className="topartist-h4">TopArtist</h4>
      <Row>
        {AllArtists.map((art) => {
          return (
            <Col sm={12} md={8} lg={4}>
              <Card className="topartist-card">
                <div className="topartist-image">
                  <Card.Img
                    className="topartist-img"
                    src={`http://localhost:5000${art.ArtistProfile}`}
                  />
                </div>
                <Card.Body className="topartist-body">
                  <Card.Text className="topartist-text">
                    {art.ArtistFullName}
                  </Card.Text>
                  <Card.Text className="topartist-text">
                    {art.ArtistEmail}
                  </Card.Text>
                  <Card.Text className="topartist-text">
                    {art.ArtistCity}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <button
                    className="topartist-button"
                    onClick={() => navigator("/artists")}
                  >
                    <span className="topartist-span">»</span>
                  </button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default TopArtist;
