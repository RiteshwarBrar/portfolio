import { Container, Col, Row } from "react-bootstrap";


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">                   
                    <Col sm={18} className="text-center text-sm-end">
                    <span className="footer-text">
                    <a href="https://www.linkedin.com/in/brar-52-ritesh" target="_blank">
                    <button className="vvd" ><span>LinkedIn</span><span /></button>
                    </a>
                    <a href="https://github.com/RiteshwarBrar" target="_blank">
                    <button className="vvd" ><span>GitHub</span><span /></button>
                    </a>
                    <a>
                        <p>Website by Riteshwar Singh Brar</p>
                        <p>rbrar@wisc.edu</p>
                    </a>
                    </span>   
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}