import React, { FC } from "react"
import { motion } from "framer-motion"
import { css } from "@emotion/react"

const style = {
	wrapper: css({
		display: "flex",
		gap: "0.3rem",
		// flexWrap: "wrap",
		justifyContent: "center",
	}),
}

export const TextAnimation: FC<{ text: string }> = ({ text }) => {
	const letters = text.split("")

	return (
		<div css={style.wrapper}>
			{letters.map((letter, index) => {
				const randomY = `${Math.round(Math.random() * 200 - 100)}vh`
				const randomX = `${Math.round(Math.random() * 200 - 100)}vw`

				return (
					<motion.h1
						key={index}
						initial={{ x: randomX, y: randomY }}
						animate={{ x: "0", y: "0" }}
						transition={{
							duration: 0.8,
							ease: [0.53, 0.1, 0.34, 1.03],
						}}
					>
						{letter}
					</motion.h1>
				)
			})}
		</div>
	)
}
