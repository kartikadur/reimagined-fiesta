import React from "react";
import {
  screen,
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
  act,
} from "@testing-library/react";
import { Calculator } from "./Calculator";

test("should display value of clicked button", async () => {
  render(<Calculator />);
  const button_x = screen.getByText(/X/);
  const button_pl = screen.getByText(/\+/);
  const button_mi = screen.getByText(/\-/);
  const button_eq = screen.getByText(/\=/);
  const button_cl = screen.getByText(/Cl/);
  const display = screen.getByTestId("display");

  //NORMAL FLOW
  fireEvent.click(button_x);
  await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
  expect(display.innerHTML).toBe("X");

  fireEvent.click(button_pl);
  expect(display.innerHTML).toBe("X+");

  fireEvent.click(button_x);
  await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
  expect(display.innerHTML).toBe("X+X");

  fireEvent.click(button_eq);
  await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
  expect(display.innerHTML).toBe("XX");

  //CLEAR DISPLAY
  fireEvent.click(button_cl);
  expect(display.innerHTML).toBe("");

  //OPERATION PRESSED BEFORE ANYTHING
  fireEvent.click(button_pl);
  expect(display.innerHTML).toBe("");

  //OPERATION PRESSED TWICE

  fireEvent.click(button_x);
  await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
  fireEvent.click(button_pl);
  expect(display.innerHTML).toBe("X+");
  // fireEvent.click(button_pl);
  // expect(display.innerHTML).toBe("X+");
  // fireEvent.click(button_eq);
  // expect(display.innerHTML).toBe("X+");

  fireEvent.click(button_cl);

  // SUBTRACT LARGER NUMBER FROM SMALLER NUMBER
  fireEvent.click(button_x);
  await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
  fireEvent.click(button_mi);
  fireEvent.click(button_x);
  await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
  fireEvent.click(button_x);
  await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
  fireEvent.click(button_eq);
  expect(display.innerHTML).toBe("Calc Error");

  // ON CANNOT COMPUTE OPERATION BUTTON DOES NOTHING
  fireEvent.click(button_pl);
  expect(display.innerHTML).toBe("Calc Error");
  fireEvent.click(button_eq);
  expect(display.innerHTML).toBe("Calc Error");

  // NUMERAL BUTTON MUST CLEAR THE DISPLAY AND INSERT VALUE
  fireEvent.click(button_x);
  await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
  expect(display.innerHTML).toBe("X");
});
