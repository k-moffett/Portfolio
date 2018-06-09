import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css'
import profilePic from '../../images/profilePic.jpg'

export default class Main extends Component {

    render() {
        return(
            <Container>
                <Row>
                    <Col id="main" xs="12">
                        <img id='profile-pic' alt="profile" src={profilePic} />
                        <br/>
                        Web development is my passion. The UCSD Web Development Bootcamp has allowed me to grow as an individual, as well as work as a team player on projects. I am proficient in JavaScript, React JS, RESTful APIs, Node JS, Express JS, HTML 5, CSS, jQuery, AJAX, MySQL, MongoDB, Git, Heroku, AWS, Firebase and more. This not only because of the many hours spent as an individual creating solutions to problem, but also because we can learn so much more by working together to achieve our goals.
                        <br/>
                        From building an Express back-end, or crafting components to render in React, what I really enjoy most is solving problems . New problems always create an opportunity to learn, and that is one of the most satisfying aspects of Web Development. As the industry continues to grow and the technologies constantly change, new problems will require new creative solutions. The fact that there is always something more to learn and improve on is what drives me.             
                    </Col>
                </Row>
            </Container>
        )
    }
}