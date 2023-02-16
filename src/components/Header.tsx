import React, { useState } from "react"
import { Logo } from "./Logo"
import { NavLink } from "react-router-dom"
import { css } from "@emotion/react"
import { createPortal } from "react-dom"
import { primaryBg, primaryText, secondaryBg } from "../styles/emotion/vars"
import { mq } from "../styles/motion"
import { motion, useAnimation } from "framer-motion"

const naviLinks = [
	{ title: "Home", href: "/" },
	{ title: "Resume", href: "/resume" },
	{ title: "Projects", href: "/projects" },
	{ title: "About Me", href: "/about" },
	{ title: "Contact", href: "/contact" },
]
const style = {
	header: css({
		height: "100px",
		backgroundColor: secondaryBg,
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		padding: "1rem 2rem",
		backdropFilter: "blur(20px)",
		position: "sticky",
		top: 0,
		zIndex: 100,
	}),
	nav: css({
		display: "flex",
		gap: "1rem",
		textDecoration: "none",
	}),
	links: css({
		textDecoration: "none",
		display: "none",
		gap: "1rem",

		[mq[0]]: {
			display: "flex",
		},
	}),
	mobileLinks: css({
		textDecoration: "none",
		gap: "1rem",
		display: "flex",
		position: "fixed",
		backgroundColor: primaryBg,

		inset: "0",
		zIndex: 100,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		[mq[0]]: {
			display: "none",
		},

		".list": {
			gap: "3rem",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			position: "relative",
			top: "1.5rem",
			a: {
				fontSize: "2rem",
			},
		},
		".closeButton": {
			border: "none",
			backgroundColor: "transparent",
			color: primaryText,
			position: "absolute",
			right: "2rem",
			top: "2rem",
			fontSize: "3rem",
		},
	}),
	navLink: css({
		textDecoration: "none",
		color: "var(--primary-text)",
		fontWeight: "400",
		fontSize: "0.9rem",
	}),
	burger: css({
		display: "flex",
		flexDirection: "column",
		gap: "0.5rem",
		border: "none",
		backgroundColor: "transparent",
		span: {
			width: "2rem",
			height: "0.2rem",
			backgroundColor: primaryText,
		},
		cursor: "pointer",
		[mq[0]]: {
			display: "none",
		},
	}),
}

export const Header = () => {
	const mobileLinksControls = useAnimation()

	const handleMenuOpen = () => {
		mobileLinksControls.start({
			y: 0,
			x: 0,
		})
	}
	const handleMenuClose = async () => {
		await mobileLinksControls.start({
			x: "-100vw",
		})
		mobileLinksControls.set({
			x: "0",
			y: "-200vh",
		})
	}
	return (
		<>
			{createPortal(<Logo />, document.body)}
			<header css={style.header}>
				<nav css={style.nav}>
					<button css={style.burger} onClick={handleMenuOpen}>
						<span></span>
						<span></span>
					</button>
					<div css={style.links}>
						{naviLinks?.map((item) => {
							return (
								<NavLink
									key={item.href}
									css={style.navLink}
									to={item.href}
								>
									{item.title}
								</NavLink>
							)
						})}
					</div>
					{createPortal(
						<motion.div
							initial={{ y: "-200vh" }}
							animate={mobileLinksControls}
							transition={{
								duration: 0.6,
								ease: [0.53, 0.1, 0.34, 1.03],
							}}
							css={style.mobileLinks}
						>
							<button
								className="closeButton"
								onClick={handleMenuClose}
							>
								&times;
							</button>
							<div className="list">
								{naviLinks?.map((item) => {
									return (
										<NavLink
											key={item.href}
											css={style.navLink}
											to={item.href}
											onClick={handleMenuClose}
										>
											{item.title}
										</NavLink>
									)
								})}
							</div>
						</motion.div>,
						document.body
					)}
				</nav>
			</header>
		</>
	)
}
