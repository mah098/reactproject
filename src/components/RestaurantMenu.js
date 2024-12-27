import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer/>
    }
    const {name, totalRatingsString, costForTwoMessage} = resInfo?.cards[2].card.card.info;

  return <>
    <h1>{name}</h1>
    <p>{totalRatingsString} - <span>{costForTwoMessage}</span></p>
    </>
}

export default RestaurantMenu