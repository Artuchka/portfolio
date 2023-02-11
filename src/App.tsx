import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Landing } from "./pages/Landing"
import "./styles/main.scss"
import { DefaultLayout } from "./Layouts/DefaultLayout"
import { NotFound } from "./pages/NotFound"
import { About } from "./pages/About"
import { AnimatePresence } from "framer-motion"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route path="/" element={<Landing />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
