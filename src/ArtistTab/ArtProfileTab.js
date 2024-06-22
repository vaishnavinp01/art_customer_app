import React from "react";
import "../ArtistCSS/ArtProfileTab.css";
import { Card, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import img1 from '../images/aadhar/adhar_card.png'
import img2 from '../images/handicapped/Hadicapped_Certificate.jpeg'
const ArtProfileTab = () => {
  const { UserData } = useSelector((state) => state.user);
  // {UserData?.ArtistProfile?.ArtistFullName}
  return (
    <div className="">
      <h4 className="artprofiletab-h4">ArtProfileTab</h4>
      <div className="artprofiletab-div">
        <Card className="artprofiletab-card">
          <Row className="artprofiletab-p">
            <Col>Adhar Card Image: </Col>
            <Col>
              <img 
              // src={img1}
                src={`http://localhost:5000${UserData?.ArtistProfile?.ArtistAdharCardImage}`}
              />
            </Col>
          </Row>
          <Row className="artprofiletab-p">
            <Col> Handicap Certificate Image:</Col>
            <Col>
              <img src={img2}
                // src={`http://localhost:5000${UserData?.ArtistProfile?.ArtistHandicapCertificateImage}`}
              />
            </Col>
          </Row>
        </Card>
        <Card className="artprofiletab-cards">
          <p className="artprofiletab-pp">
            <span className="artprofiletab-span">Name:</span> Vaishnawi Patil
            {/* {UserData?.ArtistProfile?.ArtistFullName} */}
          </p>
          <p className="artprofiletab-pp">
            <span className="artprofiletab-span">Address:</span> Ganesh Bhawan
            {/* {UserData?.ArtistProfile?.ArtistAddress} */}
          </p>
          <p className="artprofiletab-pp">
            <span className="artprofiletab-span">City:</span> Mahasamund
            {/* {UserData?.ArtistProfile?.ArtistCity} */}
          </p>
          <p className="artprofiletab-pp">
            <span className="artprofiletab-span">Mobile No: </span> 7894851234
            {/* {UserData?.ArtistProfile?.ArtistMobileNo} */}
          </p>
          <p className="artprofiletab-pp">
            <span className="artprofiletab-span">Email:</span> vaishnu@gmail.com
            {/* {UserData?.ArtistProfile?.ArtistEmail} */}
          </p>
          <p className="artprofiletab-pp">
            <span className="artprofiletab-span">State:</span> Chhattisgarh
            {/* {UserData?.ArtistProfile?.ArtistState} */}
          </p>
          <p className="artprofiletab-pp">
            <span className="artprofiletab-span">Pin Code: </span> 429345
            {/* {UserData?.ArtistProfile?.ArtistPincode} */}
          </p>
          <p className="artprofiletab-pp">
            <span className="artprofiletab-span">Adhar Card No:</span> 784756345912
            {/* {UserData?.ArtistProfile?.ArtistAdharCardNo} */}
          </p>
          <p className="artprofiletab-pp">
            <span className="artprofiletab-span">IsVerified: </span> true
            {/* {UserData?.ArtistProfile?.IsVerified} */}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ArtProfileTab;
