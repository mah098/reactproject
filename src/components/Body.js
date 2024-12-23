import ResCard from "./ResCard";
import resList from "../utils/mockData";
const Body = () => {
    return <>
            <h3>Search Bar</h3>
            <div className="card-container">
                    
                    {
                            resList.map((restaurant) => (
                                <ResCard key = {restaurant.info.id} resData = {restaurant} />  
                            ))
                    }

                    
            </div>
    </>
}

export default Body;