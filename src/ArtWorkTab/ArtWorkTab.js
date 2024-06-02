import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../CSS/ArtWorkTab.css";
import { useSelector } from "react-redux";

const ArtWorkTab = () => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h4 className="artworktab-h4">ArtistId: </h4>
      <span>{UserData._id}</span>
      <Container>
        <Row>
          {AllArtWorks.map((art) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card className="artworktab-card">
                  <div className="artworktab-image">
                    <Card.Img
                      className="artworktab-img"
                      src={`http://localhost:5000${art.ArtWorkImage}`}
                    />
                  </div>
                  <Card.Body className="artworktab-body">
                    <Card.Text className="artworktab-text">
                      {art.ArtWorkName}
                    </Card.Text>
                    <div>
                      <Card.Subtitle className="artworktab-text">
                        &#8377;{art.ArtWorkPrice}
                      </Card.Subtitle>
                    </div>
                    <Card.Text className="artworktab-text">
                      {art.ArtWorkFrameSize}
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
