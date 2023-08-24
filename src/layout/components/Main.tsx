import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return <Box minHeight={"92vh"}>{children}</Box>;
};

export default Main;
