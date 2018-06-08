import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Github from '../../../images/github.png'
import LinkedIn from '../../../linkedin.png'


export default class Social extends Component {

    render() {
        return (
            <Container   id="social">
              <Row>

                <Col>
                <img src={Github} />
                </Col>
                
                <Col>
                <img src={LinkedIn} />
                </Col>
        
              </Row>
            </Container>
          );
    }
  }