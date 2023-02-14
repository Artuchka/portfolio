import React, { Component, FC } from "react"
import { motion } from "framer-motion"
import { css } from "@emotion/react"
import { telegramColor } from "../styles/emotion/vars"
import { HoverButton } from "../components/HoverButton"
import { Link } from "react-router-dom"
import cursorImg from "./../assets/react.svg"

const links = [
	{
		Component: <TelegramIcon />,
		href: "https://t.me/Artuchka",
	},
	{
		Component: <GmailIcon />,
		href: "mailto:yandex949@gmail.com&?subject=Вакансия (Best Developer needed)&body=Привет, а давай с нами поработаешь, Артём :D",
	},
	{
		Component: <VKIcon />,
		href: "https://vk.com/undefined_http_server",
	},
]

export const Contact = () => {
	return (
		<div>
			<h1>Contact</h1>

			<div css={style.linksWrapper}>
				{links.map(({ Component, href }) => {
					return <a href={href}>{Component}</a>
				})}
			</div>
		</div>
	)
}

const style = {
	path: css({
		stroke: telegramColor,
		strokeWidth: "0.7rem",
		height: "100px",
		minWidth: "130px",
		opacity: 0.4,
		transition: "opacity 300ms ease-out",
		"&:hover": {
			opacity: 1,
		},
	}),
	linksWrapper: css({
		display: "flex",
		gap: "2rem",
		alignItems: "center",
		justifyContent: "center",
	}),
}
function TelegramIcon() {
	return (
		<motion.svg
			height="100px"
			version="1.1"
			viewBox="0 0 512 512"
			width="100"
			xmlns="http://www.w3.org/2000/svg"
			css={style.path}
			fill="none"
		>
			<motion.path
				initial={{ strokeDasharray: 30 }}
				animate={{ strokeDasharray: 20 }}
				transition={{
					duration: 3,
					ease: "linear",
					repeat: Infinity,
					repeatType: "mirror",
				}}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="    M477.805,102.98l-67.327,317.516c-5.08,22.41-18.326,27.984-37.15,17.431l-102.585-75.596l-49.497,47.607    c-5.477,5.478-10.06,10.061-20.617,10.061l7.37-104.479l190.129-171.805c8.268-7.37-1.792-11.454-12.848-4.083L150.233,287.633    l-101.19-31.672c-22.011-6.873-22.408-22.012,4.581-32.568L449.419,70.911C467.744,64.039,483.779,74.993,477.805,102.98z"
			/>
		</motion.svg>
	)
}

function VKIcon() {
	return (
		<motion.svg
			height="100px"
			version="1.1"
			viewBox="0 0 512 512"
			width="100"
			xmlns="http://www.w3.org/2000/svg"
			css={style.path}
			fill="none"
			animate={{ x: "-8px" }}
		>
			<motion.path
				initial={{ strokeDashoffset: 0 }}
				animate={{ strokeDashoffset: 1000 }}
				transition={{
					duration: 10,
					ease: "linear",
					repeat: Infinity,
					repeatType: "mirror",
				}}
				strokeDasharray={40}
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"
			/>
		</motion.svg>
	)
}

function GmailIcon() {
	return (
		<motion.svg
			height="100px"
			version="1.1"
			viewBox="0 0 100 100"
			width="100"
			xmlns="http://www.w3.org/2000/svg"
			css={style.path}
			fill="none"
		>
			<GmailPath d="m49.845942,69.691932c-0.336333,0 -0.675869,-0.105705 -0.960951,-0.320317l-25.333877,-18.97238c-0.707901,-0.531726 -0.852043,-1.534319 -0.32352,-2.242219c0.531726,-0.704698 1.534319,-0.855247 2.242219,-0.32352l24.376129,18.25487l24.372926,-18.25487c0.707901,-0.528523 1.713696,-0.38438 2.242219,0.32352c0.531726,0.707901 0.38438,1.713696 -0.32352,2.242219l-25.330674,18.97238c-0.285082,0.214612 -0.624618,0.320317 -0.960951,0.320317z" />
			<GmailPath d="m26.11365,52.317935l-24.315269,-18.210025l0,-9.231538c0,-6.124462 4.996946,-11.108596 11.140628,-11.108596c2.379956,0 4.670223,0.771964 6.620954,2.23261l6.550484,4.913664l0,31.403886l0.003203,0zm-21.112098,-19.811611l17.908927,13.411676l0,-23.402365l-5.269216,-3.949509c-1.393379,-1.04103 -3.02059,-1.595179 -4.702255,-1.595179c-3.818179,0 -7.937457,3.023793 -7.937457,7.905425l0,7.629953z" />
			<GmailPath d="m73.578234,52.317935l0,-31.403886l6.550484,-4.910461c1.953934,-1.463849 4.244201,-2.235813 6.624157,-2.235813c6.143681,0 11.140628,4.984134 11.140628,11.108596l0,9.231538l-24.315269,18.210025zm3.203171,-29.8023l0,23.402365l17.908927,-13.411676l0,-7.629953c0,-4.881632 -4.119278,-7.905425 -7.937457,-7.905425c-1.681665,0 -3.308875,0.550945 -4.705458,1.595179l-5.266013,3.949509z" />
			<GmailPath d="m89.959249,86.553423l-14.77943,0c-0.884075,0 -1.601585,-0.71751 -1.601585,-1.601585l0,-28.828536c0,-0.884075 0.71751,-1.601585 1.601585,-1.601585s1.601585,0.71751 1.601585,1.601585l0,27.226951l13.177844,0c2.607381,0 4.731083,-2.120499 4.731083,-4.724677l0,-53.749204c0,-3.049419 -1.627211,-5.682425 -4.356312,-7.050179c-2.738711,-1.370957 -5.836177,-1.095484 -8.286603,0.739932l-31.240524,23.402365c-0.570164,0.426022 -1.351738,0.426022 -1.921902,0l-31.243727,-23.402365c-2.450426,-1.82901 -5.547892,-2.107686 -8.283399,-0.739932c-2.725898,1.367754 -4.356312,4.00076 -4.356312,7.050179l0,53.749204c0,2.604178 2.123702,4.724677 4.731083,4.724677l13.177844,0l0,-27.226951c0,-0.884075 0.71751,-1.601585 1.601585,-1.601585s1.601585,0.71751 1.601585,1.601585l0,28.828536c0,0.884075 -0.71751,1.601585 -1.601585,1.601585l-14.77943,0c-4.375531,0 -7.934254,-3.555519 -7.934254,-7.927847l0,-53.749204c0,-4.221779 2.347924,-8.020739 6.127666,-9.913813c3.789351,-1.893074 8.244961,-1.495881 11.637119,1.04103l30.282776,22.681652l30.282776,-22.681652c3.398564,-2.536911 7.854175,-2.937308 11.640322,-1.037827c3.776538,1.889871 6.124462,5.688831 6.124462,9.91061l0,53.749204c0,4.372328 -3.558723,7.927847 -7.934254,7.927847z" />
		</motion.svg>
	)
}

function GmailPath({ d }: { d: string }) {
	return (
		<motion.path
			initial={{ strokeDashoffset: 0 }}
			animate={{ strokeDashoffset: 1000 }}
			transition={{
				duration: 10,
				ease: "linear",
				repeat: Infinity,
				repeatType: "mirror",
			}}
			strokeDasharray={40}
			strokeLinecap="round"
			strokeWidth="0.1rem"
			stroke="#c71610"
			d={d}
		/>
	)
}
