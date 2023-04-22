import { SearchIssueForm } from "@components/SearchIssueForm";
import { Profile } from "./components/Profile";
import { HomeContainer, Issue, IssueBody, IssueContainer } from "./styles";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { useContextSelector } from "use-context-selector";
import { GithubContext } from "@contexts/GithubContext";
import { distanceToNowDate } from "@utils/formatters";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const issues = useContextSelector(
    GithubContext,
    (selector) => selector.issues
  );

  function trimIssueBody(body: string) {
    const ret = "...";

    if (body.length <= 140) {
      return body + ret;
    }

    return body.split("").splice(0, 140).join("") + ret;
  }

  function handleIssueGoToDetailPage(number: number) {
    navigate(`/issue/${number}`);
  }

  return (
    <HomeContainer>
      <Profile />
      <SearchIssueForm />

      <IssueContainer>
        {issues.map((issue) => (
          <Issue
            key={issue.id}
            variant="light"
            onClick={() => handleIssueGoToDetailPage(issue.number)}
          >
            <div>
              <strong>{issue.title}</strong>

              <span>{distanceToNowDate(new Date(issue.created_at))}</span>
            </div>

            <IssueBody>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {trimIssueBody(issue.body ?? "")}
              </ReactMarkdown>
            </IssueBody>
          </Issue>
        ))}
      </IssueContainer>
    </HomeContainer>
  );
}
