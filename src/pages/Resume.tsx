import React from "react"
import pdfFile from "./../assets/resume.pdf"
import { btn } from "../styles/emotion/btn"

export const Resume = () => {
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
		<div>
			<h1>Resume</h1>

			<button css={btn} onClick={onButtonClick}>
				Download PDF
			</button>
		</div>
	)
}
