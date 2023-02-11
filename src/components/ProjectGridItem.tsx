import React, { FC } from "react"
import { GoLogoGithub } from "react-icons/go"
import { BsThreeDots, BsGithub } from "react-icons/bs"
import { FiGithub } from "react-icons/fi"
import { BiDotsHorizontal } from "react-icons/bi"
import { AiOutlineEye } from "react-icons/ai"
import { css } from "@emotion/react"
import { motion } from "framer-motion"
import { primaryBg, secondaryBg } from "../styles/emotion/vars"
import { ProjectItem, listingOpenState } from "../store/store"
import { useSetRecoilState } from "recoil"

const style = {
	cardWrapper: css({
		// maxWidth: "400px",
		borderRadius: "1rem",
		overflow: "hidden",
	}),
	demoPicture: css({
		height: "200px",
		backgroundSize: "cover",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",

		"&:hover": {
			div: {
				opacity: 1,
			},
		},
	}),

	iconWrapper: css({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: "1rem",
		opacity: 0,
		transition: "opacity 0.5s ease",
	}),

	icon: css({
		color: "white",
		cursor: "pointer",
		fontSize: "1.2rem",
		backgroundColor: secondaryBg,
		borderRadius: "0.5em",
		display: "flex",
		alignItems: "center",
		gap: "0.5rem",
		padding: "0.5em",
		textDecoration: "none",
	}),

	infoWrapper: css({
		padding: "0.5rem 2rem",
		backgroundColor: secondaryBg,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	}),
	dots: css({
		fontSize: "2rem",
		cursor: "pointer",
	}),
}

export const ProjectGridItem: FC<ProjectItem> = ({
	title,
	githubLink,
	demoLink,
	img,

	uuid,
}) => {
	const setListingOpen = useSetRecoilState(listingOpenState)

	const handleDetailsOpen = (e: any) => {
		console.log("opening details")
		setListingOpen(true)
	}
	return (
		<div css={style.cardWrapper}>
			<div
				style={{
					backgroundImage: `url(${img})`,
				}}
				css={style.demoPicture}
			>
				<div css={style.iconWrapper} className="hidden">
					<a href={githubLink} css={style.icon}>
						<BsGithub /> Github
					</a>
					<a href={demoLink} css={style.icon}>
						<AiOutlineEye /> Demo
					</a>
				</div>
			</div>
			<div css={style.infoWrapper}>
				<h3>{title}</h3>
				<div css={style.dots} onClick={handleDetailsOpen}>
					<BiDotsHorizontal />
				</div>
			</div>
		</div>
	)
}
