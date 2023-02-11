import { css } from "@emotion/react"
import { primaryBg, primaryText, secondaryBg } from "./vars"

export const scrollbar = (width = "3rem", style = "rectangle", axis = "y") => {
	return css({
		"&::-webkit-scrollbar": {
			all: "unset",
			width: axis == "y" ? width : 0,
			height: axis == "x" ? width : "initial",
			backgroundColor: primaryText,
			borderRadius: style == "rounded" ? "1rem" : "0",
		},

		"&::-webkit-scrollbar-button": {
			display: "block",
			backgroundColor: secondaryBg,
			boxShadow: "inset 0px 0px 0px 20px rgba(255, 255, 255, 0.3)",
		},

		"&::-webkit-scrollbar-thumb": {
			backgroundColor: secondaryBg,
			borderRadius: style === "rounded" ? "100vmax" : "0",
		},
		"&::-webkit-scrollbar-button:hover": {
			boxShadow: "inset 0px 0px 0px 20px rgba(128, 128, 128, 0.5)",
		},
		"&::-webkit-scrollbar-button:active": {
			boxShadow: "inset 0px 0px 0px 20px rgba(128, 128, 128, 0.7)",
		},
		"&::-webkit-scrollbar-button:vertical:start": {
			display: "none",
		},
		"&::-webkit-scrollbar-button:vertical:end": {
			display: "none",
		},
		"&::-webkit-scrollbar-button:horizontal:start": {
			display: "none",
		},
		"&::-webkit-scrollbar-button:horizontal:end": {
			display: "none",
		},
	})
}
