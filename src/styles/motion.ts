import { Transition } from "framer-motion"

export const defaultTransition = {
	type: "spring",
	damping: 50,
	stiffness: 300,
} as Transition

export const breakpoints = [576, 768, 992, 1200]

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
