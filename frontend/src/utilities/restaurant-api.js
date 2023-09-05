const BASE_URL = process.env.REACT_APP_BASE_URL 

export async function index() {
    const res = await fetch (BASE_URL, {
        method: "GET",
    })
    if (res.ok) {
        return res.json();
      } else {
        return new Error("Invalid Request");
      }
    }

    export async function create(data) {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const res = await fetch(BASE_URL, config);
    
      console.log(res);
    
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Invalid Request");
      }
    }