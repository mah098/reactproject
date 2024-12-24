import { RES_IMAGE } from "../utils/constants";

const ResCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, sla, cuisines, areaName} = resData.info;
     return <>
              <div className="card">
                     <div style={{height: "170px"}}>
                             <img src={RES_IMAGE + cloudinaryImageId} alt="res-image"/>
                     </div>
                     <h1 className="rest-name">{name}</h1>
                     <div className="highlight">
                             <span>{avgRating}</span><span>{sla.slaString}</span>
                     </div>
                     <p>{cuisines.join(", ")}</p>
                     <p>{areaName}</p>
              </div>
      </>
}

export default ResCard;