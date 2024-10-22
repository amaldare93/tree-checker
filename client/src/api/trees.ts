export function getTrees() {
  return fetch("http://localhost:8080/trees")
    .then((res) => res.json())
    .catch((error) => console.error(error.message));
}

export function postTree() {
  return fetch("http://localhost:8080/trees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: "709 Rockaway St",
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.error(error.message));
}
