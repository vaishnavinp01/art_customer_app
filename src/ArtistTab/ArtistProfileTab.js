import React from "react";
import "../ArtistCSS/ArtistProfileTab.css";
import { Card, Col, Row } from "react-bootstrap";

const ArtProfileTab = ({ data }) => {
  return (
    <div className="">
      {console.log(data)}

      <h4 className="artprofiletab-h4">ArtProfileTab</h4>
      <div className="artprofiletab-div">
        <Card className="artprofiletab-card">
          <Row className="artprofiletab-p">
            <Col>Adhar Card Image: </Col>
            <Col>
              <img src={`http://localhost:5000${data?.ArtistAdharCardImage}`} />
            </Col>
          </Row>
          <Row className="artprofiletab-p">
            <Col> Handicap Certificate Image:</Col>
            <Col>
              <img
                src={`http://localhost:5000${data?.ArtistHandicapCertificateImage}`}
              />
            </Col>
          </Row>
        </Card>
        <Card className="artprofiletab-cards">
          <p className="artprofiletab-p">
            <span>Name:</span> {data?.ArtistFullName}
          </p>
          <p className="artprofiletab-p">
            <span>Address:</span>
            {data?.ArtistAddress}
          </p>
          <p className="artprofiletab-p">
            <span>City:</span> {data?.ArtistCity}
          </p>
          <p className="artprofiletab-p">
            <span>Mobile No: </span>
            {data?.ArtistMobileNo}
          </p>
          <p className="artprofiletab-p">
            <span>Email:</span> {data?.ArtistEmail}
          </p>
          <p className="artprofiletab-p">
            <span>State:</span> {data?.ArtistState}
          </p>
          <p className="artprofiletab-p">
            <span>Pin Code: </span>
            {data?.ArtistPincode}
          </p>
          <p className="artprofiletab-p">
            <span>Adhar Card No:</span> {data?.ArtistAdharCardNo}
          </p>
          <p className="artprofiletab-p">
            <span>IsVerified: </span>
            {data?.IsVerified}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ArtProfileTab;
