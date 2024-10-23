export function getTrees() {
  return fetch("http://localhost:8080/trees")
    .then((res) => res.json())
    .catch((error) => console.error(error.message));
}

export function postTree(data) {
  return fetch("http://localhost:8080/trees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tree_tenders_group: data.tree_tenders_group,
      tree_id: data.tree_id,
      season_planted: data.season_planted,
      address: data.address,
      site_id: data.site_id,
      location_notes: data.location_notes,
      species: data.species,
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.error(error.message));
}
