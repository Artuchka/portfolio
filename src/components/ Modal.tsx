import React, { FC, MouseEventHandler, ReactNode } from "react"
import { Variants, motion } from "framer-motion"
import { Backdrop } from "./Backdrop"
import { css } from "@emotion/react"

type propType = {
	isOpen: boolean
	children: ReactNode
	handleClose: MouseEventHandler<HTMLDivElement>
}

const style = {
	modal: css({
		width: "clamp(50%, 700px, 90%)",
		backgroundColor: "white",
		padding: "1rem",
		height: "min(50%, 300px)",
	}),
}

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.3,
			type: "spring",
			stiffness: 100,
			damping: 10,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
} as Variants

export const Modal: FC<propType> = ({ isOpen, children, handleClose }) => {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				css={style.modal}
				onClick={(e) => e.stopPropagation()}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				{children}
			</motion.div>
		</Backdrop>
	)
}
