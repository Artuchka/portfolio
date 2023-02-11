import React from "react"
import { Logo } from "./Logo"
import { NavLink } from "react-router-dom"
import { css } from "@emotion/react"
import { createPortal } from "react-dom"
import { secondaryBg } from "../styles/emotion/vars"

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
	navLink: css({
		textDecoration: "none",
		color: "var(--primary-text)",
		fontWeight: "400",
		fontSize: "0.9rem",
	}),
}

export const Header = () => {
	return (
		<>
			{createPortal(<Logo />, document.body)}
			<header css={style.header}>
				<nav css={style.nav}>
					<NavLink css={style.navLink} to="/">
						Home
					</NavLink>
					<NavLink css={style.navLink} to="/resume">
						Resume
					</NavLink>
					<NavLink css={style.navLink} to="/projects">
						Projects
					</NavLink>
					<NavLink css={style.navLink} to="/about">
						About Me
					</NavLink>
					<NavLink css={style.navLink} to="/contact">
						Contact
					</NavLink>
				</nav>
			</header>
		</>
	)
}
