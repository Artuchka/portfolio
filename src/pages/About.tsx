import React from "react"
import avatarImage from "./../assets/avatar.jpeg"
import { Variants, motion } from "framer-motion"
import { css } from "@emotion/react"
import { defaultTransition, mq } from "../styles/motion"
import { NavLink } from "react-router-dom"
import { primaryText } from "../styles/emotion/vars"

const style = {
	wrapper: css({
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		gap: "1rem",
		[mq[1]]: {
			gap: "2rem",
		},
	}),
	avatar: css({
		borderRadius: "50%",
		width: "8rem",
		aspectRatio: "1/1",
	}),
	aboutMe: css({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		gap: "2rem",
		[mq[1]]: {
			flexDirection: "row",
		},
	}),
	skillWrapper: css({
		display: "flex",
		gap: "0.7rem",
		flexWrap: "wrap",
		paddingInline: "1rem",
	}),
	skillItem: css({
		border: "1px solid var(--primary-text)",
		padding: "1rem",
		color: primaryText,
		textDecoration: "none",
		display: "inline-block",
	}),

	aboutWrapper: css({
		display: "grid",
		gridTemplateColumns: "1fr",
		gap: "2rem",
		[mq[1]]: {
			gridTemplateColumns: "1fr 2fr",
		},
	}),
}

const skills = [
	{ link: "/", title: "Javascript" },
	{ link: "/", title: "React" },
	{ link: "/", title: "React Router" },
	{ link: "/", title: "Redux" },
	{ link: "/", title: "Redux Toolkit" },
	{ link: "/", title: "Jest" },
	{ link: "/", title: "Cypress" },
	{ link: "/", title: "node.js" },
	{ link: "/", title: "NestJS" },
	{ link: "/", title: "Express" },
	{ link: "/", title: "CSS3" },
	{ link: "/", title: "SCSS" },
	{ link: "/", title: "Taliwindcss" },
	{ link: "/", title: "Styled Components" },
	{ link: "/", title: "Emotion" },
	{ link: "/", title: "Pug" },
	{ link: "/", title: "Wouter" },
	{ link: "/", title: "Git" },
	{ link: "/", title: "Framer Motion" },
	{ link: "/", title: "Custom Web Components" },
]

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

export const About = () => {
	return (
		<div css={style.wrapper}>
			<motion.div css={style.aboutMe}>
				<motion.img
					initial={{
						x: "-100vw",
					}}
					animate={{
						x: "0",
					}}
					transition={defaultTransition}
					src={avatarImage}
					css={style.avatar}
				></motion.img>
				<motion.div>
					<h1>Hi there!</h1>
					<p>
						Fuelled by a passion for developing compelling
						code-clean products, I have a deep desire to excel and
						continuosly improve in my work. Learn more about me
						below.
					</p>
				</motion.div>
			</motion.div>
			<div css={style.aboutWrapper}>
				<div className="text">
					<h2>About</h2>
					<p>My name is Temka, I live in St. Petersburg, Russia</p>
					<p>Love to code, do sports, work with wood</p>
					<p>Always up for challenge.</p>
				</div>
				<motion.div css={style.skillWrapper}>
					{skills.map(({ title, link }, index) => {
						return (
							<motion.div
								variants={variatnsItem}
								initial="hidden"
								animate="visible"
								custom={index}
								key={title}
							>
								<NavLink to={link} css={style.skillItem}>
									{title}
								</NavLink>
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</div>
	)
}
