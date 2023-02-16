import React from "react"
import { ProjectGridItem } from "./ProjectGridItem"
import { useRecoilValue } from "recoil"
import { projectsState } from "../store/store"
import { css } from "@emotion/react"
import { mq } from "../styles/motion"
import { motion } from "framer-motion"

const style = {
	wrapper: css({
		display: "grid",
		gap: "1rem",
		width: "100%",
		paddingBottom: "10rem",
		[mq[1]]: {
			gridTemplateColumns: "repeat(2,1fr)",
		},
		[mq[2]]: {
			gridTemplateColumns: "repeat(3,1fr)",
		},
	}),
}
const gridVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const gridItemVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
}

export const ProjectsGrid = () => {
	const projects = useRecoilValue(projectsState)
	return (
		<motion.div
			variants={gridVariants}
			initial="hidden"
			animate="show"
			css={style.wrapper}
		>
			{projects.map((item) => {
				return (
					<motion.div variants={gridItemVariants}>
						<ProjectGridItem key={item.uuid} {...item} />
					</motion.div>
				)
			})}
		</motion.div>
	)
}
