const SEARCH_URL = "https://api.tvmaze.com/search/shows";
const SHOW_URL = "https://api.tvmaze.com/shows";

//*used SEARCH_URL
export const fetchShows = async (query: string) => {
  const response = await fetch(`${SEARCH_URL}?q=${query}`);
  if (!response.ok) {
    throw new Error("Error on calling API");
  }
  return await response.json();
};

//* used SHOW_URL
export const fetchShowsById = async (id: string | undefined) => {
  if (id) {
    const response = await fetch(`${SHOW_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Error on calling API");
    }
    return await response.json();
  }
};
