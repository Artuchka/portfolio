import React, { FC, MouseEventHandler, ReactNode } from "react"
import { motion } from "framer-motion"
import { css } from "@emotion/react"

type propType = {
	children?: ReactNode
	onClick: MouseEventHandler<HTMLDivElement>
}
const style = {
	wrapper: css({
		backgroundColor: "#00000088",
		position: "absolute",
		left: 0,
		top: 0,
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}),
}
export const Backdrop: FC<propType> = ({ children, onClick }) => {
	return (
		<motion.div
			css={style.wrapper}
			onClick={onClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	)
}
