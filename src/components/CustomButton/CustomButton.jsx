import "./CustomButton.scss"

export default function CustomButton({ children, ...attributes }) {
  return (
    <button
      type="button"
      className="submit-button"
      {...attributes}
    >
      {children}
    </button>
  );
}