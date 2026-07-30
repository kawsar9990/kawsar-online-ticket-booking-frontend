'use client';

import { useContext, createContext, useState, ReactNode } from "react";
import { GlobalLoader } from "@/components/ui/loaders/GlobalLoader";

interface LoaderContextType{
    showLoader: () => void;
    hideLoader: () => void
}

const LoaderContext = createContext<LoaderContextType>({
    showLoader: () => {},
    hideLoader: () => {}
});

export function LoaderProvider({ children } : {children: ReactNode}){

const [loading, setLoading] = useState<boolean>(false);

const showLoader = () => setLoading(true);
const hideLoader = () => setLoading(false);


return(
<LoaderContext.Provider value={{ showLoader, hideLoader }}>
<GlobalLoader show={loading}/>
{children}
</LoaderContext.Provider>
);
}

export const useLoader = () => useContext(LoaderContext)