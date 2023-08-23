import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiousResuest from "../lib/axiousRequest";




// export const useAddCategoryDataQuery = () => {
//     const queryClient = useQueryClient();
//     /** session management */
//     const { data: session } = useSession();O
//     return useMutation(
//       async (body) =>
//         await axiousResuest({
//           url: `/api/product/category-management/`,
          
//           method: "post",
//           data: body,
//           headers: {
//             Authorization: `Bearer ${session.accessToken}`,
//           },
//         }),
//       {
//         onSuccess: () => queryClient.invalidateQueries(["category-management"])
//       }
//     );
//   };


  export const useCategoryDataList = () => {
    /** session management */
    return useQuery(["category-management"], () =>
      axiousResuest({
        url: `https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website`,
        method: "get",
       
  
      })
    );
  };
  

// data update
  
// export const useUpdateCategoryData = (id) => {
//   const queryClient = useQueryClient();
//   /** session management */
//   const { data: session } = useSession();
//   return useMutation(
//     async (body) =>
//       await axiousResuest({
//         url: `/api/product/category-management/${id}/`,
//         method: "patch",
//         data: body,
//         headers: {
//           Authorization: `Bearer ${session.accessToken}`,
//         },
//       }),
//     {
//       onSuccess: () => queryClient.invalidateQueries(["category-management"]),
//     }
//   );
// };


// data deleting 
// export const useDeleteCategoryData = (id) => {
//   const queryClient = useQueryClient();
//   /** session management */
//   const { data: session } = useSession();
//   return useMutation(
//     async () =>
//       await axiousResuest({
//         url: `/api/product/category-management/${id}/`,
//         method: "delete",
//         headers: {
//           Authorization: `Bearer ${session.accessToken}`,
//         },
//       }),
//     {
//       onSuccess: () => queryClient.invalidateQueries(["category-management"]),
//     }
//   );
// };
