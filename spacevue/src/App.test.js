import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/login/Login");
jest.mock("./components/header/Header");

describe("App component", () => {
  it("renders the Header and Login components", () => {
    render(<App />);
    screen.debug();
  });
});
