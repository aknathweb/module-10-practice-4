import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import { Outlet } from 'react-router-dom';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <div className="mb-auto">
                <Header></Header>
            </div>

            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>

            <div className="mt-auto text-center" style={{ backgroundColor: 'rgb(35, 47, 62)', color: 'white', padding: '10px 0 30px' }}>
                <Footer></Footer>
                <small>©Copyright 1999-2022.<br /> All rights reserved. Powered by Anik kumar Nath</small>
            </div>
        </div>
    );
};

export default Main;