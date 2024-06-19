import React from "react";
import "../ArtWorkCSS/ArtistProfileTab.css";
import { Card, Col, Row } from "react-bootstrap";

const ArtistProfileTab = ({ data }) => {

  return (
    <div>
      {console.log(data)}

      <h4 className="artistprofiletab-h4">ArtistProfileTab</h4>
      <div className="artistprofiletab-div">
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
          <p className="artistprofiletab-pp">
            <span className="artistprofiletab-span">Name: </span>
            {data?.ArtistFullName}
          </p>
          <p className="artistprofiletab-pp">
            <span className="artistprofiletab-span">Address: </span>
            {data?.ArtistAddress}
          </p>
          <p className="artistprofiletab-pp">
            <span className="artistprofiletab-span">City: </span>
            {data?.ArtistCity}
          </p>
          <p className="artistprofiletab-pp">
            <span className="artistprofiletab-span">Mobile No: </span>
            {data?.ArtistMobileNo}
          </p>
          <p className="artistprofiletab-pp">
            <span className="artistprofiletab-span">Email: </span>
            {data?.ArtistEmail}
          </p>
          <p className="artistprofiletab-pp">
            <span className="artistprofiletab-span">State: </span>
            {data?.ArtistState}
          </p>
          <p className="artistprofiletab-pp">
            <span className="artistprofiletab-span">Pin Code: </span>
            {data?.ArtistPinCode} 429345
          </p>
          <p className="artistprofiletab-pp">
            <span className="artistprofiletab-span">Adhar Card No:</span>
            {data?.ArtistAdharCardNo}
          </p>
          <p className="artistprofiletab-pp">
            <span className="artistprofiletab-span">IsVerified: </span>
            {data?.IsVerified} true
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ArtistProfileTab;
