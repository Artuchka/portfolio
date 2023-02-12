import React from "react"
import logoImg from "./../assets/avatar.jpeg"
import { Variants, motion } from "framer-motion"
import { css } from "@emotion/react"
import { NavLink } from "react-router-dom"

const logoStyle = css({
	position: "fixed",
	zIndex: "1000",
	color: "var(--primary-text)",
	left: "2rem",
	top: "2rem",
	y: "150%",
	x: 0,
	fontSize: "1rem",
})
const aStyle = css({
	textDecoration: "none",
	color: "var(--primary-text)",
	img: {
		borderRadius: "50%",
		aspectRatio: "1/1",
		width: "3rem",
		overflow: "hidden",
	},
})

export const greetingDuration = 1

const variants = {
	greeting: {
		left: "50%",
		top: "50%",
		y: "-50%",
		x: "-50%",
		fontSize: "2rem",
		fontWeight: "500",
	},
	toHeader: {
		left: "2rem",
		top: "1rem",
		y: "150%",
		x: 0,
		fontSize: "1rem",
		transitionDuration: `${greetingDuration}s`,
	},
} as Variants

export const Logo = () => {
	return (
		<motion.div
			// variants={variants}
			// initial="greeting"
			// animate="toHeader"
			css={logoStyle}
		>
			<NavLink css={aStyle} to="/">
				<img src={logoImg} alt="" />
			</NavLink>
		</motion.div>
	)
}
