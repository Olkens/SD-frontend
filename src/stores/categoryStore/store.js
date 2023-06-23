import { create } from 'zustand'
import { baseCategoryClient } from "../../api/CategoryApiService"


export const useStore = create((set) => ({
    categories: {},
    fetch: async () => {
        const response = await baseCategoryClient.get('category')
        set({categories: await response})
    }
}))


// const useFishStore = create((set) => ({
//     fishies: {},
//     fetch: async (pond) => {
//       const response = await fetch(pond)
//       set({ fishies: await response.json() })
//     },
//   }))