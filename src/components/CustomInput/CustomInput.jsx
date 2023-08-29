import './CustomInput.scss';

import ReactInputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input-field';

export default function CustomInput({ label, type, placeholder, value, onChange, name, options }) {
    const selectMask = (field_name) => {
        if(field_name === "document") return "999.999.999-99"
        if(field_name === "phone_number") return "(99) 99999-9999"
        if(field_name === "birth_date") return "99/99/9999"
    }

    const renderInput = () => {
        if (type === 'text') {
            return (
                <ReactInputMask
                    mask={selectMask(name)}
                    maskChar=""
                    className="input-field"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            );
        } else if (type === 'select') {
            return (
                <select
                    className="input-field"
                    value={value}
                    onChange={onChange}
                >
                    {options.map((option) => (
                        <option key={Object.keys(option)} value={Object.keys(option)}>
                            {Object.values(option)}
                        </option>
                    ))}
                </select>
            );
        } else if (type === 'number') {
            return (
                <CurrencyInput
                    className="input-field"
                    name={name}
                    placeholder={placeholder}
                    defaultValue={''}
                    decimalsLimit={2}
                    onChange={onChange}
                />
            )
        }
    };

    return (
        <div className="input-container">
            <label className="input-label">{label}</label>
            {renderInput()}
        </div>
    );
}
