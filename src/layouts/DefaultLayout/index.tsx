import { Outlet } from "react-router-dom";
import { Header } from "./styles";

import cover from "@assets/cover.svg";

export function DefaultLayout() {
  return (
    <>
      <Header src={cover} />

      <Outlet />
    </>
  );
}
