import { useState } from "react";
import {
  HeaderContainer,
  HeaderHeading,
  SubHeading,
} from "../styled-components/HeaderStyles";
import { Container, Link } from "../styled-components/SharedStyles";
function Header() {
  const [state] = useState({
    heading: "Developer",
    subHeading: "Web and Mobile Applications ",
  });
  return (
    <HeaderContainer>
      <Container>
        <HeaderHeading>{state.heading}</HeaderHeading>
        <SubHeading>{state.subHeading}</SubHeading>
        <Link href="/download/resume">Download Resume</Link>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
