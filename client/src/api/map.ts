const baseUrl = "https://api.mapbox.com";
const access_token =
  "pk.eyJ1IjoiYW1hbGRhcmU5MyIsImEiOiJjbTIyYnQ1a2wwNWY3MnFvZjFsc2ttYzF3In0.tfl5F4w0_7Yxl3Td45jBlw";

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
