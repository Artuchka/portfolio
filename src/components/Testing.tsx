import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { css } from "@emotion/react"
import { Backdrop } from "./Backdrop"
import { Modal } from "./ Modal"

const style = {
	button: css({
		background: `linear-gradient(
        rgba(113, 115, 216, 0.823),
        rgba(221, 151, 22, 0.501)
    )`,
		border: "none",
		borderRadius: "0.5rem",
		padding: "1rem 2rem",
		color: "white",
	}),
}
export const Testing = () => {
	const [isOpen, setOpen] = useState(false)
	return (
		<div className="wrapper">
			<motion.button
				className="cool-btn"
				whileTap={{ scale: 0.9 }}
				whileHover={{ scale: 1.1 }}
				whileDrag={{ scale: 0.5 }}
				draggable={true}
				drag="x"
				dragConstraints={{
					left: 0,
					right: 200,
				}}
				onClick={() => {
					setOpen(true)
				}}
				css={style.button}
			>
				click me please!!!
			</motion.button>
			<AnimatePresence
				initial={false}
				mode="wait"
				onExitComplete={() => null}
			>
				{isOpen && (
					<Modal
						isOpen={isOpen}
						handleClose={() => {
							setOpen(false)
						}}
					>
						text Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Placeat quia quae recusandae, esse tempora atque
						perferendis voluptatum enim iusto cum?
					</Modal>
				)}
			</AnimatePresence>
		</div>
	)
}
