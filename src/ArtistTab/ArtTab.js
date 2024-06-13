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
        setAllArtWorks(result.data.data);
        console.log("DATA", result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h4 className="arttab-h4">ArtistId: </h4>
      {/* <span>{UserData?.ArtistProfile?.data?._id}</span> */}
      <Container>
        <Row>
          {/* {AllArtWorks.map((art) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card className="arttab-card">
                  <div className="arttab-image">
                    <Card.Img
                      className="arttab-img"
                      src={`http://localhost:5000${art.ArtWorkImage}`}
                    />
                  </div>
                  <Card.Body className="arttab-body">
                    <Card.Text className="arttab-text">
                      {art.ArtWorkName}
                    </Card.Text>
                    <div>
                      <Card.Subtitle className="arttab-text">
                        &#8377;{art.ArtWorkPrice}
                      </Card.Subtitle>
                    </div>
                    <Card.Text className="arttab-text">
                      {art.ArtWorkFrameSize}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })} */}
        </Row>
      </Container>
    </div>
  );
};

export default ArtTab;
