import { Card } from "@components/Card";
import styled from "@emotion/styled";

export const HomeContainer = styled.main`
  width: 864px;
  margin: -4.68rem auto 14.625rem;
`;

export const IssueContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 26rem);
  gap: 2rem;
`;

export const Issue = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  cursor: pointer;

  div {
    display: flex;
    gap: 1rem;

    strong {
      flex: 1;

      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-title"]};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  &:hover {
    outline: 2px solid ${(props) => props.theme["base-label"]};
  }
`;

export const IssueBody = styled.section`
  word-break: break-all;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
