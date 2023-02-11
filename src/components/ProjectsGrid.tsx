import React from "react"
import { ProjectGridItem } from "./ProjectGridItem"
import { useRecoilValue } from "recoil"
import { projectsState } from "../store/store"
import { css } from "@emotion/react"
import { mq } from "../styles/motion"

const style = {
	wrapper: css({
		display: "grid",
		gap: "1rem",
		width: "100%",
		[mq[1]]: {
			gridTemplateColumns: "repeat(2,1fr)",
		},
		[mq[2]]: {
			gridTemplateColumns: "repeat(3,1fr)",
		},
	}),
}

export const ProjectsGrid = () => {
	const projects = useRecoilValue(projectsState)
	return (
		<div css={style.wrapper}>
			{projects.map((item) => {
				return <ProjectGridItem key={item.uuid} {...item} />
			})}
		</div>
	)
}
