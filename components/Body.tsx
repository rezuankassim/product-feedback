import styled from "styled-components";

interface IProps {
  variant?: string;
}

const Body = styled.p<IProps>`
  font-size: 16px;
  color: ${(props) => props.theme.palette.lightDarkBlue};
  ${(props) => {
    switch (props.variant) {
      case "secondary":
        return `
          font-size: 15px;
          line-height: 22px;
          font-weight: 400;
        `;
      case "tertiary":
        return `
          font-size: 13px;
          line-height: 19px;
          font-weight: 600;
        `;
      case "primary":
      default:
        return `
          font-size: 16px;
          line-height: 23px;
          font-weight: 400;
        `;
    }
  }}
`;

export default Body;
