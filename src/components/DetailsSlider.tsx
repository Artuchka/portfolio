import React, { useEffect, useRef, useState } from "react"
import {
	PanInfo,
	motion,
	useAnimation,
	useMotionValue,
	useTransform,
} from "framer-motion"
import {
	listingOpenState,
	projectsState,
	selectedProjectIDState,
} from "../store/store"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { css } from "@emotion/react"

const style = {
	wrapper: css({
		position: "fixed",
		// top: "50%",
		// left: "50%",
		inset: "0",
		zIndex: 10000,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}),
	backdrop: css({
		position: "fixed",
		inset: "0",

		backgroundColor: "black",
	}),
	listing: css({
		zIndex: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "1rem",
	}),
	listingItem: css({
		backgroundColor: "white",
	}),
}
export const DetailsSlider = () => {
	const setListingOpen = useSetRecoilState(listingOpenState)

	const [selectedProjectID, setSelectedProjectID] = useRecoilState(
		selectedProjectIDState
	)
	const [pointerEvents, setPointerEvents] = useState(true)

	const projects = useRecoilValue(projectsState)
	const listingControls = useAnimation()
	const offset = useMotionValue(0)

	const handlePanEnd = (e: any, info: PanInfo) => {
		// setPointerEvents(true)
	}

	const handlePanStart = (e: any, info: PanInfo) => {
		// setPointerEvents(false)
	}

	const handlePan = (e: any, info: PanInfo) => {
		listingControls.set({ x: info.offset.x })
	}

	useEffect(() => {
		listingControls.start({
			opacity: 1,
			transition: {
				duration: 1,
			},
		})
	}, [])

	return (
		<div className="layout-cards" css={style.wrapper}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={listingControls}
				exit={{
					opacity: 0,
				}}
				css={style.listing}
				layout
				style={{
					x: offset,
					userSelect: "none",
				}}
				onPanStart={handlePanStart}
				onPan={handlePan}
				onPanEnd={handlePanEnd}
			>
				{projects.map((card, i) => (
					<motion.div key={card.uuid} css={style.listingItem}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nihil, sunt. Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. Ratione totam blanditiis id tempore
						recusandae expedita possimus iste laborum iusto vel!
					</motion.div>
				))}
			</motion.div>
			<motion.div
				className="dim-layer"
				css={style.backdrop}
				onClick={() => setListingOpen(false)}
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.3 }}
				exit={{
					opacity: 0,
				}}
				transition={{ duration: 1 }}
			/>
		</div>
	)
}
