import { css } from "@emotion/react"
import { primaryBg } from "./vars"

export const btn = css({
	background:
		"linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%)",
	borderRadius: "16px",
	padding: "1rem 2rem",
	border: "none",
	boxShadow:
		"rgb(106 78 255 / 20%) 0px 3px 6px 0px, rgb(0 0 0 / 10%) 0px 0px 0px 0px inset",
	cursor: "pointer",
	// transition: "all 0.2s ease-in-out",
	textDecoration: "none",
	color: "white",
	fontWeight: 400,
})

export const btnLight = css({
	backgroundColor: primaryBg,
	// borderRadius: "16px",
	width: "100%",
	padding: "0.8rem 2rem",
	border: "none",
	boxShadow:
		"rgb(106 78 255 / 20%) 0px 3px 6px 0px, rgb(0 0 0 / 10%) 0px 0px 0px 0px inset",
	cursor: "pointer",
	transition: "all 0.2s ease-in-out",
	textDecoration: "none",
	color: "white",
	fontWeight: 400,
})
