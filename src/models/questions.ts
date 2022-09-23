import { createModel } from "@rematch/core";
import type { RootModel } from ".";
import * as services from "@/services";
type QuestionType = "boolean" | "multiple" | "mixed";
type QuestionsState = {
  questions: number[];
  amount: number;
  type: QuestionType;
};

const questions = createModel<RootModel>()({
  state: {
    questions: [],
    amount: 2,
    type: "boolean",
  } as QuestionsState,
  reducers: {},
  effects: (dispatch) => ({
    async setQuestions() {
      return services.getA();
    },
  }),
});

export default questions;
