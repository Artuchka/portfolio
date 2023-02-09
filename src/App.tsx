import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Landing } from "./pages/Landing"
import "./styles/main.scss"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
