import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import './index.css'

export default class Portfolio extends Component {

    render() {
        return(
            <Container>
            <Row className="row">
                <Col sm="1"></Col>
                <Col sm="5">
                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </Card>
                </Col>

                <Col sm="5">
                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </Card>
                </Col>
                <Col sm="1"></Col>
            </Row>
            </Container>
        )
    }
}