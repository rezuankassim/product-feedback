import styled from "styled-components";

const Header = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.palette.lightDarkBlue};
`;

const h1 = styled(Header.withComponent("h1"))`
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.33;

  mix-blend-mode: normal;
  opacity: 0.96;
`;

const h2 = styled(Header.withComponent("h2"))`
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -0.25;
`;

const h3 = styled(Header.withComponent("h3"))`
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25;
`;

const h4 = styled(Header.withComponent("h4"))`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2;
`;

const Heading = {
  h1,
  h2,
  h3,
  h4,
};

module.exports = Heading;
