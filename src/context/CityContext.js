import {useContext, createContext,useState, useEffect} from "react";

const CityContext=createContext();

export const CityProvider=({children})=>{
    const [city,setCity]=useState(localStorage.getItem('city')||'Isparta');
    const values={
        city,
        setCity
    }
    useEffect(()=>{
        localStorage.setItem('city',city)
    },[city])
    return<CityContext.Provider value={values}>{children}</CityContext.Provider>
}
export const UseCity=()=>useContext(CityContext);
export default CityContext;

