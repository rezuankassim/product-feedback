import styled from "styled-components";

interface ButtonIProps {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "danger";
  whiteBackground?: boolean;
  back?: boolean;
}

interface LabelIProps {
  whiteBackground?: boolean;
}

const BaseButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding-top: 13px;
  padding-bottom: 11px;
  border: 0;

  &:active {
    border: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Label = styled.span<LabelIProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) =>
    props.whiteBackground
      ? props.theme.palette.darkGray
      : props.theme.palette.gray};
`;

export const Button = styled(BaseButton)<ButtonIProps>`
  ${(props) => {
    if (props.whiteBackground) {
      return `
        background-color: ${props.theme.palette.white};

        ${
          props.back &&
          `&:hover ${Label} {
            text-decoration: underline;
          }`
        }
      `;
    }

    switch (props.variant) {
      case "secondary": {
        return `
          background-color: ${props.theme.palette.blue};

          &:hover {
            background-color: ${props.theme.palette.lighterBlue};
          }
        `;
      }
      case "tertiary": {
        return `
          background-color: ${props.theme.palette.lightDarkBlue};

          &:hover {
            background-color: ${props.theme.palette.lighterDarkBlue};
          }
        `;
      }
      case "quaternary": {
        return `
          background-color: ${props.theme.palette.darkBlue};

          ${
            props.back &&
            `&:hover ${Label} {
              text-decoration: underline;
            }`
          }
        `;
      }
      case "danger": {
        return `
          background-color: ${props.theme.palette.red};

          &:hover {
            background-color: ${props.theme.palette.lightRed};
          }
        `;
      }
      case "primary":
      default:
        return `
          background-color: ${props.theme.palette.violet};

          &:hover {
            background-color: ${props.theme.palette.lightViolet};
          }
        `;
    }
  }}
`;
