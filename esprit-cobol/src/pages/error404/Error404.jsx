import React from "react";
import { Link } from "react-router-dom";
import "./error404.scss";

const Error404 = () => (
	<div className='not-found'>
		<h1>404</h1>
		<p>Page non trouvée. Retournez à l'accueil :</p>
		<Link to='/' className='backLink'>
			Accueil
		</Link>
	</div>
);

export default Error404;
