import React, { useState } from "react";
import './CustomDropdown.css';
import DropdownArrow from '../../img/dropdown-arrow.svg';
import { useCustomDropdownContext } from "./CustomDropdownContext";

type OptionType = {
    id: number;
    name: string;
    subgroup?: OptionType[];
}

type OptionsGroup = {
    groupName?: string;
    list: OptionType[];
};

type DropdownData = {
    placeholder: string;
    options: OptionsGroup[];
}

interface CustomDropdownProps {
    data: DropdownData
}

const CustomDropdown = ({data}: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { selectedItems, setSelectedItems } = useCustomDropdownContext();
    const {placeholder, options} = data;

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, option: OptionType) => {
        const checked = e.target.checked;
        const id = option.id;

        if(checked) {
            setSelectedItems([...selectedItems, option]);
        } else {
            setSelectedItems(selectedItems.filter((item) => item.id !== id));
        }
    };

    const renderOptionsSubGroup = (option: OptionType) => (
        <div key={`group-${option.id}`}>
            <div className="dropdown-option" key={option.id}>
                <input
                    type="checkbox"
                    id={`option-${option.id}`}
                    name={`option-${option.id}`}
                    value={option.name}
                    checked={selectedItems.some((item: OptionType) => item.id === option.id)}
                    onChange={(e) => handleCheckboxChange(e, option)}
                />
                <label htmlFor={`option-${option.id}`} className="label">{option.name}</label>
            </div>
            {option.subgroup?.map((option) => (
                <div className="dropdown-option-subgroup" key={`subgroup-${option.id}`}>
                    <input
                        type="checkbox"
                        id={`option-${option.id}`}
                        name={`option-${option.id}`}
                        value={option.name}
                        checked={selectedItems.some((item: OptionType) => item.id === option.id)}
                        onChange={(e) => handleCheckboxChange(e, option)}
                    />
                    <label htmlFor={`option-${option.id}`} className="label">{option.name}</label>
                </div>
            ))}
        </div>
    )

    const renderOptions = (options: OptionsGroup) => (
        <div key={`${options.groupName}-${options.list[0].id}`}>
            {options.groupName && 
                <div className="options-group h4-roboto-—-15pt">{options.groupName}</div>
            }
            {options.list.map((option: OptionType) => (
                option.subgroup ? renderOptionsSubGroup(option) :
                    <div className="dropdown-option" key={option.id}>
                        <input
                            type="checkbox"
                            id={`option-${option.id}`}
                            name={`option-${option.id}`}
                            value={option.name}
                            checked={selectedItems.some((item: OptionType) => item.id === option.id)}
                            onChange={(e) => handleCheckboxChange(e, option)}
                        />
                        <label htmlFor={`option-${option.id}`} className="label">{option.name}</label>
                    </div>
            ))}
        </div>
    );

    return (
        <div className="dropdown">
            <div className="dropdown-trigger" onClick={toggleDropdown}>
                <span>{placeholder}</span>
                {isOpen 
                    ? <img className="arrow-up" src={DropdownArrow} alt="Open dropdown" />
                    : <img className="arrow-down" src={DropdownArrow} alt="Close dropdown" />
                }
            </div>

            {isOpen && (
                <div className="dropdown-options">
                    {options.map(renderOptions)}
                </div>
            )}
        </div>
    );
}

export type {
    OptionType
}

export default CustomDropdown;