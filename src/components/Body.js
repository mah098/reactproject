import ResCard from "./ResCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
    const [restaurantData, setRestaurantData] = useState([])

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const APIResponse = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await APIResponse.json();
        //optional chaining
        setRestaurantData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // if (restaurantData.length === 0)
    //     return <h1>Loading...</h1>
return restaurantData.length === 0 ? <h1>Loading...</h1> : <>
            <button className= "btn" onClick={ () => {
                filteredList = restaurantData.filter(
                    (res) => res.info.avgRating > 4.5
                );
                setRestaurantData(filteredList);
            }
            }>Top Restaurant</button>
            <div className="card-container">
                    
                    {
                            restaurantData.map((restaurant) => (
                                <ResCard key = {restaurant.info.id} resData = {restaurant} />  
                            ))
                    }

                    
            </div>
    </>
}

export default Body;