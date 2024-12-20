import React from "react";
import "./button.scss";

const Button = ({
	label,
	onClick,
	type = "button",
	className = "",
	disabled = false,
}) => {
	return (
		<button
			type={type}
			className={`customBtn ${className}`}
			onClick={onClick}
			disabled={disabled}>
			{label}
		</button>
	);
};

export default Button;
