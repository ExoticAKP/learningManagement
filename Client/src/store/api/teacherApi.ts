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
export const teacherApi = createApi({
    reducerPath: "teacherApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://localhost:3000/api/` }),
    endpoints: (builder) => ({
        teachersignup: builder.mutation({

            query: ({name, email, password}) => ({
                url: `teacher/signup`,
                method: "POST",
                body: {name, email, password},
            }),



        }), 
        
        teacherlogin:builder.mutation({
            query: ({email, password}) => ({
                url: `teacher/login`,
                method: "POST",
                body: {email, password},
            }),
        
        
        })
        
})})
export const { useTeachersignupMutation,useTeacherloginMutation } = teacherApi



