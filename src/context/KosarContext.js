import { createContext, useState } from "react";

export const KosarContext=createContext("");

export const KosarProvider=({children})=>{
    const [kosarTermekLista, setKosarTermekLista] = useState([])
    
    function kosarba(props){
        if(!kosarTermekLista.includes(props)){
            const slista=[...kosarTermekLista]
            slista.push(props)
            setKosarTermekLista([...slista])
        }
    }

    return(
        <KosarContext.Provider value={{kosarTermekLista, kosarba}}>
            {children}
        </KosarContext.Provider>
    );
};