import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      username: "",
      token: "",
      hydrated: false, // Track hydration status

      setUser: (username, token) => set({ username, token }),
      logout: () => set({ username: "", token: "" }),
      setHydrated: () => set({ hydrated: true }), // Set hydration to true
    }),
    {
      name: "auth-storage", // Key for localStorage
      getStorage: () => localStorage, // Use sessionStorage if preferred
      onRehydrateStorage: () => (state) => {
        // Callback when hydration completes
        state?.setHydrated();
      },
    }
  )
);

export default useAuthStore;
