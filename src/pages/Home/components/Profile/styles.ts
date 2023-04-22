import { Card } from "@components/Card";
import styled from "@emotion/styled";

export const ProfileContainer = styled(Card)`
  display: flex;
  gap: 2rem;
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  margin-left: 0.5rem;
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  p {
    flex: 1;
  }
`;

export const PersonData = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;

  strong {
    font-size: 1.5rem;
    font-weight: 700;
  }

  a {
    display: flex;
    height: 1.25rem;
    gap: 0.5rem;

    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;

    color: ${(props) => props.theme.blue};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const Info = styled.div`
  margin-top: 1.5rem;

  display: flex;
  gap: 24px;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};

    svg {
      width: 18px;
      height: 18px;
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
