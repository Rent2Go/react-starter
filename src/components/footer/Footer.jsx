import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import feyzaImage from '../../assets/feyza.jpg';
import seyhmusImage from '../../assets/seyhmus.jpg';
import yagmurImage from '../../assets/yagmur.jpg';
import sonerImage from '../../assets/soner.png';
import linkedinIcon from '../../assets/linkedin-icon.png';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-3">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p className="creator-text">Created by:</p>
                        <div className="creator">
                            <a href="https://github.com/feyzaerat" className="creator-link">
                                <img src={feyzaImage} alt="Feyza" className="creator-image"/>
                                feyzaerat
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon"/>
                            </a>
                        </div>
                        <div className="creator">
                            <a href="https://github.com/ShmsErl" className="creator-link">
                                <img src={seyhmusImage} alt="Seyhmus" className="creator-image"/>
                                ShmsErl
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon"/>
                            </a>
                        </div>
                        <div className="creator">
                            <a href="https://github.com/yagmurcurku" className="creator-link">
                                <img src={yagmurImage} alt="Yagmur" className="creator-image"/>
                                yagmurcurku
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon"/>
                            </a>
                        </div>
                        <div className="creator">
                            <a href="https://github.com/sonersyln" className="creator-link">
                                <img src={sonerImage} alt="Soner" className="creator-image"/>
                                sonersyln
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon"/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;