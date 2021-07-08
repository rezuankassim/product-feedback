import React from "react";
import { Button as Wrapper, Label } from "./style";

interface IProps {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "danger";
  whiteBackground?: boolean;
  back?: boolean;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  whiteBackground = false,
  back = false,
  children,
}: IProps) => {
  return (
    <Wrapper variant={variant} whiteBackground={whiteBackground} back={back}>
      <Label whiteBackground={whiteBackground}>
        {!back ? (
          children
        ) : (
          <>
            <svg
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 9L0 5L4 1" stroke="currentColor" strokeWidth="2" />
            </svg>

            <span style={{ marginLeft: "15.67px" }}>{children}</span>
          </>
        )}
      </Label>
    </Wrapper>
  );
};

export default Button;
