import { mul, add, sub } from "../algorithms/operations";
import { Dispatch, SetStateAction, useState } from "react";
import { validateNumeral } from "../api/validator";


type useCalcStateType = {
  val: string,
  error: boolean,
  setValue: Dispatch<SetStateAction<string>>,
  setError: Dispatch<SetStateAction<boolean>>,
}

export const useCalcState = ({
  val,
  error,
  setValue,
  setError,
}: useCalcStateType) => {

  const [loading, setLoading] = useState(false);

  //check if the user has already pressed an operation button before
  const hasSign = (value: string) => {
    return /[+\-×]/.test(value);
  };

  const calculateNewValue = async (value: string, sign: string) => {
    let num1 = "",
      num2 = "",
      isValidated = false,
      result: string | boolean = '';
    if (value.includes("×")) {
      [num1, num2] = value.split("×");
      if (num1 && num2) {
        setLoading(true);
        result = mul(num1, num2)
        isValidated = await validateNumeral(result as string);
        if (!isValidated) { setError(true) }
        setValue(() => {
          setLoading(false);
          return isValidated ? result + sign : "Result Error"
        });
      }
      return;
    }

    if (value.includes("+")) {
      [num1, num2] = value.split("+");
      if (num1 && num2) {
        setLoading(true);
        result = add(num1, num2)
        isValidated = await validateNumeral(result as string);
        if (!isValidated) { setError(true) }
        setValue(() => {
          setLoading(false);
          return isValidated ? result + sign : "Result Error"
        });
      }
      return;
    }

    if (value.includes("-")) {
      [num1, num2] = value.split("-");
      if (num1 && num2) {
        setLoading(true);
        result = sub(num1, num2)
        if (result as boolean === false) {
          setLoading(false);
          setError(true);
          setValue("Calc Error");
        } else {
          isValidated = await validateNumeral(result as string);
          if (!isValidated) { setError(true) }
          setValue(() => {
            setLoading(false);
            return isValidated ? result + sign : "Result Error"
          });
        }
      }
      return;
    }
  };

  const setNewValue = async (value: string) => {
    setLoading(true);
    let isValidated = await validateNumeral(val + value)

    if (error) {
      setLoading(false);
      setError(false);
      setValue(value);
    } else {
      if (!isValidated) { setError(true) }
      setValue((v: string) => {
        setLoading(false);
        return isValidated ? v + value : "Value Error"
      });
    }
  };

  return {
    hasSign,
    setNewValue,
    calculateNewValue,
    loading,
  }
}