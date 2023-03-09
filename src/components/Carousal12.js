import Carousel from 'react-bootstrap/Carousel';

function Carousel12() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/c1.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/c2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/c3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/c4.png"
                    alt="fouth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/c5.jpg"
                    alt="fifth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/c6.png"
                    alt="sixth slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousel12;