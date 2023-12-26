import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import feyzaImage from '../../assets/feyza.jpg';
import seyhmusImage from '../../assets/seyhmus.jpg';
import yagmurImage from '../../assets/yagmur.jpg';
import sonerImage from '../../assets/soner.png';
import githubIcon from '../../assets/github.png';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-3">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p className="creator-text">Created by:</p>
                        <div className="creator">
                            <Link to ="https://github.com/feyzaerat" className="creator-link">
                                <img src={feyzaImage} alt="Feyza" className="creator-image"/>
                                feyzaerat
                            </Link>
                            <Link to="#" target="_blank" rel="noreferrer">
                                <img src={githubIcon} alt="Github" className="github-icon"/>
                            </Link>
                        </div>
                        <div className="creator">
                            <Link to="https://github.com/ShmsErl" className="creator-link">
                                <img src={seyhmusImage} alt="Seyhmus" className="creator-image"/>
                                ShmsErl
                            </Link>
                            <Link to="#" target="_blank" rel="noreferrer">
                                <img src={githubIcon} alt="Github" className="github-icon"/>
                            </Link>
                        </div>
                        <div className="creator">
                            <Link to = "https://github.com/yagmurcurku" className="creator-link">
                                <img src={yagmurImage} alt="Yagmur" className="creator-image"/>
                                yagmurcurku
                            </Link>
                            <Link to="#" target="_blank" rel="noreferrer">
                                <img src={githubIcon} alt="Github" className="github-icon"/>
                            </Link>
                        </div>
                        <div className="creator">
                            <Link to="https://github.com/sonersyln" className="creator-link">
                                <img src={sonerImage} alt="Soner" className="creator-image"/>
                                sonersyln
                            </Link>
                            <Link to="#" target="_blank" rel="noreferrer">
                                <img src={githubIcon} alt="Github" className="github-icon"/>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;