'use client';

import { useContext, createContext, useState } from "react";

interface NotFoundContextType {
   isNotfound: boolean,
   setIsNotFound: (value: boolean) => void;
}

const NotFoundContext = createContext<NotFoundContextType | undefined>(undefined);


export function NotFoundProvider({children} : {children: React.ReactNode}){
const [isNotfound, setIsNotFound] = useState(false);   

return(
<NotFoundContext.Provider value={{ isNotfound, setIsNotFound }}>
{children}
</NotFoundContext.Provider>
)
}


export function useNotFound(){
const context = useContext(NotFoundContext);
if(!context){
 throw new Error("useNotFound must be used within NotFoundProvider");   
}
return context
}