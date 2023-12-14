import React from "react";
import { OptionType } from './CustomDropdown';

interface CustomDropdownContextValue {
    selectedItems: OptionType[];
    setSelectedItems: React.Dispatch<React.SetStateAction<OptionType[]>>;
}

export const CustomDropdownContext = React.createContext<CustomDropdownContextValue>({
    selectedItems: [],
    setSelectedItems: () => {},
});

export function useCustomDropdownContext() {
    const context = React.useContext(CustomDropdownContext);
    return context;
}