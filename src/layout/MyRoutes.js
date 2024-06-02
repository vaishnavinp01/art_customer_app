import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Cart from "../Components/Cart";
import Login from "../Components/Login";
import AddArtWork from "../ArtWorkTab/AddArtWork";
import ArtWorks from "../ArtWorkTab/ArtWorks";
import ArtOrderDetails from "../ArtWorkTab/ArtOrderDetails";
import AddCustomer from "../CustomerTab/AddCustomer";
import Customers from "../CustomerTab/Customers";
import CustOrderDetails from "../CustomerTab/CustOrderDetails";
import AddArtist from "../ArtistTab/AddArtist";
import Artists from "../ArtistTab/Artists";

const MyRoutes = () => {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addartwork" element={<AddArtWork />} />
          <Route path="/artworks" element={<ArtWorks />} />
          <Route path="/artorderdetails" element={<ArtOrderDetails />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/cusorderdetails" element={<CustOrderDetails />} />
          <Route path="/addartist" element={<AddArtist />} />
          <Route path="/artists" element={<Artists />} />
        </Routes>
      </Container>
    </div>
  );
};

export default MyRoutes;
