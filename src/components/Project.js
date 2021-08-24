import React from "react";
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from "reactstrap";
import parksPagesImg from "../Assets/Parks&Pages.png";

// add image, links to deployed site in cards

function Project() {
    return (
        <div>
            <Container><div class="col auto"><h2>Web Development Projects</h2></div>
                <Row>
                    <Col md="4"> <Card>
                        <CardImg top width="100%" src={parksPagesImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Parks & Pages</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                            <CardText>This application </CardText>
                            <Button>Deployed Site</Button>
                            <Button>Github Repo</Button>
                        </CardBody>
                    </Card></Col>
                    <Col md="4"> <Card>
                        <CardImg top width="100%" src={parksPagesImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Cat Quiz</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                            <CardText>This application </CardText>
                            <Button>Deployed Site</Button>
                            <Button>Github Repo</Button>
                        </CardBody>
                    </Card></Col>
                    <Col md="4"> <Card>
                        <CardImg top width="100%" src={parksPagesImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Parks & Pages</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This application </CardText>
                            <Button>Deployed Site</Button>
                            <Button>Github Repo</Button>
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
