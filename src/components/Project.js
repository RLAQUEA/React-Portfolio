import React from "react";
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from "reactstrap";
import parksPagesImg from "../Assets/img/Parks&Pages.png";
import catQuizImg from "../Assets/img/CatQuiz.png";
import inMarketHomeImg from "../Assets/img/InMarket.png";
import weatherDashImg from "../Assets/img/weatherDash.png";


function Project() {
    return (
        <div>
         
            <Container><div class="col auto"><h2>Web Development Projects</h2></div>
                <Row>
                    {/* Parks & Pages */}
                    <Col md="6"> <Card body className="text-center">
                        <CardImg top width="100%" src={parksPagesImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Parks & Pages</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                            <CardText>This application </CardText>
                            <Button>Deployed Site</Button>
                            <Button>Github Repo</Button>
                        </CardBody>
                    </Card></Col>

                    {/* Cat Quiz */}
                    <Col md="6"> <Card>
                        <CardImg top width="100%" src={catQuizImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Cat Quiz</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                            <CardText>This application </CardText>
                            <Button>Deployed Site</Button>
                            <Button>Github Repo</Button>
                        </CardBody>
                    </Card></Col>
                    </Row>
                <Row>
                     {/* inMarket */}
                     <Col md="6"> <Card body className="text-center">
                        <CardImg top width="100%" src={inMarketHomeImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">inMarket Real Estate App</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This application </CardText>
                            <Button>Deployed Site</Button>
                            <Button>Github Repo</Button>
                        </CardBody>
                    </Card></Col>
                    
                     {/* Weather Dashboard */}
               
                <Col md="6"> <Card>
                        <CardImg top width="100%" src={weatherDashImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Weather Dashboard</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This application </CardText>
                            <Button>Deployed Site</Button>
                            <Button>Github Repo</Button>
                        </CardBody>
                    </Card></Col>
                    
                  
                    

                    {/* Final Project */}
                    {/* <Col md="6"> <Card body className="text-center">
                        <CardImg top width="100%" src={parksPagesImg} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Parks & Pages</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>This application </CardText>
                            <Button>Deployed Site</Button>
                            <Button>Github Repo</Button>
                        </CardBody>
                    </Card></Col> */}
                </Row>
            </Container>
        </div>
    );
}

export default Project;
