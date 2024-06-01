import React from "react";
import "../CSS/ArtProfileTab.css";
import { Card, Col, Row } from "react-bootstrap";

const ArtProfileTab = ({ data }) => {
  return (
    <div className="">
      {console.log(data)}

      <h4 className="profile-h4">ArtProfileTab</h4>
      <div className="profile-div">
        <Card className="profile-card">
          <Row className="profile-p">
            <Col>Adhar Card Image: </Col>
            <Col>
              <img src={`http://localhost:5000${data?.ArtistAdharCardImage}`} />
            </Col>
          </Row>
          <Row className="profile-p">
            <Col> Handicap Certificate Image:</Col>
            <Col>
              <img
                src={`http://localhost:5000${data?.ArtistHandicapCertificateImage}`}
              />
            </Col>
          </Row>
        </Card>
        <Card className="profile-cards">
          <p className="profile-p">
            <span>Name:</span> {data?.ArtistFullName}
          </p>
          <p className="profile-p">
            <span>Address:</span>
            {data?.ArtistAddress}
          </p>
          <p className="profile-p">
            <span>City:</span> {data?.ArtistCity}
          </p>
          <p className="profile-p">
            <span>Mobile No: </span>
            {data?.ArtistMobileNo}
          </p>
          <p className="profile-p">
            <span>Email:</span> {data?.ArtistEmail}
          </p>
          <p className="profile-p">
            <span>State:</span> {data?.ArtistState}
          </p>
          <p className="profile-p">
            <span>Pin Code: </span>
            {data?.ArtistPincode}
          </p>
          <p className="profile-p">
            <span>Adhar Card No:</span> {data?.ArtistAdharCardNo}
          </p>
          <p className="profile-p">
            <span>IsVerified: </span>
            {data?.IsVerified}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ArtProfileTab;
