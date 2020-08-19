import React, { ReactElement, FC } from "react";

type DisplayType = {
  cx?: string;
  value: string;
};

export const Display: FC<DisplayType> = ({ value, cx }): ReactElement => {
  return (
    <div
      className={cx}
      data-testid="display"
      style={{ height: "48px", border: "1px solid #f5f5f6" }}
    >
      {value}
    </div>
  );
};
