const API_BASE_URL = process.env.API_BASE_URL
//GET Search Results
export async function index() {
    const res = await fetch (API_BASE_URL, {
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
        },
        body: JSON.stringify(data),
      };

      const res = await fetch(API_BASE_URL, config);
    
      console.log(res);
    
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Invalid Request");
      }
    }