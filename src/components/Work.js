import { WorkContainer, WorkImage } from "../styled-components/WorkStyles";
import { Container, Image, Heading } from "../styled-components/SharedStyles";
import { Row, Col } from "../styled-components/GridStyles";
import { useState } from "react";
function Work() {
  const [state] = useState([
    { id: 1, image: "/assets/images/work1.jpg" },
    { id: 2, image: "/assets/images/work2.jpg" },
    { id: 3, image: "/assets/images/work3.jpg" },
    { id: 4, image: "/assets/images/work4.jpg" },
    { id: 5, image: "/assets/images/work5.jpg" },
    { id: 6, image: "/assets/images/work6.jpg" },
  ]);
  const [heading] = useState('my work');
  return (
    <WorkContainer>
      <Container>
        <Heading>{heading}</Heading>
        <Row>
          {state.map((work) => (
            <Col col={4} key={work.id}>
              <WorkImage>
                <Image src={work.image} />
              </WorkImage>
            </Col>
          ))}
        </Row>
      </Container>
    </WorkContainer>
  );
}

export default Work;
