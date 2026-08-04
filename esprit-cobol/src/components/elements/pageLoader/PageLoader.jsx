import React from "react";
import "./pageLoader.scss";

const PageLoader = () => (
	<div className='page-loader' role='status' aria-live='polite'>
		<span className='page-loader__text'>Chargement…</span>
	</div>
);

export default PageLoader;
