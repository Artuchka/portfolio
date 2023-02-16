import React, { useEffect } from "react"
import { motion } from "framer-motion"
import pdfFile from "./../assets/resume.pdf"
import { btn } from "../styles/emotion/btn"
import { css } from "@emotion/react"

export const Resume = () => {
	useEffect(() => {
		document.title = "Resume"
	}, [])
	const onButtonClick = () => {
		fetch(pdfFile).then((response) => {
			response.blob().then((blob) => {
				const fileURL = window.URL.createObjectURL(blob)
				let alink = document.createElement("a")
				alink.href = fileURL
				alink.download = "CV_Artuchka.pdf"
				alink.click()
			})
		})
	}
	return (
		<div
			css={{
				paddingBottom: "5rem",
			}}
		>
			<h1>Resume</h1>

			<motion.button
				css={[
					btn,
					css({
						transformOrigin: "center",
					}),
				]}
				initial={{ scale: 0.3, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{
					duration: 0.5,
					ease: "easeInOut",
				}}
				onClick={onButtonClick}
			>
				Download PDF
			</motion.button>
		</div>
	)
}
