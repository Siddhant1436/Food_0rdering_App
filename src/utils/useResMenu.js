import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useResMenu = (resId) => {

    const [resInfo, setResInfo] = useState([]);

    useEffect(()=>{fetchData();}, []);

    const fetchData = async () =>{
        const info  = await fetch(MENU_URL+resId);

        const json = await info.json();

        setResInfo(json);
    };
    return resInfo;
};

export default useResMenu;