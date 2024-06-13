import React from "react";
import "../ArtWorkCSS/ArtWorkProfileTab.css";
import { Card, Col, Row } from "react-bootstrap";

const ArtistProfileTab = ({ data }) => {
  return (
    <div className="">
      {console.log(data)}

      <h4 className="artistprofiletab-h4">ArtProfileTab</h4>
      {/* <div className="artistprofiletab-div">
        <Card className="artistprofiletab-card">
          <Row className="artistprofiletab-p">
            <Col>Adhar Card Image: </Col>
            <Col>
              <img src={`http://localhost:5000${data?.ArtistAdharCardImage}`} />
            </Col>
          </Row>
          <Row className="artistprofiletab-p">
            <Col> Handicap Certificate Image:</Col>
            <Col>
              <img
                src={`http://localhost:5000${data?.ArtistHandicapCertificateImage}`}
              />
            </Col>
          </Row>
        </Card>
        <Card className="artistprofiletab-cards">
          <p className="artistprofiletab-p">
            <span>Name:</span> {data?.ArtistFullName}
          </p>
          <p className="artistprofiletab-p">
            <span>Address:</span>
            {data?.ArtistAddress}
          </p>
          <p className="artistprofiletab-p">
            <span>City:</span> {data?.ArtistCity}
          </p>
          <p className="artistprofiletab-p">
            <span>Mobile No: </span>
            {data?.ArtistMobileNo}
          </p>
          <p className="artistprofiletab-p">
            <span>Email:</span> {data?.ArtistEmail}
          </p>
          <p className="artistprofiletab-p">
            <span>State:</span> {data?.ArtistState}
          </p>
          <p className="artistprofiletab-p">
            <span>Pin Code: </span>
            {data?.ArtistPincode}
          </p>
          <p className="artistprofiletab-p">
            <span>Adhar Card No:</span> {data?.ArtistAdharCardNo}
          </p>
          <p className="artistprofiletab-p">
            <span>IsVerified: </span>
            {data?.IsVerified}
          </p>
        </Card>
      </div> */}
    </div>
  );
};

export default ArtistProfileTab;
