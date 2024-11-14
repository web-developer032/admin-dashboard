import baseApi from "../api";

const pokemonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `/pokemon/${name}`,
    }),
  }),
});
export const { useGetPokemonByNameQuery } = pokemonApi;
