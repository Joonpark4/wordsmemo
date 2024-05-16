import { create } from "zustand";

export type Store = {
  active: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
};

export const useStore = create<Store>((set) => ({
  active: false,
  openModal: () => set({ active: true }),
  closeModal: () => set({ active: false }),
  toggleModal: () => set((state) => ({ active: !state.active })),
}));