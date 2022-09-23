import { render, screen } from "@testing-library/react";
import Index from "../index";
import { store } from "@/models/store";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

const mockA = "this is mock A";

jest.mock("@/services", () => ({
  getA: jest.fn(() => mockA),
}));

describe("test page", () => {
  it("init", async () => {
    render(
      <Provider store={store}>
        <Index />
      </Provider>
    );
    const btn = screen.getByRole("button", { name: "click me" });
    await userEvent.click(btn);
    expect(screen.queryByText(mockA)).toBeInTheDocument();
    // expect(screen.queryByText("this is A")).toBeInTheDocument();
  });
});
