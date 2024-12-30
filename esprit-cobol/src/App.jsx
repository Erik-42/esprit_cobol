import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import Home from "./pages/home/Home";
import History from "./pages/history/History";
import Bases from "./pages/bases/Bases";
import Instructions from "./pages/InstructionsCode/Instructions";
import Logiciels from "./pages/logiciels/logiciels";
import Tutorials from "./pages/tutorials/Tutorials";
// import Exercices from "./pages/exercices/Exercices";
import Liens from "./pages/liens/Liens";
import Contact from "./pages/contact/Contact";
import Error404 from "./pages/error404/Error404";
// import Exercice1 from "./pages/tutorials/exercice1/exercice1";
// import Exercice2 from "./pages/tutorials/exercice1/exercice2";
// import Exercice3 from "./pages/tutorials/exercice1/exercice3";
import "./styles/main.scss";
import TutorialDetails from "./pages/tutorialDetails/TutorialDetails";

function App() {
	return (
		<Router>
			<div className='app-wrapper'>
				<Navbar />
				<div className='app-container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/history' element={<History />} />
						<Route path='/bases' element={<Bases />} />
						<Route path='/instructions' element={<Instructions />} />
						<Route path='/logiciels' element={<Logiciels />} />
						<Route path='/tutorials' element={<Tutorials />} />
						{/* <Route path='/tutorial/exercice1' element={<Exercice1 />} /> */}
						{/* <Route path='/tutorial/exercice2' element={<Exercice2 />} />
						<Route path='/tutorial/exercice3' element={<Exercice3 />} /> */}
						<Route path='/tutorial/:id' element={<TutorialDetails />} />
						{/* <Route path='/exercise/:id' element={<ExercisePage />} /> */}
						{/* <Route path='/exercices' element={<Exercices />} /> */}
						<Route path='/liens' element={<Liens />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='*' element={<Error404 />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
