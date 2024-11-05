import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext=createContext("");

export const ApiProvider=({children})=>{
    const [termekLista, setTermekLista] = useState([])
    const getAdat= async(vegpont) => {
        try {
            const response = await myAxios.get(vegpont)
            setTermekLista(response.data)
        } catch (err) {
            console.log("hiba");
        } finally {

        }
    };

    //aszinkron hivások kezelése useEffect hook
    useEffect(() =>{
        getAdat('/products');
        }, []); 
    
    return(
        <ApiContext.Provider value={{termekLista}}>
            {children}
        </ApiContext.Provider>
    );
}