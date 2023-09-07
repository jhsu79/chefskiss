const BASE_URL = process.env.REACT_APP_BASE_URL 
const OTHER_URL = process.env.REACT_APP_OTHER_BASE_URL
console.log(BASE_URL)
console.log(OTHER_URL)
//Connect backend to frontend for API. 


export async function index() {
    const res = await fetch (OTHER_URL, {
        method: "GET",
    })
    if (res.ok) {
        return res.json();
      } else {
        return new Error("Invalid Request");
      }
    }

    //POST Search to get the results.  
    export async function create(data) {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": tokens
        },
        body: JSON.stringify(data),
      };

      const res = await fetch(OTHER_URL, config);
    
      console.log(res);
    
      if (res.ok) {
        const data = await res.json() 
        console.log(data)
        ///Set State Data variable => display//Get this to searchResults list (by either lifting state or useContext)
      } else {
        throw new Error("Invalid Request");
      }
    }