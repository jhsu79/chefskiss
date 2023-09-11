const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function index() {
  const res = await fetch(BASE_URL, {
    method: "GET",
  });
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

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function show(id) {
  const URL = `${BASE_URL}/${id}`;
  const config = {
    method: "GET",
  };
  const res = await fetch(URL, config);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function destroy(id) {
  const URL = `${BASE_URL}/${id}`;
  const config = {
    method: "DELETE",
  };
  const res = await fetch(URL, config);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function add(input, id){
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({impression: input}),
  };
  const res = await fetch(`${BASE_URL}/${id}/impression`, config);

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}