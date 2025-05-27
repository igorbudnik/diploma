import { createContext } from "react";
import { IPlace } from "./App";

type StateContextType = {
  mapState: string;
  setMapState: React.Dispatch<React.SetStateAction<string>>;
};

type DataContextType = {
  dataState: IPlace[];
  setDataState: React.Dispatch<React.SetStateAction<IPlace[]>>;
};

export const UserContext = createContext<null | StateContextType>(null);
export const DataContext = createContext<null | DataContextType>(null);
