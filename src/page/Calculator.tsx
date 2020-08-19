import React, { ReactElement, FC, useState } from "react";
import { Display } from "../components/Display";
import { Button } from "../components/Button";
import { useCalcState } from "../hooks/useCalcState";

export const Calculator: FC = (): ReactElement => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const { hasSign, setNewValue, calculateNewValue } = useCalcState({
    error,
    setValue,
    setError,
  });

  return (
    <div className="calc">
      <Display cx="calc__disp" value={value} />

      <Button
        cx="calc__btn  btn__i"
        onClick={() => {
          setNewValue("I");
        }}
      >
        I
      </Button>
      <Button
        cx="calc__btn  btn__v"
        onClick={() => {
          setNewValue("V");
        }}
      >
        V
      </Button>
      <Button
        cx="calc__btn btn__x"
        onClick={() => {
          setNewValue("X");
        }}
      >
        X
      </Button>
      <Button
        cx="calc__btn  btn__l"
        onClick={() => {
          setNewValue("L");
        }}
      >
        L
      </Button>
      <Button
        cx="calc__btn  btn__c"
        onClick={() => {
          setNewValue("C");
        }}
      >
        C
      </Button>
      <Button
        cx="calc__btn  btn__d"
        onClick={() => {
          setNewValue("D");
        }}
      >
        D
      </Button>
      <Button
        cx="calc__btn  btn__m"
        onClick={() => {
          setNewValue("M");
        }}
      >
        M
      </Button>
      <Button
        cx="calc__btn  btn__add"
        onClick={() => {
          if (hasSign(value)) {
            calculateNewValue(value, "+");
          } else if (value && !error) {
            setValue((value) => value + "+");
          }
        }}
      >
        +
      </Button>
      <Button
        cx="calc__btn  btn__sub"
        onClick={() => {
          if (hasSign(value)) {
            calculateNewValue(value, "-");
          } else if (value && !error) {
            setValue((value) => value + "-");
          }
        }}
      >
        -
      </Button>
      <Button
        cx="calc__btn  btn__mul"
        onClick={() => {
          if (hasSign(value)) {
            calculateNewValue(value, "*");
          } else if (value && !error) {
            setValue((value) => value + "*");
          }
        }}
      >
        *
      </Button>
      <Button
        cx="calc__btn  btn__eq"
        onClick={() => {
          if (hasSign(value)) {
            calculateNewValue(value, "");
          }
        }}
      >
        =
      </Button>
      <Button
        cx="calc__btn  btn__cl"
        onClick={() => {
          setValue("");
        }}
      >
        Cl
      </Button>
      {JSON.stringify(value, null, 2)}
    </div>
  );
};
