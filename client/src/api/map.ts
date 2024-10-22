const baseUrl = "https://api.mapbox.com";
const access_token = import.meta.env.VITE_MAPBOX_API_KEY;

console.log(access_token);

export function searchAddress(query: string) {
  const params = new URLSearchParams({
    q: query,
    proximity: "ip",
    access_token,
  });

  return fetch(`${baseUrl}/search/searchbox/v1/forward?${params}`)
    .then((res) => res.json())
    .catch((error) => console.error(error.message));
}
