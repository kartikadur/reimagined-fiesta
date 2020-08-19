import React, { ReactElement, FC, MouseEvent, ReactNode } from "react";

type ButtonType = {
  cx?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

export const Button: FC<ButtonType> = ({
  cx,
  children,
  onClick,
}): ReactElement => {
  return (
    <>
      <button className={cx} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
