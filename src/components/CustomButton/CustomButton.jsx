import "./CustomButton.scss"

export default function CustomButton({ children, ...attributes }) {
  return (
    <button
      type="submit"
      className="submit-button"
      {...attributes}
    >
      {children}
    </button>
  );
}