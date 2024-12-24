import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    const [restaurantData, setRestaurantData] = useState(resList)
    return <>
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