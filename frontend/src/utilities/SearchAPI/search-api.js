const OTHER_URL = process.env.REACT_APP_OTHER_BASE_URL;
//Connect backend to frontend for API.

export async function index() {
  const res = await fetch(OTHER_URL, {
    method: "GET",
  });
  if (res.ok) {
    return res.json();
  } else {
    return new Error("Invalid Request");
  }
}

//POST Search to get the results.
export async function fetchResultsFromYelp(data) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(OTHER_URL, config);

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error("Invalid Request");
  }
}
