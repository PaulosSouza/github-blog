import styled from "@emotion/styled";

export const Form = styled.form`
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 700;
      font-size: 1.125rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  input {
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }
  }
`;
