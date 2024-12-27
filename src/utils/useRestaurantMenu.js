import { useEffect, useState } from "react";
import { API_RES } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(API_RES + resId);
        const json = await data.json();

        setResInfo(json.data);
    }

  return resInfo;
}

export default useRestaurantMenu;