import React, { FC, ReactNode, useEffect, useState } from "react"
import { AnimatePresence, Variants, motion } from "framer-motion"
import { Logo, greetingDuration } from "../components/Logo"
import { css } from "@emotion/react"
import { NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom"
import { Header } from "../components/Header"
import { primaryBg, primaryText } from "../styles/emotion/vars"
import { Landing } from "../pages/Landing"
import { About } from "../pages/About"
import { NotFound } from "../pages/NotFound"

const style = {
	layout: css({
		minHeight: "100vh",
		fontWeight: 100,
		backgroundColor: primaryBg,
	}),
}

// const variantsPageChange: Variants = {
// 	initial: {
// 	},
// 	animate: {
// 	},
// }
const varaints = {
	hidden: {
		filter: "blur(10px)",
		opacity: 0,
	},
	shown: {
		filter: "blur(0)",
		transitionDuration: `${greetingDuration}s`,
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
} as Variants

export const DefaultLayout: FC = () => {
	const location = useLocation()

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
	}, [location.pathname])
	return (
		<motion.div css={style.layout}>
			<Header />
			<motion.div
				css={css({
					// minHeight: "100vh",
					maxWidth: "900px",
					paddingTop: "3rem ",
					paddingInline: "3rem ",
					marginInline: "auto",
					color: primaryText,
				})}
				variants={varaints}
				initial="hidden"
				animate="shown"
			>
				<Outlet />
			</motion.div>
		</motion.div>
	)
}
