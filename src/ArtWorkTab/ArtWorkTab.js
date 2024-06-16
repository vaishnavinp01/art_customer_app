import React, { useEffect, useState } from "react";
import "../ArtWorkCSS/ArtWorkTab.css";
import { Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import axios from "axios";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const ArtWorkTab = () => {
  // AllArtWorks
  const [AllArtWorks, setAllArtWorks] = useState([]);
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
  // Update
  const [showUpdate, setshowUpdate] = useState(false);
  const [Price, setPrice] = useState("");
  const doUpdate = () => {
    let artworkIdUpdate = {
      artworkid: selectedArtWorks._id,
      ArtWorkPrice: Number(Price),
    };
    axios
      .put("http://localhost:5000/artapi/updateartwork", artworkIdUpdate)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Delete
  const [showDelete, setshowDelete] = useState(false);
  const [selectedArtWorks, setselectedArtWorks] = useState([]);
  const doDelete = () => {
    let artworkIdDelete = {
      artworkid: selectedArtWorks._id,
    };
    axios
      .delete("http://localhost:5000/artapi/deleteartwork", {
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
      {/* <h4 className="artworktab-h4">TopArtist</h4> */}
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
                      Name: {art.ArtWorkName}
                    </Card.Text>
                    <Card.Text className="artworktab-text">
                      Type: {art.ArtWorkType}
                    </Card.Text>
                    <Card.Text className="artworktab-text">
                      Price: {art.ArtWorkPrice}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="artworktab-footer">
                    <GrUpdate
                      className="artworktab-update"
                      onClick={() => {
                        setshowUpdate(true);
                        setselectedArtWorks(art);
                      }}
                    >
                      Update
                    </GrUpdate>
                    <MdDelete
                      className="artworktab-delete"
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
      {/* Update */}
      <Modal show={showUpdate} onHide={() => setshowUpdate(false)}>
        <Modal.Header className="artworktab-header" closeButton>
          Update ArtWorks
        </Modal.Header>
        <Modal.Body className="artworktab-bodys">
          <Container className="artworktab-container">
            <div className="artworktab-div">
              <h5 className="artworktab-h5">ArtWork Price:</h5>
              <input
                type="number"
                className="artworktab-input"
                inline
                onClick={(e) => setPrice(e.target.value)}
              />
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer className="artworktab-footers">
          <button onClick={() => doUpdate()}>Yes</button>
          <button onClick={() => setshowUpdate(false)}>No</button>
        </Modal.Footer>
      </Modal>
      {/* Delete */}
      <Modal show={showDelete} onHide={() => setshowDelete(false)}>
        <Modal.Header closeButton>Delete ArtWorks</Modal.Header>
        <Modal.Body>
          <h4>Are you sure you want to delete this artworks?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => doDelete()}>Yes</button>
          <button onClick={() => setshowDelete(false)}>No</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ArtWorkTab;
