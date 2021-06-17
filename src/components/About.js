import {
  AboutContainer,
  AboutImage,
  AboutHeading,
} from "../styled-components/AboutStyles";
import { Container, Image, Message } from "../styled-components/SharedStyles";
import { Row, Col } from "../styled-components/GridStyles";
import { useState } from "react";
const About = () => {
  const [state] = useState({
    heading: "I'm Tushar shrivastav ",
    subheading:
      " A passionate Full Stack Software Developer🚀 having an experience of designing and building Web and Mobile applications with JavaScript / React.js / Nodejs / React-Native and some other cool libraries and frameworks",
  });
  return (
    <AboutContainer>
      <Container>
        <Row>
          <Col col={3}>
            <AboutImage>
              <Image src="/assets/profile.jpg" alt="profile" />
            </AboutImage>
          </Col>
          <Col col={9}>
            <AboutHeading>{state.heading}</AboutHeading>
            <Message marginTop={20} width={70}>
              {state.subheading}
            </Message>
          </Col>
        </Row>
      </Container>
    </AboutContainer>
  );
};

export default About;
