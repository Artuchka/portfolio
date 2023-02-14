import { css } from "@emotion/react"
import { motion } from "framer-motion"
import { ReactNode } from "react"

const outlineVariants = {
	default: {
		strokeWidth: 0,
		pathLength: 0,
		stroke: "grey",
		transition: { duration: 0.5, ease: "easeOut" },
	},
	hover: {
		strokeWidth: 0.5,
		pathLength: 1,
		stroke: "#BF4D00",
		transition: { duration: 0.5, ease: "easeOut" },
	},
}

const textVariants = {
	default: {
		color: "grey",
	},
	hover: {
		color: "#eaeef5",
		transition: {
			duration: 0.3,
		},
	},
}

const style = {
	hoverButton: css({
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		position: "relative",
		cursor: "pointer",
		width: "100px",
		height: "100px",
	}),
	hoverButtonText: css({
		position: "absolute",
		fontFamily: '"Work Sans", sans-serif',
		color: "#eaeef5",

		textAlign: "center",
		userSelect: "none",
	}),
}

export function HoverButton({ children }: { children: ReactNode }) {
	return (
		<motion.div
			whileHover="hover"
			initial="default"
			animate="default"
			css={style["hoverButton"]}
		>
			<motion.p variants={textVariants} css={style["hoverButtonText"]}>
				{children}
			</motion.p>
			<motion.svg
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					variants={outlineVariants}
					strokeWidth="1"
					fill="none"
					stroke="grey"
					d="M 0, 0 H 100 V 100 H 0 Z"
				/>
			</motion.svg>
		</motion.div>
	)
}
