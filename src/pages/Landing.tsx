import React, { useState } from "react"
import { motion } from "framer-motion"
import { Testing } from "../components/Testing"
import { Logo } from "../components/Logo"
import { css } from "@emotion/react"

const style = {
	header: css({
		height: "100px",
		backgroundColor: "#00000057",
	}),
}

export const Landing = () => {
	return (
		<div className="landing-page">
			<header css={style.header}>
				<Logo />
			</header>
			<div className="testing">
				<Testing />
			</div>
		</div>
	)
}
