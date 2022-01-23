import api, { apiBaseUrl } from "./api";

const URL = {
  fetchDelivrPackagesUrl: `${apiBaseUrl}/search`,
};

export const fetchDelivrPackages = (payload) => {
  const formattedUrl = `${URL.fetchDelivrPackagesUrl}?text=${payload}&from=10&size=100`;
  return api.get(formattedUrl);
};
