import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";

// export const childApiSignup = createApi({
//     reducerPath: 'details',
//     baseQuery: fetchBaseQuery({ baseUrl: `https://localhost:3000/api/` }),
//     endpoints: (builder) => ({
//         getPokemonByName: builder.query<any, string>({
//         query: (user) => `child/signup`,
//         })
// })}) 
export const childApi = createApi({
    reducerPath: "childApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://localhost:3000/api/` }),
    endpoints: (builder) => ({
        childsignup: builder.mutation({

            query: ({name, email, password}) => ({
                url: `child/signup`,
                method: "POST",
                body: {name, email, password},
            }),



        }), 
        
        childlogin:builder.mutation({
            query: ({email, password}) => ({
                url: `child/login`,
                method: "POST",
                body: {email, password},
            }),
        
        
        })
        
})})
export const { useChildsignupMutation,useChildloginMutation } = childApi;



