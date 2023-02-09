import React from "react"
import { Variants, motion } from "framer-motion"
import { css } from "@emotion/react"

const logoStyle = css({
	position: "absolute",
	zIndex: "10",
	fontSize: "2rem",
	fontWeight: "500",
})

const variants = {
	greeting: {
		left: "50%",
		top: "50%",
		y: "-50%",
		x: "-50%",
	},
	toHeader: {
		left: 0,
		top: 0,
		y: 0,
		x: 0,
		fontSize: "1rem",
		fontWeight: "400",
		transitionDuration: "1s",
	},
} as Variants

export const Logo = () => {
	return (
		<motion.div
			variants={variants}
			initial="greeting"
			animate="toHeader"
			css={logoStyle}
		>
			Logo
		</motion.div>
	)
}
