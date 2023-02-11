import React, { useState } from "react"
import { Variants, motion } from "framer-motion"
import { css } from "@emotion/react"

const style = {}

const varaints = {
	hidden: {},
	shown: {},
} as Variants

export const Landing = () => {
	return (
		<>
			<motion.h1 initial={{ x: "-100vw" }} animate={{ x: "0" }}>
				Home
			</motion.h1>
		</>
	)
}
