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
				<Link to='/history'>Le COBOL c'est quoi ?</Link>
			</li>
			<li>
				<Link to='/bases'>Les bases</Link>
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
