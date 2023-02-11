import React from "react"
import { ProjectsGrid } from "../components/ProjectsGrid"
import { DetailsSlider } from "../components/DetailsSlider"
import { createPortal } from "react-dom"
import { useRecoilValue } from "recoil"
import { listingOpenState } from "../store/store"
import { AnimatePresence } from "framer-motion"

export const Projects = () => {
	const isListingOpen = useRecoilValue(listingOpenState)
	return (
		<div>
			<h1>Projects</h1>
			<ProjectsGrid />
			<AnimatePresence>
				{isListingOpen && <DetailsSlider />}
			</AnimatePresence>
		</div>
	)
}
