import { Dispatch, SetStateAction } from "react";

export default interface Theme {
  isDarkTheme?: boolean;
  setIsDarkTheme?: Dispatch<SetStateAction<boolean>>;
}
