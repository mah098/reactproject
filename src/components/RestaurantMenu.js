import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import { API_RES } from '../utils/constants';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams()

    useEffect(()=> {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const menuRes = await fetch(API_RES + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const menuJson = await menuRes.json();
        console.log("menu json : ",menuJson);
        setResInfo(menuJson.data);
        console.log(menuJson.data)
    }

    if (resInfo === null) {
        return <Shimmer/>
    }
    const {name, totalRatingsString, costForTwoMessage} = resInfo?.cards[2].card.card.info;

  return <>
    <h1>{name}</h1>
    <p>{totalRatingsString} - <span>{costForTwoMessage}</span></p>
    {/* <h2>Menu</h2>
    <ul>
        <li>Biryani</li>
        <li>Rogan Josh</li>
        <li>Malai tikka</li>
    </ul> */}

    </>
}

export default RestaurantMenu