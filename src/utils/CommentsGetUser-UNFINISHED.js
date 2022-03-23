// React stuff
import { useEffect, useState } from "react"; 

// Custom utils & components
import { getUserData } from "../utils/apiUtils.js"; // data fetching

export const CommentsGetUser = (suppliedUsername) => { 

     // useEffect: get user data from API
    let [userData, setUserData] = useState({});

    // let username = "happyamy2016";   // test value - returns object successfully


    useEffect(() => {
      getUserData(suppliedUsername).then((fetchedData) => {  
        setUserData(fetchedData);
      });
    }, [suppliedUsername]);

    return (userData);

}
