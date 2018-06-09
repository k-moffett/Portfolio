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
                    <CardTitle>TapIt!</CardTitle>
                    <hr/>
                    <CardText>
                        TapIt! is a one stop shop for daily, up-to-date information about the local breweries in San Diego.
                        <br/>
                        This is a React app running with an express backend and a MySQL database.
                        <br/>
                        More features coming soon!
                    </CardText>
                    <a href='https://fast-temple-37181.herokuapp.com/#/' target='_blank'>Check out TapIt!</a>
                </Card>
                </Col>

                <Col sm="5">
                <Card body>
                    <CardTitle>Bloody Unicorns</CardTitle>
                    <hr/>
                    <CardText>
                        A chatroom where you can discuss your favorite music with your friends. Utilizing the Spotify API, users can also change the song that is currenlty loaded into the YouTube screen.
                    </CardText>
                    <a href='https://moffkr91.github.io/Bloody-Unicorns/' target='_blank'>Check out Bloody Unicorns</a>
                </Card>
                </Col>
                <Col sm="1"></Col>
            </Row>

                        <Row className="row">
                <Col sm="1"></Col>
                <Col sm="5">
                <Card body>
                    <CardTitle>Something Else</CardTitle>
                    <hr/>
                    <CardText>

                    </CardText>
                    <a href='' target='_blank'>Check out </a>
                </Card>
                </Col>

                <Col sm="5">
                <Card body>
                    <CardTitle>Something Else</CardTitle>
                    <hr/>
                    <CardText>
                       
                    </CardText>
                    <a href='' target='_blank'>Check out </a>
                </Card>
                </Col>
                <Col sm="1"></Col>
            </Row>
            </Container>
        )
    }
}