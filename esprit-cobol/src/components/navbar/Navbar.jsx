import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => (
	<nav className='navbar'>
		<ul>
			<li>
				<Link to='/'>Accueil</Link>
			</li>
			<li>
				<Link to='/history'>Histoire du COBOL</Link>
			</li>
			<li>
				<Link to='/base'>Pourquoi et Comment ?</Link>
			</li>
			<li>
				<Link to='/exampleCode'>Exemples</Link>
			</li>
			<li>
				<Link to='/tutorials'>Tutoriels</Link>
			</li>
			<li>
				<Link to='/contact'>Contact</Link>
			</li>
		</ul>
	</nav>
);

export default Navbar;
