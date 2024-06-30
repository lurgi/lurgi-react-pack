import { create } from "zustand";

export interface IUseModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useModal = create<IUseModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
