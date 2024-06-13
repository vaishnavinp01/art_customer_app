import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./MainLayout";
import Cart from "../Components/Cart";
import Login from "../Components/Login";
// ArtWorkTab
import AddArtWork from "../ArtWorkTab/AddArtWork";
import ArtistDetails from "../ArtWorkTab/ArtistDetails";
// ArtistTab
import AddArtist from "../ArtistTab/AddArtist";
import ArtistProfile from "../ArtistTab/ArtistProfile";
import ArtWorkOrderDetails from "../ArtistTab/ArtWorkOrderDetails";
// CustomerTab
import AddCustomer from "../CustomerTab/AddCustomer";
import CustomerProfile from "../CustomerTab/CustomerProfile";
// import CustOrderDetails from "../CustomerTab/CustOrderDetails";

const MyRoutes = () => {
  const artistData = useLocation().state;
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addartist" element={<AddArtist />} />
          <Route path="/artistdetails" element={<ArtistDetails />} />
          <Route
            path="/artworkorderdetails"
            element={<ArtWorkOrderDetails />}
          />
          <Route path="/addartwork" element={<AddArtWork />} />
          <Route path="/artistprofile" element={<ArtistProfile data={artistData} />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/customerprofile" element={<CustomerProfile />} />
          {/* <Route path="/custorderdetails" element={<CustOrderDetails />} /> */}
        </Routes>
      </Container>
    </div>
  );
};

export default MyRoutes;
