import styled from "@emotion/styled";

export const IssueContainer = styled.section`
  width: 864px;
  margin: -4.68rem auto 14.625rem;

  & > section > p {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
    line-height: 130%;
    margin: 1.25rem 0 0.5rem;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    gap: 0.5rem;

    color: ${(props) => props.theme.blue};
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 2rem;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    color: ${(props) => props.theme["base-span"]};
    font-size: 1rem;

    svg {
      width: 18px;
      height: 18px;
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const Body = styled.div`
  margin-top: 2.5rem;

  font-size: 1.2rem;

  a {
    color: ${(props) => props.theme.blue};
    font-weight: 700;
    font-size: 0.75rem;
  }
`;
