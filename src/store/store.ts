import { atom } from "recoil"
import ozonImg from "./../assets/images/ozon3.png"
import jobsterImg from "./../assets/images/jobster.png"
import comfyImg from "./../assets/images/comfy.png"
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
import burgerImg from "./../assets/images/burger.jpg"
import cocktailsImg from "./../assets/images/cocktails.png"
import githubImg from "./../assets/images/github.jpg"

type StackKeys = "back" | "front" | "overall"

export interface ProjectItem extends DetailedInfo {
	title: string
	githubLink: string
	demoLink: string
	img: string
	uuid: string
}

type DetailedInfo = Partial<{
	githubBackendLink: string
	backendDocsLink: string
	stack: Partial<{ [key in StackKeys]: string[] }>
	description: string
	images: string[]
}>

// const ozonImg =
// 	"https://res.cloudinary.com/dzy8xh83i/image/upload/v1675457948/OZON_DEFAULT/404bg_ao0puo.jpg"

const defaultProjects: ProjectItem[] = [
	{
		title: "Ozon",
		githubLink: "https://github.com/Artuchka/ozon-front",
		demoLink: "https://fake-ozon.vercel.app/",

		githubBackendLink: "https://github.com/Artuchka/ozon-server",
		backendDocsLink: "https://busy-red-zebra-robe.cyclic.app/api/v1/docs/",
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

		- Marketplace has Stripe payment system, you can refund paid orders.
		- And you're welocme for creating new products (loggined as vendor).
		- Then there's access to view statistics for you products (overall AND product detailed).
		- Bookmark your loved items.
		- Feel free to add reviews to products. Select your delivery point (via Yandex maps)
		

		   File structure pattern is well known and common:

		   <route_name>Router.js at /routers folder for setting up routes
		   <route_name>Controller.js at /controllers folder for setting up controllers of specified route
		   <route_name>Model.js at /models folder for setting up MongoDB schema
		   Cloudinary is used for storing uploaded images and videos. Chose to use it because it has more servers than I do on :D (leading to faster content delivery)
		   

		   "Imagemin" is used for minifying images before uploading. Sometimes it can compress images by up to 70%

		   "bcryptjs" is used for hashing passwords with salt before storing them in Database

		   "jsonwebtoken" is used for creating/decoding crypted Tokens, safely containing info about current user. JWT are stored in cookies.

		   I had to use "node-fetch" library to access Dadata API (map reverse geocoder), because it asks for mode: "cors" in request config, which is not accesble in well-known Axios, which uses a XMLHttpRequest under the hood, not Request as fetch. 

		   "Nodemailer" is used for sending transactional Emails via SMTP server (from SendinBlue) There are also used SendGrid and Sendinblue libraries for sending emails via API keys 

		   For hosting the server I chose "cyclic.sh", becauser it has generous free tier with no sleep
		   `,
	},
	{
		title: "Jobster",
		githubLink: "https://github.com/Artuchka/jobster",
		demoLink: "https://jobstat.netlify.app/",

		githubBackendLink: "https://github.com/Artuchka/jobs_api",
		backendDocsLink: "https://talented-foal-tutu.cyclic.app/api-docs/",

		img: jobsterImg,
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
			],
			front: [
				"React",
				"Typescript",
				"Redux Toolkit",
				"React Router Dom",
				"SCSS",
				"Tailwindcss",
				"Recharts",
				"moment.js",
				"Vite",
			],
		},

		description: `My motivation was to showcase part(!) of my cool skills on creating SinglePageApp via React library.\

		There's access to view statistics of job interviews.
		
		And you're welocme for creating new jobs (loggined not as TestUser).
		Update jobs.
		Feel free to update profile.
		Delete old job interviews.

		For Backend file structure pattern is well known and common:

		<route_name>Router.js at /routers folder for setting up routes
		<route_name>Controller.js at /controllers folder for setting up controllers of specified route
		<route_name>Model.js at /schemas folder for setting up MongoDB schema

		"bcryptjs" is used for hashing passwords with salt before storing them in Database

		"jsonwebtoken" is used for creating/decoding crypted Tokens, safely containing info about current user. JWT are stored in cookies.

		For hosting the server I chose "cyclic.sh", becauser it has generous free tier with no sleep
		`,
	},
	{
		title: "ComfySloth",
		githubLink: "https://github.com/Artuchka/mini-projects/tree/e-commerce",
		demoLink: "https://comfortablesloth.netlify.app/",

		githubBackendLink: "https://github.com/Artuchka/e-commerce-server",
		backendDocsLink: "https://long-gray-helmet.cyclic.app/",

		img: comfyImg,
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
			],
			front: [
				"React",
				"Firebase",
				"useReducer + ContextAPI",
				"Netlify Serverless Functions",
				"React Router Dom",
				"SCSS",
			],
		},

		description: `I had to use Netlify Serverless Functions to imitate server work with stripe.
		useReducer with contextAPI almost turned out to be a hard-to-maintain mess, I didn't like it.
		Firebase was really easy to use for Authorization purposes


		Backend file structure pattern is well known and common:

		<route_name>Router.js at /routers folder for setting up routes
		<route_name>Controller.js at /controllers folder for setting up controllers of specified route
		<route_name>Model.js at /models folder for setting up MongoDB schema
		
		"bcryptjs" is used for hashing passwords with salt before storing them in Database

		"jsonwebtoken" with cookie-parser is used for creating\decoding crypted Tokens, safely containing info about current user. JWT are stored in cookies.

		For hosting the server I chose "cyclic.sh", becauser it has generous free tier with no sleep
		`,
	},
	{
		title: "Calendar",
		githubLink: "https://github.com/Artuchka/event-calendar",
		demoLink: "https://google-event-calendar.netlify.app/",
		img: calendarImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: [
				"Webpack",
				"Vanilla JS",
				"date-fns",
				"Local Storage",
				"HTML Templates",
				"CSS3",
			],
		},

		description: `
 I've wanted to implement Component paradigma, so used HTML Templates
 Using them turned out to be fun and really soul-warming
 All Calendar and Modal funcitonality I've wrapped in Class so it's possible to recreate same Objects with same methods and fields 
 Local Storage was chosen as key to security! lmao
 `,
	},
	{
		title: "Pizza",
		githubLink: "https://github.com/Artuchka/react-pizza-v2",
		demoLink: "https://pizza-artuchka.netlify.app/",
		img: pizzaImg,
		uuid: crypto.randomUUID(),

		stack: {
			back: ["mockapi"],
			front: [
				"React",
				"Typescript",
				"Redux Toolkit",
				"React Router Dom",
				"SCSS",
			],
		},

		description: `
			I've used MockAPI to mimic REST API Backend, it has search and sort queries
			- Sort, search, category filtering is available
			- Feel free to add different types and sizes of same pizza
			- CRUD functionality for card is avaiable
		`,
	},
	{
		title: "To-do",
		githubLink: "https://github.com/Artuchka/todo-ignite",
		demoLink: "https://todo-artuchka.netlify.app/",
		img: todoImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: ["React", "Local Storage", "SCSS"],
		},
		description: `
		Simplest To-do with astonishing design so all of your affairs will complete
		It has filtering for (All | Active | Done) tasks 
		`,
	},
	{
		title: "Insect Game",
		githubLink:
			"https://github.com/Artuchka/css-training/tree/main/insect-catch-game",
		demoLink: "https://artuchka.github.io/css-training/insect-catch-game/",
		img: insectImg,
		uuid: crypto.randomUUID(),

		description: `THIS GAME IS CHALLENGING. 
		Bet, you will not win.
		`,

		stack: {
			overall: ["VanillaJS", "CSS"],
		},
	},
	{
		title: "Minesweeper",
		githubLink: "https://github.com/Artuchka/minesweeper",
		demoLink: "https://artuchka.github.io/minesweeper/",
		img: minesweeperImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: ["VanillaJS", "CSS", "Local Storage"],
		},
		description: `
		In this small but pretty project I've impemented Functional Programming paradigma
		Separated all Minesweeper logic from DOM changing logic 
		Feel free to change board dimensions, tile size and amount of mines to diversify complexity`,
	},
	// {
	// 	title: "Weather Forecast",
	// 	githubLink: "https://github.com/Artuchka/weather_forecast/tree/main",
	// 	demoLink: "https://weather-front-6y11.onrender.com/",
	// 	img: weatherImg,
	// 	uuid: crypto.randomUUID(),
	// },
	{
		title: "Cocktails Wiki",
		githubLink: "https://github.com/Artuchka/mini-projects/tree/cocktails",
		demoLink: "https://wikicocktails.netlify.app/",
		img: cocktailsImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: [
				"React",
				"useReducer + ContextAPI",
				"SCSS",
				"React Router Dom",
			],
		},

		description: `
		useReducer with contextAPI was quite perfect to use in that small project.
		`,
	},
	{
		title: "Github User Statistics",
		githubLink:
			"https://github.com/Artuchka/mini-projects/tree/github-user-stats",
		demoLink: "https://github-user-statistic.netlify.app/",
		img: githubImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: [
				"React",
				"useReducer + ContextAPI",
				"FusionCharts",
				"SCSS",
				"React Router Dom",
			],
		},

		description: `
		useReducer with contextAPI was perfect to use in that small project.
		FusionCharts were quite simple to use
		Unfortunately, for security purposes I can't give full access to search github users, because my account may be suspended when limit reached

		`,
	},
	{
		title: "Pokedex",
		githubLink: "https://github.com/Artuchka/pokedex",
		demoLink: "https://pokemon-listing.netlify.app/",
		img: pokedexImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: ["VanillaJS", "CSS", "Parcel"],
		},

		description: `
		I was fond of Pokemons (had those cards, toys and etc...) when I was a kid
		In honor of little me, I've created this design-amazing website`,
	},

	{
		title: "Calculator",
		githubLink: "https://github.com/Artuchka/calculator_advanced",
		demoLink:
			"https://artuchka.github.io/calculator_advanced/calculator_advanced_oop/",
		img: "https://user-images.githubusercontent.com/42734308/182027828-f4eb6ddb-6c6b-488f-b72e-4b965aefbdee.png",
		uuid: crypto.randomUUID(),

		stack: {
			overall: ["VanillaJS", "CSS3"],
		},

		description: `
		
Mathematical operations avaialable:
- Addition
- Subtraction
- Multiplication
- Division

Calculator is able to:
- AC(All Clear)
- DEL(Delete last digit)
- Work with fractions

This calculator is non-binary, non-racist, non-abusing, non-nun, non-null, non-non......
`,
	},
	{
		title: "Notes",
		githubLink: "https://github.com/Artuchka/trelloResult",
		demoLink: "https://artuchka.github.io/trelloResult/",
		img: notesImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: ["VanillaJS", "CSS3", "HTML Templates"],
		},

		description: `
		I've needed to recreate Trello simple lists for personal usage \w Local Storage
		Added tasks are draggable between lists and can be nested inside other tasks!
		Also List Titles are editable!`,
	},
	{
		title: "Invite List",
		githubLink: "https://github.com/Artuchka/6projects/tree/users",
		demoLink: "https://invite-list.netlify.app/",
		img: inviteListImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: ["React", "SCSS", "Skeletons"],
		},

		description: `
		Part of "50 Mini projects" series`,
	},
	{
		title: "Converter",
		githubLink: "https://github.com/Artuchka/6projects/tree/converter",
		demoLink: "https://metrical-converter.netlify.app/",
		img: converterImg,
		uuid: crypto.randomUUID(),
		stack: {
			overall: ["React", "SCSS"],
		},

		description: `
		Part of "50 Mini projects" series`,
	},
	{
		title: "Landing #1",
		githubLink: "https://github.com/Artuchka/larix/tree/main/larix",
		demoLink: "https://artuchka.github.io/larix/",
		img: larixImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: ["Pug", "VanillaJS", "SCSS", "Webpack"],
		},
		description: `
		
Multipage monster was created by using Pug 
I started hating Pug for not giving enough pros of using it 
With help of Webpack chunks were created to optimize website 
`,
	},
	{
		title: "Landing #2",
		githubLink: "https://github.com/Artuchka/homesmart_result",
		demoLink: "https://artuchka.github.io/homesmart_result/#",
		img: homesmartImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: ["TailwindCSS", "VanillaJS", "Webpack"],
		},
		description: `
		TailwindCSS in plain html turned out to be a messy thing to use
		Though in Component paradigma (aka React) it would seem perfect
`,
	},
	{
		title: "Landing #3",
		githubLink:
			"https://github.com/Artuchka/carbonex_webpack_super_nice/tree/main/carbonex_webpack_3",
		demoLink:
			"https://artuchka.github.io/carbonex_webpack_super_nice/pages/index.html",
		img: carbonexImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: ["HTML Partials", "VanillaJS", "SCSS", "Webpack"],
		},

		description: `
​It was such a relief when I found out about html-webpack-partials-plugin 
It let's you use Component paradigama for components inside body (for ex: header, footer, etc.)`,
	},
	{
		title: "Landing #4",
		githubLink: "https://github.com/Artuchka/monamour",
		demoLink: "https://artuchka.github.io/monamour/",
		img: monamourImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: ["Parcel", "SCSS", "Parcel"],
		},

		description: `Simple responsive single page landing		`,
	},
	{
		title: "Landing #5",
		githubLink: "https://github.com/Artuchka/get_wash_landing",
		demoLink: "https://artuchka.github.io/get_wash_landing/",
		img: getWashImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: ["CSS3", "HTML5"],
		},
		description: `Simple responsive single page landing		`,
	},
	{
		title: "Landing #6",
		githubLink: "https://github.com/Artuchka/burger_landing",
		demoLink: "https://artuchka.github.io/burger_landing/",
		img: burgerImg,
		uuid: crypto.randomUUID(),

		stack: {
			overall: ["CSS3", "HTML5"],
		},
		description: `Simple responsive single page landing		`,
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
