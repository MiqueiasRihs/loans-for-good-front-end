import './CustomInput.scss'

export default function CustomInput({ label, type, placeholder, value, onChange }) {
    return (
        <div className="input-container">
          <label className="input-label">{label}</label>
          <input
            type={type}
            className="input-field"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
    );
}