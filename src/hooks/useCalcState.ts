import { mul, add, sub } from "../algorithms/operations";
import { Dispatch, SetStateAction } from "react";


type useCalcStateType = {
  error: boolean,
  setValue: Dispatch<SetStateAction<string>>,
  setError: Dispatch<SetStateAction<boolean>>,
}

export const useCalcState = ({
  error,
  setValue,
  setError,
}: useCalcStateType) => {

  //check if the user has already pressed an operation button before
  const hasSign = (value: string) => {
    return /[+\-×]/.test(value);
  };

  const calculateNewValue = (value: string, sign: string) => {
    let num1 = "",
      num2 = "";
    if (value.includes("×")) {
      [num1, num2] = value.split("×");
      if (num1 && num2) {
        setValue(mul(num1, num2) + sign);
      }
      return;
    }

    if (value.includes("+")) {
      [num1, num2] = value.split("+");
      if (num1 && num2) {
        setValue(add(num1, num2) + sign);
      }
      return;
    }

    if (value.includes("-")) {
      [num1, num2] = value.split("-");
      if (num1 && num2) {
        let newValue = sub(num1, num2);
        if (newValue === false) {
          setError(true);
          setValue("Cannot compute");
        } else {
          setValue(sub(num1, num2) + sign);
        }
      }
      return;
    }
  };

  const setNewValue = (value: string) => {
    if (error) {
      setValue(value);
      setError(false);
    } else {
      setValue((v: string) => v + value);
    }
  };

  return {
    hasSign,
    setNewValue,
    calculateNewValue
  }
}