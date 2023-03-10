import React, { FC } from "react"
import { Variants, motion } from "framer-motion"
import { ProjectItem } from "../store/store"
import { btn, btnLight } from "../styles/emotion/btn"
import { BsGithub } from "react-icons/bs"
import { AiOutlineEye } from "react-icons/ai"
import { css } from "@emotion/react"
import { primaryText } from "../styles/emotion/vars"
import { mq } from "../styles/motion"

const variatnsItem: Variants = {
	visible: (i: number) => {
		return {
			opacity: 1,
			transition: {
				delay: i * 0.1,
			},
		}
	},
	hidden: {
		opacity: 0,
	},
}
const style = {
	wrapper: css({
		color: primaryText,
		display: "flex",
		flexDirection: "column",
		gap: "1.5rem",
		padding: "1rem",
		".stack-wrapper": {
			display: "flex",
			flexDirection: "column",
			gap: "1rem",
		},
	}),

	linksWrapper: css({
		display: "grid",
		gridTemplateColumns: "repeat(1,1fr)",
		width: "max-content",
		rowGap: "0.3rem",
		columnGap: "1rem",
		[mq[1]]: {
			gridTemplateColumns: "repeat(2,1fr)",
		},
	}),
	stackWrapper: css({
		display: "flex",
		gap: "0.7rem",
		flexWrap: "wrap",
		paddingInline: "1rem",
	}),

	stackItem: css({
		border: "1px solid var(--primary-text)",
		padding: "1rem",
		color: primaryText,
		textDecoration: "none",
		display: "inline-block",
	}),
	sectionWrapper: css({
		display: "flex",
		gap: "0.5rem",
		// paddingInline: "1rem",
		flexDirection: "column",
	}),
}

export const ProjectDetailedCard: FC<ProjectItem> = (props) => {
	const {
		title,
		githubLink,
		demoLink,
		img,
		uuid,
		stack,
		description,
		githubBackendLink,
		backendDocsLink,
	} = props
	// title: string
	// githubLink: string
	// demoLink: string
	// img: string
	// uuid: string

	// stack?: Partial<{ [key in StackKeys]: string[] }>
	// description?: string
	return (
		<div css={style.wrapper}>
			<h2>{title}</h2>
			<div className="buttons" css={style.linksWrapper}>
				<a target="_blank" href={githubLink}>
					<button css={btnLight}>
						<BsGithub /> Github {githubBackendLink && "Frontend"}
					</button>
				</a>
				<a target="_blank" href={demoLink}>
					<button css={btnLight}>
						<AiOutlineEye /> Demo
					</button>
				</a>

				{githubBackendLink && (
					<a target="_blank" href={githubBackendLink}>
						<button css={btnLight}>
							<AiOutlineEye /> Github Backend
						</button>
					</a>
				)}
				{backendDocsLink && (
					<a target="_blank" href={backendDocsLink}>
						<button css={btnLight}>
							<AiOutlineEye /> REST API Docs
						</button>
					</a>
				)}
			</div>

			<div className="stack-wrapper">
				{Number(stack?.front?.length) > 0 && (
					<div css={style.sectionWrapper} className="frontend">
						<h4>Frontend</h4>
						<motion.div css={style.stackWrapper}>
							{stack?.front?.map((title, index) => {
								return (
									<motion.div
										variants={variatnsItem}
										initial="hidden"
										animate="visible"
										custom={index}
										key={title}
										css={style.stackItem}
									>
										{title}
									</motion.div>
								)
							})}
						</motion.div>
					</div>
				)}
				{Number(stack?.back?.length) > 0 && (
					<div css={style.sectionWrapper} className="backend">
						<h4>Backend</h4>
						<motion.div css={style.stackWrapper}>
							{stack?.back?.map((title, index) => {
								return (
									<motion.div
										variants={variatnsItem}
										initial="hidden"
										animate="visible"
										custom={index}
										key={title}
										css={style.stackItem}
									>
										{title}
									</motion.div>
								)
							})}
						</motion.div>
					</div>
				)}
				{Number(stack?.overall?.length) > 0 && (
					<div css={style.sectionWrapper}>
						<h4>Stack</h4>
						<motion.div css={style.stackWrapper}>
							{stack?.overall?.map((title, index) => {
								return (
									<motion.div
										variants={variatnsItem}
										initial="hidden"
										animate="visible"
										custom={index}
										key={title}
										css={style.stackItem}
									>
										{title}
									</motion.div>
								)
							})}
						</motion.div>
					</div>
				)}
			</div>

			<div className="description" css={style.sectionWrapper}>
				<h4>Description</h4>
				<div className="text">
					{description
						?.trim()
						?.split("\n")
						.map((item) => {
							if (item.length === 0) return <br />
							return <p>{item}</p>
						})}
				</div>
			</div>
		</div>
	)
}
