import React, { ReactElement, FC } from "react";

type DisplayType = {
  cx?: string;
  value: string;
};

export const Display: FC<DisplayType> = ({ value, cx }): ReactElement => {
  return (
    <div className={cx} data-testid="display">
      {value}
    </div>
  );
};
