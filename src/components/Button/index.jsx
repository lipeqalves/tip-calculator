/* eslint-disable react/prop-types */
import "./button.css";

export const Button = ({ onClick, name, type , disabled }) => {
  return (
    <button className="btn-submit" onClick={onClick} type={type} disabled={disabled}>
    {name}
    </button>
  );
};
