import { Models } from "@rematch/core";

import questions from "./questions";

export interface RootModel extends Models<RootModel> {
  questions: typeof questions;
}

export const models: RootModel = { questions };
