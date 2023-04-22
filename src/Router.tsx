import { DefaultLayout } from "@layouts/DefaultLayout";
import { Home } from "@pages/Home";
import { Issue } from "@pages/Issue";
import { Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue/:issueId" element={<Issue />} />
      </Route>
    </Routes>
  );
}
