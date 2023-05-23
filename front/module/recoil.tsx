import { atom, useRecoilState } from "recoil";

export const currentLanguageState = atom({
  key: "language",
  default: "EN",
});
