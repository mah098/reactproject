import ResCard from "./ResCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [restaurantData, setRestaurantData] = useState([])
    let [filteredResData, setFilteredResData] = useState([])
    const [textSearch, setTextSearch] = useState("")

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const APIResponse = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await APIResponse.json();
        //optional chaining
        setRestaurantData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log("component rendered");
    // if (restaurantData.length === 0)
    //     return <h1>Loading...</h1>
return restaurantData?.length === 0 ? <Shimmer/> : <>
            <div className="filter-section">
                <div className="search-box">
                    <input className="text-box" type="text" placeholder="search..." name="search-box" value={textSearch} onChange={(e)=> {
                        setTextSearch(e.target.value);
                    }}></input>
                    <button className="btn" onClick={() => {
                        filteredList = restaurantData.filter(
                            (res) => res.info.name.toLowerCase().includes(textSearch.toLowerCase())
                        );
                        console.log(filteredList.length);
                        // filteredList.length >0 ? setFilteredResData(filteredList) : setRestaurantData()
                        setFilteredResData(filteredList);
                    }}  >Search</button>
                </div>
                <button className= "btn" onClick={ () => {
                    filteredList = restaurantData.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setFilteredResData(filteredList)
                }
                }>Top Restaurant</button>
            </div>
            <div className="card-container">
                    
                    {
                            filteredResData?.map((restaurant) => (
                                <ResCard key = {restaurant.info.id} resData = {restaurant} />  
                            ))
                    }

                    
            </div>
    </>
}

export default Body;