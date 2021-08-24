import React from "react";
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from "reactstrap";
import parksPagesImg from "../Assets/Parks&Pages.png";

// add image, links to deployed site in cards

function Project() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="4"> <Card>
                        <CardImg top width="100%" src={parksPagesImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card></Col>
    
                </Row>
                <Row>
                    <Col md="4">Add project info (image, links to deployed site)</Col>
                    <Col md="4">Add project info (image, links to deployed site)</Col>
                    <Col md="4">Add project info (image, links to deployed site)</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Project;
