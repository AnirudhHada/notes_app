import React from "react";

const Navbar = ({ handleToggleDarkMode }) => {
	return (
		<div className="header">
			<h1>Notes</h1>
			<button
				onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}
				className="save"
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Navbar;
