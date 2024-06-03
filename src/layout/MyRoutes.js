import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Cart from "../Components/Cart";
import Login from "../Components/Login";
// ArtistTab
import AddArtist from "../ArtistTab/AddArtist";
import Artists from "../ArtistTab/Artists";
import ArtWorkOrderDetails from "../ArtistTab/ArtWorkOrderDetails";
// ArtWorkTab
import AddArtWork from "../ArtWorkTab/AddArtWork";
import ArtWorks from "../ArtistTab/Artists";
// CustomerTab
import AddCustomer from "../CustomerTab/AddCustomer";
import Customers from "../CustomerTab/Customers";
import CustOrderDetails from "../CustomerTab/CustOrderDetails";

const MyRoutes = () => {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addartist" element={<AddArtist />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artworkorderdetails" element={<ArtWorkOrderDetails />} />
          <Route path="/addartwork" element={<AddArtWork />} />
          <Route path="/artworks" element={<ArtWorks />} />
          <Route path="/addcustomer" element={<AddCustomer/>} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/custorderdetails" element={<CustOrderDetails />} />
        </Routes>
      </Container>
    </div>
  );
};

export default MyRoutes;
