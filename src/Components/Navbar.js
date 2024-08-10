// import "../assets/css/navbar.css"
import { Outlet, Link } from "react-router-dom";
import React, { useContext, useState } from 'react';
import { NavDropdown, Navbar, Container, Nav } from 'react-bootstrap';
import LoginContext from "../context/LoginContext";

const NavbarMain = () => {

  const {state,authentication} = useContext(LoginContext);

  return (
    <>
    <div className="container-fluid my-3">
      <div className="col-md-12">
        <div className="row">
        <div className="col-md-4 px-3">
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>

          <div className="col-md-5 text-fade-middle">
              <p className="text-center my-1 middle-text">Supper Value Deals - Save more with coupons</p>
          </div>
        
          <div className="contact-navbar col-md-3">
            <p className="headphone-icon">
               <i className="fa fa-headphones"></i>
            </p>
            <div className="ms-3">
              {authentication ?
                <p className="mobile-no">{state.email ?? "abc@gmail.com"}</p>
                :
                <p className="mobile-no">No</p>
              }
              <p className="textfor24">24/7 Support Center</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="https://static.vecteezy.com/system/resources/previews/014/971/638/non_2x/food-logo-design-template-restaurant-free-png.png" width='100px'/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li class="nav-item">
              <Link to="/">
                 <a style={{ fontWeight: 'bold' }} class="nav-link active" aria-current="page" href="#">Home</a>
              </Link>
              </li>
              <li class="nav-item">
                <a style={{ fontWeight: 'bold' }} class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <NavDropdown title="Shop" id="basic-nav-dropdown" class="linkshead" style={{ fontWeight: 'bold' }}>
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                </NavDropdown>
              </li>

              <li class="nav-item">
                <NavDropdown title="Vendor" id="basic-nav-dropdown" class="linkshead" style={{ fontWeight: 'bold' }}>
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                </NavDropdown>
              </li>

              <li class="nav-item">
                <NavDropdown title="Blog" id="basic-nav-dropdown" class="linkshead" style={{ fontWeight: 'bold' }}>
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                </NavDropdown>
              </li>

              <li class="nav-item">
                <a style={{ fontWeight: 'bold' }} class="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="icons-navbar">
                <a className="bag me-3"><i className="fa fa-heart-o"></i></a>
              </li>
              <li className="icons-navbar">
              <Link to="/afterlogin">
                <a className="bag me-3"><i className="fa fa-shopping-bag"></i></a>
                </Link>
              </li>
              <li className="icons-navbar">
                <Link to="/login">
                <a className="bag me-3"><i className="fa fa-user"></i></a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default NavbarMain;



