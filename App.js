import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Header = () => {
        return (
        <div class="header-container">
                <img className="logo" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt= "logo"/>
                <div className="nav-item">
                        <ul>
                                {["Home", "About", "Contact", "Cart", "Wish List"].map((item) => (
                                        <li>{item}</li>
                                ))}
                        </ul>
                </div>
        </div>
        );
}

const ResCard = (props) => {
       const {resData} = props;
       const {cloudinaryImageId, name, avgRating, sla, cuisines, areaName} = resData.info;
        return <>
                 <div className="card">
                        <div style={{height: "170px"}}>
                                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-image"/>
                        </div>
                        <h1 className="rest-name">{name}</h1>
                        <div className="highlight">
                                <span>{avgRating}</span><span>{sla.slaString} min</span>
                        </div>
                        <p>{cuisines.join(", ")}</p>
                        <p>{areaName}</p>
                 </div>
         </>
 }

 const resList = [
        {
            "info": {
                "id": "822315",
                "name": "Subway",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/3ab699af-9b2c-4107-9d66-88c5e4e540ae_822315.JPG",
                "locality": "Langford Road",
                "areaName": "Richmond Town",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "sandwich",
                    "Salads",
                    "wrap",
                    "Healthy Food"
                ],
                "avgRating": 4.4,
                "parentId": "2",
                "avgRatingString": "4.4",
                "totalRatingsString": "675",
                "sla": {
                    "deliveryTime": 22,
                    "lastMileTravel": 2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "2.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-24 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                            "description": "bolt!"
                        },
                        {
                            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "bolt!",
                                        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                    }
                                },
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹119"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-717f32f7-76a9-497b-81d3-fc70bdab163c"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/subway-langford-road-richmond-town-rest822315",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "43836",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
                "locality": "MG Road",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.4,
                "parentId": "630",
                "avgRatingString": "4.4",
                "totalRatingsString": "25K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 2.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-24 02:45:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹99"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-717f32f7-76a9-497b-81d3-fc70bdab163c"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "426730",
                "name": "Theobroma",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/18/f472656b-568d-4894-9a33-92c7436dbc8a_426730.jpg",
                "locality": "Lavelle Road",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Desserts",
                    "Bakery",
                    "Beverages"
                ],
                "avgRating": 4.7,
                "parentId": "1040",
                "avgRatingString": "4.7",
                "totalRatingsString": "5.1K+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 2.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-23 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹99"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.1",
                        "ratingCount": "422"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-717f32f7-76a9-497b-81d3-fc70bdab163c"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "58527",
                "name": "Cookie Man",
                "cloudinaryImageId": "9859734c76da085e6fa82ab6ff6f9324",
                "locality": "Ashok Nagar",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹140 for two",
                "cuisines": [
                    "Desserts",
                    "Ice Cream",
                    "Bakery"
                ],
                "avgRating": 4.4,
                "parentId": "2420",
                "avgRatingString": "4.4",
                "totalRatingsString": "611",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 3.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-23 22:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "3.7",
                        "ratingCount": "137"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-717f32f7-76a9-497b-81d3-fc70bdab163c"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/cookie-man-ashok-nagar-rest58527",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "312660",
                "name": "Samosa Party",
                "cloudinaryImageId": "ixgxvfu6ggvw1w1awgr1",
                "locality": "Brigade Road",
                "areaName": "Brigade Road",
                "costForTwo": "₹150 for two",
                "cuisines": [
                    "Fast Food",
                    "Snacks",
                    "Beverages",
                    "Chaat",
                    "North Indian",
                    "Street Food",
                    "Sweets",
                    "Desserts",
                    "Punjabi",
                    "Bakery"
                ],
                "avgRating": 4.7,
                "parentId": "6364",
                "avgRatingString": "4.7",
                "totalRatingsString": "4.4K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 3.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-23 22:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "15% OFF",
                    "subHeader": "ABOVE ₹2500",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.0",
                        "ratingCount": "25"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-717f32f7-76a9-497b-81d3-fc70bdab163c"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/samosa-party-brigade-road-rest312660",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "435405",
                "name": "Chaayos Chai+Snacks=Relax",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
                "locality": "Cunningham Road",
                "areaName": "RT Nagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Bakery",
                    "Beverages",
                    "Chaat",
                    "Desserts",
                    "Home Food",
                    "Italian",
                    "Maharashtrian",
                    "Snacks",
                    "Street Food",
                    "Sweets"
                ],
                "avgRating": 4.6,
                "parentId": "281782",
                "avgRatingString": "4.6",
                "totalRatingsString": "1.9K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 3.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-24 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹199"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.1",
                        "ratingCount": "370"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-717f32f7-76a9-497b-81d3-fc70bdab163c"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-cunningham-road-rt-nagar-rest435405",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "160120",
                "name": "Asha Sweet Center - Since 1951",
                "cloudinaryImageId": "egm3aym4fa73hst2tv9b",
                "locality": "Gandhi Bazaar",
                "areaName": "Basavanagudi",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Sweets",
                    "Snacks",
                    "Fast Food",
                    "Bakery",
                    "Beverages"
                ],
                "avgRating": 4.6,
                "veg": true,
                "parentId": "472555",
                "avgRatingString": "4.6",
                "totalRatingsString": "4.7K+",
                "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-23 21:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-717f32f7-76a9-497b-81d3-fc70bdab163c"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/asha-sweet-center-since-1951-gandhi-bazaar-basavanagudi-rest160120",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "41105",
                "name": "Nandhini Deluxe",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/c70fe58c-9c46-442d-8787-00c68f765b26_41105.jpg",
                "locality": "Kadubisanahalli",
                "areaName": "Basavanagudi",
                "costForTwo": "₹550 for two",
                "cuisines": [
                    "Andhra",
                    "Chinese"
                ],
                "avgRating": 4.3,
                "parentId": "2451",
                "avgRatingString": "4.3",
                "totalRatingsString": "14K+",
                "sla": {
                    "deliveryTime": 36,
                    "lastMileTravel": 1.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "1.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-23 23:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹749",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "3.9",
                        "ratingCount": "2.2K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-717f32f7-76a9-497b-81d3-fc70bdab163c"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/nandhini-deluxe-kadubisanahalli-basavanagudi-rest41105",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "12808",
                "name": "A2B - Adyar Ananda Bhavan",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/22/f9f4b5ea-0aae-4e66-937f-acfe4ee5ea9e_12808.jpg",
                "locality": "Shanti Nagar",
                "areaName": "Shanti Nagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "South Indian",
                    "North Indian",
                    "Sweets",
                    "Chinese"
                ],
                "avgRating": 4.6,
                "parentId": "22",
                "avgRatingString": "4.6",
                "totalRatingsString": "29K+",
                "sla": {
                    "deliveryTime": 36,
                    "lastMileTravel": 2.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "2.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-23 22:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹349",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.1",
                        "ratingCount": "12K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-717f32f7-76a9-497b-81d3-fc70bdab163c"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-shanti-nagar-rest12808",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "396751",
                "name": "Veg Meals by Lunchbox",
                "cloudinaryImageId": "tfoy8icqfgrzfjg2ole3",
                "locality": "Residency Road",
                "areaName": "Shantinagar",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Biryani",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.4,
                "veg": true,
                "parentId": "21938",
                "avgRatingString": "4.4",
                "totalRatingsString": "92",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 1.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-23 23:59:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹159"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-717f32f7-76a9-497b-81d3-fc70bdab163c"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/veg-meals-by-lunchbox-residency-road-shantinagar-rest396751",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "12396",
                "name": "New Shanthi Sagar",
                "cloudinaryImageId": "be4h2xc9cqcugdjydotn",
                "locality": "Basavanagudi",
                "areaName": "Jayanagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese"
                ],
                "avgRating": 4.3,
                "parentId": "1253",
                "avgRatingString": "4.3",
                "totalRatingsString": "53K+",
                "sla": {
                    "deliveryTime": 49,
                    "lastMileTravel": 3.9,
                    "serviceability": "SERVICEABLE",
                    "slaString": "45-50 mins",
                    "lastMileTravelString": "3.9 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-23 22:45:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "3.9",
                        "ratingCount": "1.6K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-717f32f7-76a9-497b-81d3-fc70bdab163c"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/new-shanthi-sagar-basavanagudi-jayanagar-rest12396",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "187384",
                "name": "Blue Tokai Coffee Roasters",
                "cloudinaryImageId": "1a0521375f07155eda2f1ed263206831",
                "locality": "Infantry Road",
                "areaName": "Central Bangalore",
                "costForTwo": "₹600 for two",
                "cuisines": [
                    "Cafe",
                    "Coffee",
                    "Beverages"
                ],
                "avgRating": 4.6,
                "parentId": "2682",
                "avgRatingString": "4.6",
                "totalRatingsString": "1.1K+",
                "sla": {
                    "deliveryTime": 41,
                    "lastMileTravel": 4.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "4.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-23 20:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Gourmet",
                                        "imageId": "newg.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "15% OFF",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.4",
                        "ratingCount": "223"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-717f32f7-76a9-497b-81d3-fc70bdab163c"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/bangalore/blue-tokai-coffee-roasters-infantry-road-central-bangalore-rest187384",
                "type": "WEBLINK"
            }
        }
] 

const Body = () => {
        return <>
                <h3>Search Bar</h3>
                <div className="card-container">
                        
                        {
                                resList.map((restaurant) => (
                                    <ResCard resData = {restaurant} />  
                                ))
                        }

                        
                </div>
        </>
}
const Footer = () => {
        return <>
                <footer>
                        <div className="separator"></div>
                        <p className="copyright">© 2024 Swiggy Limited</p>
                </footer>
        
        </>
}




const App = () => {
    return <>
        <div className="main">
                <Header/>
                <Body/>
                <Footer/>
        </div>
    
    </>

}

// const heading = React.createElement("h1",{ id: "heading" }, "This is h1 element");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(<App/>)