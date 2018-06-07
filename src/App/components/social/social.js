import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css'


export default class Social extends Component {

    render() {
        return (
            <Container   id="social">
              <Row>

                <Col>
                GitHub
                </Col>
                
                <Col>
                LinkedIn
                </Col>
        
              </Row>
            </Container>
          );
    }
  }