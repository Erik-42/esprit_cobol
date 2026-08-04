import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import ScrollToTop from "./components/elements/scrollToTop/ScrollToTop";
import SkipLink from "./components/elements/skipLink/SkipLink";
import PageLoader from "./components/elements/pageLoader/PageLoader";
import "./styles/main.scss";

const Home = lazy(() => import("./pages/home/Home"));
const History = lazy(() => import("./pages/history/History"));
const Bases = lazy(() => import("./pages/bases/Bases"));
const Instructions = lazy(() => import("./pages/InstructionsCode/Instructions"));
const Logiciels = lazy(() => import("./pages/logiciels/logiciels"));
const Tutorials = lazy(() => import("./pages/tutorials/Tutorials"));
const Liens = lazy(() => import("./pages/liens/Liens"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Soutien = lazy(() => import("./pages/soutien/Soutien"));
const Error404 = lazy(() => import("./pages/error404/Error404"));
const TutorialDetails = lazy(
	() => import("./pages/tutorialDetails/TutorialDetails")
);

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className='app-wrapper'>
				<SkipLink />
				<Navbar />
				<div className='app-container' id='main-content' tabIndex={-1}>
					<Suspense fallback={<PageLoader />}>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/history' element={<History />} />
							<Route path='/bases' element={<Bases />} />
							<Route path='/instructions' element={<Instructions />} />
							<Route path='/logiciels' element={<Logiciels />} />
							<Route path='/tutorials' element={<Tutorials />} />
							<Route path='/tutorial/:id' element={<TutorialDetails />} />
							<Route path='/liens' element={<Liens />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/soutien' element={<Soutien />} />
							<Route path='*' element={<Error404 />} />
						</Routes>
					</Suspense>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
