import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import Home from "./pages/home/Home";
import History from "./pages/history/History";
import Bases from "./pages/bases/Bases";
import ExampleCode from "./pages/exampleCode/ExampleCode";
import Logiciels from "./pages/logiciels/logiciels";
import Tutorials from "./pages/tutorials/Tutorials";
import Exercices from "./pages/exercices/Exercices";
import Liens from "./pages/liens/Liens";
import Contact from "./pages/contact/Contact";
import Error404 from "./pages/error404/Error404";

import "./styles/main.scss";

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
						<Route path='/exampleCode' element={<ExampleCode />} />
						<Route path='/logiciels' element={<Logiciels />} />

						<Route path='/tutorials' element={<Tutorials />} />
						<Route path='/exercices' element={<Exercices />} />
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
