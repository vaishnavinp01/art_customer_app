import React from "react";
import "../ArtistCSS/ArtistProfileTab.css";
import { Card, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ArtProfileTab = ({data}) => {
  const artistData = useLocation().state;
  return (
    <div className="">
      <h4 className="artprofiletab-h4">ArtProfileTab</h4>
      <div className="artprofiletab-div">
        <Card className="artprofiletab-card">
          <Row className="artprofiletab-p">
            <Col>Adhar Card Image: </Col>
            <Col>
              {/* <img src={`http://localhost:5000${artistData?.ArtistAdharCardImage}`} /> */}
            </Col>
          </Row>
          <Row className="artprofiletab-p">
            <Col> Handicap Certificate Image:</Col>
            <Col>
              <img
                // src={`http://localhost:5000${artistData?.ArtistHandicapCertificateImage}`}
              />
            </Col>
          </Row>
        </Card>
        <Card className="artprofiletab-cards">
          <p className="artprofiletab-p">
            {/* <span>Name:</span> {artistData?.ArtistFullName} */}
          </p>
          <p className="artprofiletab-p">
            <span>Address:</span>
            {/* {artistData.ArtistAddress} */}
          </p>
          <p className="artprofiletab-p">
            {/* <span>City:</span> {artistData.ArtistCity} */}
          </p>
          <p className="artprofiletab-p">
            <span>Mobile No: </span>
            {/* {artistData?.ArtistMobileNo} */}
          </p>
          <p className="artprofiletab-p">
            {/* <span>Email:</span> {artistData.ArtistEmail} */}
          </p>
          <p className="artprofiletab-p">
            {/* <span>State:</span> {artistData.ArtistState} */}
          </p>
          <p className="artprofiletab-p">
            <span>Pin Code: </span>
            {/* {artistData.ArtistPincode} */}
          </p>
          <p className="artprofiletab-p">
            {/* <span>Adhar Card No:</span> {artistData.ArtistAdharCardNo} */}
          </p>
          <p className="artprofiletab-p">
            <span>IsVerified: </span>
            {/* {artistData.IsVerified} */}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ArtProfileTab;
