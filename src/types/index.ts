import React, { Dispatch } from "react";

export interface PassOption {
  lower: boolean;
  upper: boolean;
  number: boolean;
  symbol: boolean;
}
export type ValueSetter = Dispatch<React.SetStateAction<any>>;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
