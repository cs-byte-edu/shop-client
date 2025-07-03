import api from "../apiClient";

/* 
  login: async (credentials) => {
    const response = await api.post("api/auth/local", {
      identifier: credentials.email,
      password: credentials.password,
    });
    return response.data;
  },
*/

export const strapiService = () => {
  getSectionContent: async (pageSlug) => {
    const response = await api.get(pageSlug);
    return response.data.data.categories[0].products;
  };
};
