import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Body, Info, IssueContainer, Links } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { Card } from "@components/Card";
import remarkGfm from "remark-gfm";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useCallback, useEffect, useState } from "react";
import {
  GithubContext,
  Issue as IssueInterface,
} from "@contexts/GithubContext";
import { useContextSelector } from "use-context-selector";
import { get } from "http";
import { distanceToNowDate } from "@utils/formatters";

export function Issue() {
  const { issueId } = useParams();

  const getIssueById = useContextSelector(
    GithubContext,
    (selector) => selector.getIssueById
  );

  const [issue, setIssue] = useState<IssueInterface>();

  const loadIssue = useCallback(async () => {
    const loadedIssue = await getIssueById(Number(issueId));

    setIssue(loadedIssue);
  }, [getIssueById, issueId]);

  useEffect(() => {
    loadIssue();
  }, [loadIssue]);

  return (
    issue && (
      <IssueContainer>
        <Card variant="dark">
          <Links>
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              Voltar
            </Link>

            <a
              href={issue.user.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no Github
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </Links>

          <p>{issue.title}</p>

          <Info>
            <a
              href={issue.user.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              {issue.user.login}
            </a>

            <a href={issue.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faCalendarDay} />
              {distanceToNowDate(new Date(issue?.created_at || new Date()))}
            </a>

            <a
              href={issue.user.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faComment} />
              {issue.comments} comentários
            </a>
          </Info>
        </Card>

        <Body>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issue.body ?? ""}
          </ReactMarkdown>
        </Body>
      </IssueContainer>
    )
  );
}
