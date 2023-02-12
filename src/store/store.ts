import { atom } from "recoil"
import ozonImg from "./../assets/images/ozon.png"
import pizzaImg from "./../assets/images/pizza.jpg"
import calendarImg from "./../assets/images/calendarCropped.jpg"
import todoImg from "./../assets/images/TodoLogo.jpg"
import insectImg from "./../assets/images/insect.jpg"
import minesweeperImg from "./../assets/images/MinesweeperFunc.jpg"
import weatherImg from "./../assets/images/MinesweeperFunc.jpg"
import pokedexImg from "./../assets/images/pokedex.jpg"
import inviteListImg from "./../assets/images/inviteList.jpg"
import converterImg from "./../assets/images/converter.jpg"
import notesImg from "./../assets/images/notes.jpg"
import larixImg from "./../assets/images/larix.jpg"
import homesmartImg from "./../assets/images/homesmart.jpg"
import carbonexImg from "./../assets/images/carbonex.jpg"
import monamourImg from "./../assets/images/monamour2.jpg"
import getWashImg from "./../assets/images/getWash.jpg"

type StackKeys = "back" | "front"
export type ProjectItem = {
	title: string
	githubLink: string
	demoLink: string
	img: string
	uuid: string

	stack?: Partial<{ [key in StackKeys]: string[] }>
	description?: string
}

// const ozonImg =
// 	"https://res.cloudinary.com/dzy8xh83i/image/upload/v1675457948/OZON_DEFAULT/404bg_ao0puo.jpg"

const defaultProjects: ProjectItem[] = [
	{
		title: "Ozon",
		githubLink: "https://github.com/Artuchka/ozon-front",
		demoLink: "https://fake-ozon.vercel.app/",
		img: ozonImg,
		uuid: crypto.randomUUID(),

		stack: {
			back: [
				"Node JS",
				"Express",
				"JWT",
				"MongoDB",
				"Mongoose",
				"bcryptjs",
				"Stripe",
				"Cloudinary",
				"imagemin w plugins",
				"nodemailer",
			],
			front: [
				"React",
				"Typescript",
				"Redux Toolkit",
				"React Router Dom",
				"SCSS",
				"Stripe",
				"Yandex Maps",
				"Vite",
				"MongoDB",
			],
		},
		description: `My motivation was to showcase part(!) of my cool skills on creating SinglePageApp via React library.

		Marketplace has Stripe payment system, you can refund paid orders.
	  And you're welocme for creating new products (loggined as vendor). Then there's access to view statistics for you products (overall AND product detailed). Bookmark your loved items. Feel free to add reviews to products. Select your delivery point (via Yandex maps)`,
	},
	{
		title: "Calculator",
		githubLink: "https://github.com/Artuchka/calculator_advanced",
		demoLink:
			"https://artuchka.github.io/calculator_advanced/calculator_advanced_oop/",
		img: "https://user-images.githubusercontent.com/42734308/182027828-f4eb6ddb-6c6b-488f-b72e-4b965aefbdee.png",
		uuid: crypto.randomUUID(),
	},
	{
		title: "Pizza",
		githubLink: "https://github.com/Artuchka/react-pizza-v2",
		demoLink: "https://pizza-artuchka.netlify.app/",
		img: pizzaImg,
		uuid: crypto.randomUUID(),
	},
	{
		title: "Calendar",
		githubLink: "https://github.com/Artuchka/event-calendar",
		demoLink: "https://google-event-calendar.netlify.app/",
		img: calendarImg,
		uuid: crypto.randomUUID(),
	},
	{
		title: "To-do",
		githubLink: "https://github.com/Artuchka/todo-ignite",
		demoLink: "https://todo-artuchka.netlify.app/",
		img: todoImg,
		uuid: crypto.randomUUID(),
	},
	{
		title: "Insect Game",
		githubLink: "https://github.com/Artuchka/css-training",
		demoLink: "https://artuchka.github.io/css-training/insect-catch-game/",
		img: insectImg,
		uuid: crypto.randomUUID(),
	},
	{
		title: "Minesweeper",
		githubLink: "https://github.com/Artuchka/minesweeper",
		demoLink: "https://artuchka.github.io/minesweeper/",
		img: minesweeperImg,
		uuid: crypto.randomUUID(),
	},
	// {
	// 	title: "Weather Forecast",
	// 	githubLink: "https://github.com/Artuchka/weather_forecast/tree/main",
	// 	demoLink: "https://weather-front-6y11.onrender.com/",
	// 	img: weatherImg,
	// 	uuid: crypto.randomUUID(),
	// },
	{
		title: "Pokedex",
		githubLink: "https://github.com/Artuchka/pokedex",
		demoLink: "https://pokemon-listing.netlify.app/",
		img: pokedexImg,
		uuid: crypto.randomUUID(),
	},
	{
		title: "Invite List",
		githubLink: "https://github.com/Artuchka/css-training",
		demoLink: "https://invite-list.netlify.app/",
		img: inviteListImg,
		uuid: crypto.randomUUID(),
	},
	{
		title: "Converter",
		githubLink: "https://github.com/Artuchka/6projects/tree/converter",
		demoLink: "https://metrical-converter.netlify.app/",
		img: converterImg,
		uuid: crypto.randomUUID(),
	},
	{
		title: "Notes",
		githubLink: "https://github.com/Artuchka/trelloResult",
		demoLink: "https://artuchka.github.io/trelloResult/",
		img: notesImg,
		uuid: crypto.randomUUID(),
	},
	{
		title: "Landing #1",
		githubLink: "https://github.com/Artuchka/larix",
		demoLink: "https://artuchka.github.io/larix/",
		img: larixImg,
		uuid: crypto.randomUUID(),
	},
	{
		title: "Landing #2",
		githubLink: "https://github.com/Artuchka/homesmart_result",
		demoLink: "https://artuchka.github.io/homesmart_result/#",
		img: homesmartImg,
		uuid: crypto.randomUUID(),
	},
	{
		title: "Landing #3",
		githubLink: "https://github.com/Artuchka/carbonex_webpack_super_nice",
		demoLink:
			"https://artuchka.github.io/carbonex_webpack_super_nice/pages/index.html",
		img: carbonexImg,
		uuid: crypto.randomUUID(),
	},
	{
		title: "Landing #4",
		githubLink: "https://github.com/Artuchka/monamour",
		demoLink: "https://artuchka.github.io/monamour/",
		img: monamourImg,
		uuid: crypto.randomUUID(),
	},
	{
		title: "Landing #5",
		githubLink: "https://github.com/Artuchka/get_wash_landing",
		demoLink: "https://artuchka.github.io/get_wash_landing/",
		img: getWashImg,
		uuid: crypto.randomUUID(),
	},
]

export const projectsState = atom({
	key: "projects",
	default: defaultProjects,
})

export const selectedProjectIndexState = atom({
	key: "projectsDetailed",
	default: 0,
})
export const selectedProjectUUIDState = atom({
	key: "projectsDetailed",
	default: "",
})

export const listingOpenState = atom({
	key: "listingOpenState",
	default: false,
})
