import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => (
	<nav className='navbar' aria-label='Navigation principale'>
		<ul className='navbar__list'>
			<li className='navbar__item'>
				<Link className='navbar__link' to='/'>
					Accueil
				</Link>
			</li>
			<li className='navbar__item'>
				<Link className='navbar__link' to='/history'>
					Le COBOL c'est quoi ?
				</Link>
			</li>
			<li className='navbar__item'>
				<Link className='navbar__link' to='/bases'>
					Les bases
				</Link>
			</li>
			<li className='navbar__item'>
				<Link className='navbar__link' to='/instructions'>
					Les instructions
				</Link>
			</li>
			<li className='navbar__item'>
				<Link className='navbar__link' to='/logiciels'>
					Les logiciels
				</Link>
			</li>
			<li className='navbar__item'>
				<Link className='navbar__link' to='/tutorials'>
					Tutoriels
				</Link>
			</li>
			<li className='navbar__item'>
				<Link className='navbar__link' to='/contact'>
					Contact
				</Link>
			</li>
			<li className='navbar__item'>
				<Link className='navbar__link' to='/soutien'>
					Soutien
				</Link>
			</li>
		</ul>
	</nav>
);

export default Navbar;
