import { z } from "zod";
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { GithubContext } from "@contexts/GithubContext";

const searchIssueFormSchema = z.object({
  query: z.string(),
});

type SearchIssueFormInputs = z.infer<typeof searchIssueFormSchema>;

export function SearchIssueForm() {
  const { issues, searchIssues } = useContextSelector(
    GithubContext,
    ({ issues, searchIssues }) => ({ issues, searchIssues })
  );

  const issuesCount = issues.length;

  const { handleSubmit, register, reset } = useForm<SearchIssueFormInputs>({
    resolver: zodResolver(searchIssueFormSchema),
  });

  function handleQueryIssue({ query }: SearchIssueFormInputs) {
    searchIssues(query);

    reset();
  }

  return (
    <Form onSubmit={handleSubmit(handleQueryIssue)}>
      <div>
        <strong>Publicações</strong>

        <span>{issuesCount} publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </Form>
  );
}
