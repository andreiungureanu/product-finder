import React, { useState } from "react";
import './CustomDropdown.css';
import DropdownArrow from '../../img/dropdown-arrow.svg';

type OptionType = {
    id: number;
    name: string;
}

type DropdownData = {
    placeholder: string;
}

interface CustomDropdownProps {
    data: DropdownData
}

const CustomDropdown = ({data: {placeholder}}: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState<OptionType[]>([] as unknown as OptionType[]);

    const options = [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
        { id: 3, name: "Option 3" },
    ];

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
                    {options.map((option) => (
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
            )}
        </div>
    );
}

export default CustomDropdown;