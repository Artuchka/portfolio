import React, { MouseEvent, useEffect, useRef, useState } from "react"
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
	selectedProjectUUIDState,
} from "../store/store"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { css } from "@emotion/react"
import { primaryBg, primaryText, secondaryBg } from "../styles/emotion/vars"

const style = {
	wrapper: css({
		position: "fixed",
		inset: "0",
		zIndex: 10000,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		// overflowX: "scroll",
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
	const [{ startX, isDragging }, setDragStart] = useState({
		startX: 0,
		isDragging: false,
	})
	const [pointerEvents, setPointerEvents] = useState(true)
	console.log({ selectedProjectIndex })
	const projects = useRecoilValue(projectsState)
	const selectedProjectUUID = useRecoilValue(selectedProjectUUIDState)
	const listingControls = useAnimation()
	const offset = useMotionValue(0)

	const showSelectedItem = () => {
		const itemWidth = getItemWidth()
		const newOffset =
			(projects.length - selectedProjectIndex - initialOffset.current) *
			itemWidth

		listingControls.start({ x: newOffset })
	}

	const getItemWidth = () => {
		const listingWidth = listingRef.current.getBoundingClientRect().width
		const itemWidth = listingWidth / projects.length
		return itemWidth
	}

	const handlePanEnd = (e: any, info: PanInfo) => {
		const itemWidth = getItemWidth()

		const createdOffset = info.offset.x

		console.log("--------------------")
		console.log({ itemWidth: itemWidth / 2 })
		console.log({ createdOffset })
		console.log("--------------------")
		if (Math.abs(createdOffset) < 100) {
			showSelectedItem()
		}

		if (createdOffset < itemWidth / 2) {
			handleNext()
		} else if (createdOffset > itemWidth / 2) {
			handlePrev()
		} else {
			showSelectedItem()
		}
	}

	const handlePanStart = (e: any, info: PanInfo) => {
		// setPointerEvents(false)
	}

	const handlePan = (e: any) => {
		// if (!isDragging) return
		// listingControls.set({ x: info.offset.x })
	}

	useEffect(() => {
		const foundIndex = projects.findIndex(
			(item) => item.uuid === selectedProjectUUID
		)
		if (foundIndex !== -1) setSelectedProjectIndex(foundIndex)
	}, [projects])

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

		showSelectedItem()
	}, [selectedProjectIndex])

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		setDragStart({
			startX: e.pageX,
			isDragging: true,
		})
	}

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return
		const diff = (startX - e.pageX) / 50
		// console.log({ setting: offset.get() - diff })

		listingControls.set({ x: offset.get() - diff })
	}

	const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return
		setDragStart((prev) => ({ ...prev, isDragging: false }))
		const diff = startX - e.pageX

		const itemWidth = getItemWidth()

		// console.log("--------------------")
		// console.log({ itemWidth: itemWidth / 2 })
		// console.log({ diff })
		// console.log("--------------------")
		if (Math.abs(diff) < 100) {
			showSelectedItem()
		}

		if (diff < 0 && Math.abs(diff) > itemWidth / 4) {
			handlePrev()
		} else if (diff > 0 && diff > itemWidth / 4) {
			handleNext()
		} else {
			showSelectedItem()
		}
	}

	return (
		<div
			className="layout-cards"
			css={style.wrapper}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseMove={handleMouseMove}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={listingControls}
				exit={{
					opacity: 0,
				}}
				transition={{
					type: "spring",
					duration: 1,
					stiffness: 300,
					damping: 50,
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

// const Flashcards = () => {
// 	const [{ startX, startScrollLeft, isDragging }, setDragStart] = useState({
// 		startX: 0,
// 		startScrollLeft: 0,
// 		isDragging: false,
// 	})
// 	const containerRef = useRef(document.createElement("div"))
// 	const cardRefs = useRef(new Array())
// 	useEffect(() => {
// 		const { scrollWidth, clientWidth } = containerRef.current
// 		const halfScroll = (scrollWidth - clientWidth) / 2
// 		containerRef.current.scrollLeft = halfScroll
// 	}, [containerRef.current])

// 	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
// 		setDragStart({
// 			startX: e.pageX - containerRef.current.offsetLeft,
// 			startScrollLeft: containerRef?.current?.scrollLeft,
// 			isDragging: true,
// 		})
// 	}
// 	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
// 		if (!isDragging || selectedCard) return
// 		const x = e.pageX - containerRef.current.offsetLeft
// 		const walk = x - startX
// 		containerRef.current.scrollLeft = startScrollLeft - walk
// 	}
// 	const selectCard = (card) => {
// 		cardRefs.current[card - 1].scrollIntoView({
// 			behavior: "smooth",
// 			block: "nearest",
// 			inline: "center",
// 		})
// 	}
// 	const handleCardMouseUp = (e: MouseEvent<HTMLDivElement>, card) => {
// 		if (isDragging) {
// 			const x = e.pageX - containerRef.current.offsetLeft
// 			const walk = x - startX
// 			if (Math.abs(walk) < 5) selectCard(card)
// 		} else selectCard(card)
// 	}
// 	return (
// 		<div
// 			className="flashcards"
// 			onMouseDown={handleMouseDown}
// 			onMouseUp={() =>
// 				setDragStart((prev) => ({ ...prev, isDragging: false }))
// 			}
// 			onMouseMove={handleMouseMove}
// 		>
// 			<div className="flashcards__container" ref={containerRef}>
// 				{cards.map((card, i) => (
// 					<motion.div
// 						className="card"
// 						key={card}
// 						ref={(el) => cardRefs.current.push(el)}
// 						onMouseUp={(e) => handleCardMouseUp(e, card)}

// 					/>
// 				))}
// 			</div>
// 		</div>
// 	)
// }
