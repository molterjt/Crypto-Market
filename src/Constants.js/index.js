export const COIN_GEICKO_API = "https://api.coingecko.com/api/v3/coins/";
export const MARKET = "markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C200d"
export const COIN_GECKO_TOP_100 = COIN_GEICKO_API + MARKET;
export const COIN_CHART_DATA = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=max&interval=daily`

