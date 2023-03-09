import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Btn() {
    return (
        <div className='container'>
            <img src="./images/i1.jpg" alt="11" className='img-fluid' />
            <img src="./images/i2.jpg" alt="22" className='img-fluid' />
            <img src="./images/i3.jpg" alt="33" className='img-fluid' />
            <img src="./images/i4.jpg" alt="44" className='img-fluid' />
            <Container>
                <Row>
                    <Col>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid "
                                    src="./images/b1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid "
                                    src="./images/b2.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid "
                                    src="./images/b3.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid "
                                    src="./images/b4.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid "
                                    src="./images/b5.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid "
                                    src="./images/b6.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <h2></h2>
            </Container>
        </div>
    )
}

export default Btn
