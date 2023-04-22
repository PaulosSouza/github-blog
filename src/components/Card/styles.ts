import styled from "@emotion/styled";

interface ICardContainerProps {
  variant: "dark" | "light";
}

export const CardContainer = styled.section<ICardContainerProps>`
  width: 100%;
  padding: 2rem;

  background-color: ${(props) =>
    props.variant === "dark"
      ? props.theme["base-profile"]
      : props.theme["base-post"]};
  border-radius: 10px;
`;
