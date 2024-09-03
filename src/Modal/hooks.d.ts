export interface IUseModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}
export declare const useModal: import("zustand").UseBoundStore<import("zustand").StoreApi<IUseModalStore>>;
