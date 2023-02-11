import React from "react"
import { btn } from "../styles/emotion/btn"
import { css } from "@emotion/react"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { primaryText } from "../styles/emotion/vars"

const style = {
	wrapper: css({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		color: primaryText,
	}),
}

export const NotFound = () => {
	return (
		<div css={style.wrapper}>
			<h1>Looks like we lost that page…</h1>
			<NavLink to="/" css={btn}>
				Go back home
			</NavLink>
		</div>
	)
}
