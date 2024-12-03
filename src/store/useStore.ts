import { create } from "zustand";

interface StoreState {
  greeting: string;
  isLoading: boolean;
}

interface StoreActions {
  setGreeting: (greeting: string) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useStore = create<StoreState & StoreActions>((set) => ({
  // Initial state
  greeting: "Hello from your Zustand store! 👋",
  isLoading: false,

  // Actions
  setGreeting: (greeting) => set({ greeting }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
