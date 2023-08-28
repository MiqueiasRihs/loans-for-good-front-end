import './CustomInput.scss';

export default function CustomInput({ label, type, placeholder, value, onChange, options }) {
    const renderInput = () => {
        if (type === 'text') {
            return (
                <input
                    type="text"
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
                        <option key={Object.keys(option)} value={Object.values(option)}>
                            {Object.values(option)}
                        </option>
                    ))}
                </select>
            );
        }
    };

    return (
        <div className="input-container">
            <label className="input-label">{label}</label>
            {renderInput()}
        </div>
    );
}
