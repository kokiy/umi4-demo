import React from "react";
import { store } from "@/models/store";
import { Provider } from "react-redux";

export const rootContainer = (container: any) => {
  //@ts-ignore
  return React.createElement(Provider, { store }, container);
};
