
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import img1 from '../../img/desktop/image-deep-earth.jpg'
import img2 from '../../img/desktop/image-night-arcade.jpg'
import img3 from '../../img/desktop/image-soccer-team.jpg'
import img4 from '../../img/desktop/image-grid.jpg'
import img5 from '../../img/desktop/image-from-above.jpg'
import img6 from '../../img/desktop/image-pocket-borealis.jpg'
import img7 from '../../img/desktop/image-curiosity.jpg'
import img8 from '../../img/desktop/image-fisheye.jpg'
export const Navbar = () =>{
    return(
        <>
          <Container  className='py-3 '>
            <Row className=''>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-1 position-relative text-white">
                    <img src={img1} alt=""   className="img-grid" />
                    <p className="position-absolute top-0">DEEP EARTH</p>
                </Col>
                <Col xs={12} sm={6} md={4}  lg={3} className="mb-1 position-relative text-white">
                    <img src={img2} alt=""   className="img-grid" />
                     <p className="position-absolute top-0">DEEP EARTH</p>
                    </Col>
                <Col xs={12} sm={6}  md={4} lg={3} className="mb-1 position-relative text-white">
                    <img src={img3} alt="" className="img-grid" />
                     <p className="position-absolute top-0">DEEP EARTH</p>
                </Col>
                <Col xs={12} sm={6}  md={4} lg={3} className="mb-1 position-relative text-white">
                    <img src={img4} alt="" className="img-grid" />
                     <p className="position-absolute top-0">DEEP EARTH</p>
                </Col>
            
                <Col xs={12} sm={6}  md={4} lg={3} className="mb-1 position-relative text-white">
                    <img src={img5} alt="" className="img-grid" />
                     <p className="position-absolute top-0">DEEP EARTH</p>
                </Col>
                <Col xs={12} sm={6}  md={4} lg={3} className="mb-1 position-relative text-white">
                    <img src={img6} alt="" className="img-grid" />
                     <p className="position-absolute top-0">DEEP EARTH</p>
                </Col>
                <Col xs={12} sm={6}  md={4} lg={3} className="mb-1 position-relative text-white">
                    <img src={img7} alt="" className="img-grid" />
                     <p className="position-absolute top-0">DEEP EARTH</p>
                </Col>
                <Col xs={12} sm={6}  md={4} lg={3} className="mb-1 position-relative text-white">
                    <img src={img8} alt="" className="img-grid" />
                     <p className="position-absolute top-0">DEEP EARTH</p>
                </Col>
            </Row>
    </Container>
        
        </>


    )
}