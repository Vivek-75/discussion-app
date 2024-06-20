import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const backendUrl = 'http://localhost:3000';


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: backendUrl }),
  endpoints: (builder) => ({
    
  }),
})


export const {
  } = api