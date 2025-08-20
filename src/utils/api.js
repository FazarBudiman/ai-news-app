const api = (() => {

  async function getNewsFromNewsAPI() {
    const BASE_URL = import.meta.env.VITE_BASE_URL_NEWS_API;
    const API_KEY = import.meta.env.VITE_API_KEY_NEWS_API

    const response = await fetch(`${BASE_URL}/everything?q=artificial%20intelligence&language=en&pageSize=10&apiKey=${API_KEY}`);
    const responseJson = await response.json();
    const { status, articles } = responseJson;

    if (status !== 'ok') {
      throw new Error("Failed To Fetch Data");
    }

    return articles;
  }

  async function getNewsFromNewsData() {
    const BASE_URL = import.meta.env.VITE_BASE_URL_NEWS_DATA;
    const API_KEY = import.meta.env.VITE_API_KEY_NEWS_DATA

    const response = await fetch(`${BASE_URL}/latest?q=artificial%20intelligence&language=id,en&apikey=${API_KEY}`);
    const responseJson = await response.json();
    const { status, results } = responseJson;

    if (status !== 'success') {
      throw new Error("Failed to Fetch Data");
    }

    return results;
  }

  async function getNewsFromGNews() {
    const BASE_URL = import.meta.env.VITE_BASE_URL_G_NEWS;
    const API_KEY = import.meta.env.VITE_API_KEY_G_NEWS

    const response = await fetch(`${BASE_URL}/search?q="artificial intelligence"&lang=en&apikey=${API_KEY}`);
    const responseJson = await response.json();
    const { articles } = responseJson;

    if (!articles) {
      throw new Error("Failed to Fetch Data");
    }

    return articles;
  }

  return {
    getNewsFromNewsAPI,
    getNewsFromNewsData,
    getNewsFromGNews,
  };
})();

export default api;