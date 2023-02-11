import React, {
	MouseEvent,
	TouchEvent,
	useEffect,
	useRef,
	useState,
} from "react"
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
import { scrollbar } from "../styles/emotion/scrollbar"

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
	listingItem: [
		css({
			backgroundColor: "white",
			minWidth: "70vw",
			maxHeight: "70vh",
			overflowY: "auto",
		}),
		scrollbar("0.5rem", "rectangle"),
	],
	buttonsWrapper: css({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "1rem",
		position: "fixed",
		zIndex: 10,
		top: "87vh",
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

	const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
		setDragStart({
			startX: e.touches[0].pageX,
			isDragging: true,
		})
	}

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		setDragStart({
			startX: e.pageX,
			isDragging: true,
		})
	}

	const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
		if (!isDragging) return
		const diff = (startX - e.touches[0].pageX) / 50
		console.log({ setting: offset.get() - diff })

		listingControls.start({
			x: offset.get() - diff,
			transition: {
				duration: 0.001,
			},
		})
	}
	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return
		const diff = (startX - e.pageX) / 50
		console.log({ setting: offset.get() - diff })

		listingControls.start({
			x: offset.get() - diff,
			transition: {
				duration: 0.001,
			},
		})
	}

	const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
		if (!isDragging) return
		setDragStart((prev) => ({ ...prev, isDragging: false }))

		const diff = startX - e.changedTouches[0].pageX

		const itemWidth = getItemWidth()

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
	const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return
		setDragStart((prev) => ({ ...prev, isDragging: false }))

		const diff = startX - e.pageX

		const itemWidth = getItemWidth()

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
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			onTouchMove={handleTouchMove}
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
					return (
						<motion.div
							data-uuid={card.uuid}
							key={card.uuid}
							css={style.listingItem}
						>
							<h1>#{i}</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Placeat sint dicta unde amet
								perferendis nobis fugiat voluptates magni quos
								quisquam beatae dignissimos numquam, enim odio
								ratione assumenda molestiae veniam, a
								aspernatur! Architecto similique non quisquam
								pariatur! Pariatur quia odit itaque perferendis
								dolorum rerum ad minima, minus ab inventore
								natus voluptate dicta autem ex suscipit adipisci
								aliquid? Expedita id tempora dignissimos ducimus
								impedit, non, recusandae ullam corrupti alias
								perspiciatis modi illo? Officiis, ipsa
								repudiandae? Pariatur sit officia asperiores
								dicta saepe, maxime itaque enim id ipsum, unde
								tenetur, veniam laborum? Impedit quae dolores
								recusandae maiores nemo ad quibusdam aut illo
								vitae voluptatibus?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Placeat sint dicta unde amet
								perferendis nobis fugiat voluptates magni quos
								quisquam beatae dignissimos numquam, enim odio
								ratione assumenda molestiae veniam, a
								aspernatur! Architecto similique non quisquam
								pariatur! Pariatur quia odit itaque perferendis
								dolorum rerum ad minima, minus ab inventore
								natus voluptate dicta autem ex suscipit adipisci
								aliquid? Expedita id tempora dignissimos ducimus
								impedit, non, recusandae ullam corrupti alias
								perspiciatis modi illo? Officiis, ipsa
								repudiandae? Pariatur sit officia asperiores
								dicta saepe, maxime itaque enim id ipsum, unde
								tenetur, veniam laborum? Impedit quae dolores
								recusandae maiores nemo ad quibusdam aut illo
								vitae voluptatibus?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Placeat sint dicta unde amet
								perferendis nobis fugiat voluptates magni quos
								quisquam beatae dignissimos numquam, enim odio
								ratione assumenda molestiae veniam, a
								aspernatur! Architecto similique non quisquam
								pariatur! Pariatur quia odit itaque perferendis
								dolorum rerum ad minima, minus ab inventore
								natus voluptate dicta autem ex suscipit adipisci
								aliquid?
							</p>
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
