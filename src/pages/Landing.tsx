import React, { useEffect, useState } from "react"
import { Variants, motion } from "framer-motion"
import { css } from "@emotion/react"
import { TextAnimation } from "../components/TextAnimation"
import { Biceps } from "../components/Biceps"

const style = {
	wrapper: css({
		// paddingBottom: "10rem",

		display: "flex",
		gap: "0.3rem",
		// flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "flex-end",
		// position: "absolute",
		// top: "20%",
		// left: "50%",
		// translate: "-50% 0",
		width: "100%",
	}),
}

const varaints = {
	hidden: {},
	shown: {},
} as Variants

export const Landing = () => {
	useEffect(() => {
		document.title = "Artuchka"
	}, [])
	return (
		<div>
			<div css={style.wrapper}>
				<Biceps left />
				<TextAnimation text="Your problem ≡ my task" />
				<Biceps right />
			</div>
		</div>
	)
}
