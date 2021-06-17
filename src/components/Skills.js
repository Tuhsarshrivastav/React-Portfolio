import { useState, Fragment } from "react";
import {
  SkillsContainer,
  SkillsBlock,
  SkillsName,
  SkillsValue,
  ProgressBar,
} from "../styled-components/SkillsStyles";
import { Container, Heading, Message } from "../styled-components/SharedStyles";
import { Row, Col } from "../styled-components/GridStyles";
const Skills = () => {
  const [state] = useState({
    heading: "my skills",
    subHeading:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illum, officiis nihil, id ratione in, tempora eveniet suscipit quasi odit a explicabo delectus facilis nobis? Nobis quia porro odio ullam!",
  });
  const [mySkills] = useState([
    { id: 1, name: "Javascript", value: 80 },
    { id: 2, name: "React JS", value: 85 },
    { id: 3, name: "React Native", value: 70 },
    { id: 4, name: "Vue JS", value: 90 },
    { id: 5, name: "Node JS", value: 90 },
    { id: 6, name: "GraphQL", value: 70 },
  ]);
  return (
    <SkillsContainer>
      <Container>
        <Row align="center">
          <Col col={6}>
            <Heading>{state.heading}</Heading>
            <Message>{state.subHeading}</Message>
          </Col>
          <Col col={6}>
            {mySkills.map((skill) => (
              <Fragment key={skill.id}>
                <SkillsBlock>
                  <SkillsName>{skill.name}</SkillsName>
                  <SkillsValue>{skill.value}%</SkillsValue>
                </SkillsBlock>
                <ProgressBar max="100" value={skill.value} />
              </Fragment>
            ))}
          </Col>
        </Row>
      </Container>
    </SkillsContainer>
  );
};
export default Skills;
