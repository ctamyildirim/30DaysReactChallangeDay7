import { createContext, useContext } from "react";

export const MainContext = createContext();

export const BlackjackContext = () => useContext(MainContext);