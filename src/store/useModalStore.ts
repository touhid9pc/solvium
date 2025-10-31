import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  isStakeOpen: boolean;

  openModal: () => void;
  closeModal: () => void;

  openStakeModal: () => void;
  closeStakeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  isStakeOpen: false,

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),

  openStakeModal: () => set({ isStakeOpen: true }),
  closeStakeModal: () => set({ isStakeOpen: false }),
}));
