import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css'

export default class Main extends Component {

    render() {
        return(
            <Container>
                <Row>
                    <Col xs="6">
                    Other Col
                    </Col>
                    <Col xs="6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi leo, faucibus ut hendrerit sed, lacinia vel dolor. Nam facilisis lectus et odio auctor pulvinar. Vivamus nec justo quis diam varius fringilla. Aenean fringilla, urna non ornare eleifend, felis dui imperdiet ante, egestas ullamcorper sapien nulla sit amet orci. Curabitur consectetur sem nulla, vel commodo tortor ullamcorper id. Cras nec malesuada velit, a consequat nulla. Aliquam luctus ullamcorper sollicitudin. Fusce sodales hendrerit sagittis. Aliquam scelerisque ac nibh at commodo. Morbi accumsan facilisis eleifend. Duis in urna non lectus iaculis faucibus. Aliquam erat volutpat. Nullam quis lectus vitae purus tempor eleifend ac id ligula. Nunc consectetur volutpat magna sit amet euismod. Praesent tempor tincidunt eros, vel ultricies augue tempor eu.
                        Etiam egestas vulputate feugiat. Donec ultrices, tellus quis efficitur auctor, tellus velit bibendum nunc, ac vehicula mi nibh vel sapien. Mauris in nisi et sem porttitor tincidunt vel quis sapien. Donec tristique justo quis purus feugiat rhoncus. Aenean dapibus dignissim augue, et blandit justo semper et. Praesent vitae nisi at nisi vulputate commodo eget nec velit. Suspendisse egestas urna eget massa ornare, at congue velit luctus. Fusce scelerisque est eu felis mollis ultrices.
                    </Col>
                </Row>
            </Container>
        )
    }
}