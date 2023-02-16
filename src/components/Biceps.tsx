import React, { FC } from "react"
import leftBicepsImg from "./../assets/leftWhiteBiceps.png"
import rightBicepsImg from "./../assets/rightWhiteBiceps.png"
import { css } from "@emotion/react"
import { motion } from "framer-motion"
import { mq } from "../styles/motion"

const style = {
	wrapper: css({
		overflow: "hidden",
		width: "10rem",
		aspectRatio: "1/1",
		img: {
			width: "100%",
			height: "100%",
			color: "white",
		},
		display: "none",
		[mq[1]]: {
			display: "block",
		},
	}),
	plus: css({
		position: "absolute",
		zIndex: 10000,
	}),
}
const plusDelay = 1
export const Biceps: FC<{ left?: boolean; right?: boolean }> = ({
	left,
	right,
}) => {
	return (
		<motion.div css={style.wrapper}>
			<motion.img
				initial={{ y: "100%" }}
				animate={{ y: "0" }}
				transition={{
					duration: 0.8,
					ease: [0.53, 0.1, 0.34, 1.03],
					delay: 0.8,
				}}
				src={left ? leftBicepsImg : rightBicepsImg}
			/>

			<motion.span
				initial={{ y: "300%", x: left ? "-1rem" : "-5rem", opacity: 1 }}
				animate={{ y: "100%", opacity: 0 }}
				transition={{
					duration: 2,
					ease: "linear",
					repeat: Infinity,
					delay: plusDelay,
				}}
				css={style.plus}
			>
				+
			</motion.span>
			<motion.span
				initial={{ y: "300%", x: left ? "-3rem" : "-8rem", opacity: 1 }}
				animate={{ y: "0", opacity: 0 }}
				transition={{
					duration: 2,
					ease: "linear",
					repeat: Infinity,
					delay: plusDelay,
				}}
				css={style.plus}
			>
				+
			</motion.span>
			<motion.span
				initial={{ y: "300%", x: left ? "-2rem" : "-7rem", opacity: 1 }}
				animate={{ y: "-100%", opacity: 0 }}
				transition={{
					duration: 2,
					ease: "linear",
					repeat: Infinity,
					delay: plusDelay,
				}}
				css={style.plus}
			>
				+
			</motion.span>
		</motion.div>
	)
}
