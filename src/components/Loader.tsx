import React, { ReactElement, FC } from "react";
import "./Loader.scss";

type LoaderType = {
  isLoading: boolean;
};
// spinner from https://codepen.io/supah/pen/BjYLdW?editors=0100
// <!--

// Follow me on
// Dribbble: https://dribbble.com/supahfunk
// Twitter: https://twitter.com/supahfunk
// Codepen: https://codepen.io/supah/

// -->
export const Loader: FC<LoaderType> = ({ isLoading }): ReactElement => {
  return (
    <>
      {isLoading && (
        <svg className="spinner" viewBox="0 0 50 50" data-testid="spinner">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
      )}
    </>
  );
};
