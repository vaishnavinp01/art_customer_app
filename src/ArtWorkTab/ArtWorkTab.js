import React, { useEffect, useState } from "react";
import "../ArtWorkCSS/ArtistTab.css";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import axios from "axios";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const ArtWorkTab = () => {
  // AllArtists
  const [AllArtWorks, setAllArtWorks] = useState([]);
  const [selectedArtWorks, setselectedArtWorks] = useState([]);
  const [showDelete, setshowDelete] = useState(false);
  // AllArtists
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

  // Delete
  const doDelete = () => {
    let artworkIdDelete = {
      artworkid: AllArtWorks._id,
    };
    axios
      .delete("http://localhost:5000/api/deleteartwork", {
        data: artworkIdDelete,
      })
      .then((result) => {
        console.log(result);
        setshowDelete(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ marginTop: "5px" }}>
      {/* <h4 className="artisttab-h4">TopArtist</h4> */}
      <Container>
        <Row>
          {AllArtWorks.map((art) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card className="artisttab-card">
                  <div className="artisttab-image">
                    <Card.Img
                      className="artisttab-img"
                      src={`http://localhost:5000${art.ArtWorkImage}`}
                    />
                  </div>
                  <Card.Body className="artisttab-body">
                    <Card.Text className="artisttab-text">
                      Name: {art.ArtWorkName}
                    </Card.Text>
                    <Card.Text className="artisttab-text">
                      Type: {art.ArtWorkType}
                    </Card.Text>
                    <Card.Text className="artisttab-text">
                      Price: {art.ArtWorkPrice}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="artisttab-footer">
                    <GrUpdate className="artisttab-update">Update</GrUpdate>
                    <MdDelete
                      className="artisttab-delete"
                      onClick={() => {
                        setshowDelete(true);
                        setselectedArtWorks(art);
                      }}
                    >
                      Delete
                    </MdDelete>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Modal show={showDelete} onHide={setshowDelete(false)}>
        <Modal.Header closeButton>Delete ArtWorks</Modal.Header>
        <Modal.Body>
          <h4>Are you sure you want to delete this artworks?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={doDelete()}>Yes</button>
          <button onClick={setshowDelete(false)}>No</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ArtWorkTab;
