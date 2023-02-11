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
	selectedProjectIndexState,
} from "../store/store"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { css } from "@emotion/react"
import { primaryBg, primaryText, secondaryBg } from "../styles/emotion/vars"

const style = {
	wrapper: css({
		position: "absolute",
		inset: "0",
		zIndex: 10000,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
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
		minWidth: "70vw",
		minHeight: "30vw",
	}),
	buttonsWrapper: css({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "1rem",
		position: "fixed",
		zIndex: 10,
		top: "85vh",
	}),
	buttonItem: css({
		background: secondaryBg,
		border: "none",
		padding: "1rem",
		color: primaryText,
		cursor: "pointer",
	}),
}

export const DetailsSlider = () => {
	const setListingOpen = useSetRecoilState(listingOpenState)

	const listingRef = useRef(document.createElement("div"))
	const initialOffset = useRef(0)
	const [selectedProjectIndex, setSelectedProjectIndex] = useRecoilState(
		selectedProjectIndexState
	)
	const [pointerEvents, setPointerEvents] = useState(true)
	console.log({ selectedProjectIndex })
	const projects = useRecoilValue(projectsState)
	const listingControls = useAnimation()
	const offset = useMotionValue(0)

	// const handlePanEnd = (e: any, info: PanInfo) => {
	// 	// setPointerEvents(true)
	// }

	// const handlePanStart = (e: any, info: PanInfo) => {
	// 	// setPointerEvents(false)
	// }

	// const handlePan = (e: any, info: PanInfo) => {
	// 	listingControls.set({ x: info.offset.x })
	// }

	const handleNext = async () => {
		setSelectedProjectIndex((prev) => {
			if (prev + 1 < projects.length) {
				return prev + 1
			}
			return 0
		})
	}
	const handlePrev = async () => {
		setSelectedProjectIndex((prev) => {
			if (prev - 1 >= 0) {
				return prev - 1
			}
			return projects.length - 1
		})
	}

	useEffect(() => {
		listingControls.start({
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		})
	}, [])

	const calculateOffset = () => {
		console.log("recalculating offset")
		if (projects.length % 2 === 1) {
			initialOffset.current = Math.ceil(projects.length / 2)
		} else {
			initialOffset.current = projects.length / 2 + 0.5
		}
	}

	useEffect(() => {
		console.log({ len: projects.length })
		calculateOffset()
	}, [projects])
	useEffect(() => {
		if (initialOffset.current === 0) {
			calculateOffset()
		}
		const listingWidth = listingRef.current.getBoundingClientRect().width
		const itemWidth = listingWidth / projects.length
		const newOffset =
			(projects.length - selectedProjectIndex - initialOffset.current) *
			itemWidth

		console.log({ initialOffset: initialOffset.current })
		listingControls.start({ x: newOffset })
	}, [selectedProjectIndex])

	return (
		<div className="layout-cards" css={style.wrapper}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={listingControls}
				exit={{
					opacity: 0,
				}}
				css={style.listing}
				style={{
					x: offset,
					userSelect: "none",
				}}
				ref={listingRef}
			>
				{projects.map((card, i) => {
					let optsNext = {}

					return (
						<motion.div
							data-uuid={card.uuid}
							key={card.uuid}
							css={style.listingItem}
							{...optsNext}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nihil, sunt. Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Ratione totam
							blanditiis id tempore recusandae expedita possimus
							iste laborum iusto vel!
						</motion.div>
					)
				})}
			</motion.div>
			<motion.div
				css={style.buttonsWrapper}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{
					opacity: 0,
				}}
				transition={{ duration: 0.5 }}
			>
				<button css={style.buttonItem} onClick={handlePrev}>
					prev
				</button>
				<button css={style.buttonItem} onClick={handleNext}>
					next
				</button>
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
				transition={{ duration: 0.5 }}
			/>
		</div>
	)
}
