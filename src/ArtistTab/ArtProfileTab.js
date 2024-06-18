import React from "react";
import "../ArtistCSS/ArtProfileTab.css";
import { Card, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ArtProfileTab = () => {
  const { UserData } = useSelector((state) => state.user);
  return (
    <div className="">
      <h4 className="artprofiletab-h4">ArtProfileTab</h4>
      <div className="artprofiletab-div">
        <Card className="artprofiletab-card">
          <Row className="artprofiletab-p">
            <Col>Adhar Card Image: </Col>
            <Col>
              <img
                src={`http://localhost:5000${UserData?.ArtistProfile?.ArtistAdharCardImage}`}
              />
            </Col>
          </Row>
          <Row className="artprofiletab-p">
            <Col> Handicap Certificate Image:</Col>
            <Col>
              <img
                src={`http://localhost:5000${UserData?.ArtistProfile?.ArtistHandicapCertificateImage}`}
              />
            </Col>
          </Row>
        </Card>
        <Card className="artprofiletab-cards">
          <p className="artprofiletab-p">
            <span>Name:</span> {UserData?.ArtistProfile?.ArtistFullName}
          </p>
          <p className="artprofiletab-p">
            <span>Address:</span>
            {UserData?.ArtistProfile?.ArtistAddress}
          </p>
          <p className="artprofiletab-p">
            <span>City:</span> {UserData?.ArtistProfile?.ArtistCity}
          </p>
          <p className="artprofiletab-p">
            <span>Mobile No: </span>
            {UserData?.ArtistProfile?.ArtistMobileNo}
          </p>
          <p className="artprofiletab-p">
            <span>Email:</span> {UserData?.ArtistProfile?.ArtistEmail}
          </p>
          <p className="artprofiletab-p">
            <span>State:</span> {UserData?.ArtistProfile?.ArtistState}
          </p>
          <p className="artprofiletab-p">
            <span>Pin Code: </span>
            {UserData?.ArtistProfile?.ArtistPincode}
          </p>
          <p className="artprofiletab-p">
            <span>Adhar Card No:</span>{" "}
            {UserData?.ArtistProfile?.ArtistAdharCardNo}
          </p>
          <p className="artprofiletab-p">
            <span>IsVerified: </span>
            {UserData?.ArtistProfile?.IsVerified}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ArtProfileTab;
