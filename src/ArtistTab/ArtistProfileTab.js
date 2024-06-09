import React from "react";
import "../ArtistCSS/ArtistProfileTab.css";
import { Card, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ArtProfileTab = ({data}) => {
  const artistData = useLocation().state;
  return (
    <div className="">
      <h4 className="artistprofiletab-h4">ArtProfileTab</h4>
      <div className="artistprofiletab-div">
        <Card className="artistprofiletab-card">
          <Row className="artistprofiletab-p">
            <Col>Adhar Card Image: </Col>
            <Col>
              <img src={`http://localhost:5000${artistData?.ArtistAdharCardImage}`} />
            </Col>
          </Row>
          <Row className="artistprofiletab-p">
            <Col> Handicap Certificate Image:</Col>
            <Col>
              <img
                // src={`http://localhost:5000${artistData?.ArtistHandicapCertificateImage}`}
              />
            </Col>
          </Row>
        </Card>
        <Card className="artistprofiletab-cards">
          <p className="artprofiletab-p">
            {/* <span>Name:</span> {artistData?.ArtistFullName} */}
          </p>
          <p className="artistprofiletab-p">
            <span>Address:</span>
            {/* {artistData.ArtistAddress} */}
          </p>
          <p className="artistprofiletab-p">
            {/* <span>City:</span> {artistData.ArtistCity} */}
          </p>
          <p className="artistprofiletab-p">
            <span>Mobile No: </span>
            {/* {artistData?.ArtistMobileNo} */}
          </p>
          <p className="artistprofiletab-p">
            {/* <span>Email:</span> {artistData.ArtistEmail} */}
          </p>
          <p className="artistprofiletab-p">
            {/* <span>State:</span> {artistData.ArtistState} */}
          </p>
          <p className="artistprofiletab-p">
            <span>Pin Code: </span>
            {/* {artistData.ArtistPincode} */}
          </p>
          <p className="artistprofiletab-p">
            {/* <span>Adhar Card No:</span> {artistData.ArtistAdharCardNo} */}
          </p>
          <p className="artistprofiletab-p">
            <span>IsVerified: </span>
            {/* {artistData.IsVerified} */}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ArtProfileTab;
