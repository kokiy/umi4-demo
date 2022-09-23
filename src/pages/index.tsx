import type { Dispatch } from "@/models/store";
import { useDispatch } from "react-redux";
import { useState } from "react";
export default function HomePage() {
  const dispatch = useDispatch<Dispatch>();
  const [a, setA] = useState("");
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p data-testid="a">{a}</p>
      <button
        onClick={() => {
          dispatch.questions.setQuestions().then((res) => {
            setA(res);
          });
        }}
      >
        click me
      </button>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
