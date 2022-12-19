import { createContext } from "react";
interface AppContextInterface {
    token: string;
    setToken: (token: string) => void;
}
export const TokenContext = createContext<AppContextInterface>({} as AppContextInterface)