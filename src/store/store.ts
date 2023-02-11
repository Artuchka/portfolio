import { atom } from "recoil"

export type ProjectItem = {
	title: string
	githubLink: string
	demoLink: string
	img: string
	uuid: string

	stack?: string[]
}

const ozonImg =
	"https://res.cloudinary.com/dzy8xh83i/image/upload/v1675457948/OZON_DEFAULT/404bg_ao0puo.jpg"

const defaultProjects: ProjectItem[] = [
	{
		title: "Ozon",
		githubLink: "/",
		demoLink: "/",
		img: ozonImg,
		uuid: "123",

		stack: ["Javascript", "React", "Redux Toolkit", "MongoDB"],
	},
	{
		title: "Ozon",
		githubLink: "/",
		demoLink: "/",
		img: ozonImg,
		uuid: "124",
	},
	{
		title: "Ozon",
		githubLink: "/",
		demoLink: "/",
		img: ozonImg,
		uuid: "125",
	},
	{
		title: "Ozon",
		githubLink: "/",
		demoLink: "/",
		img: ozonImg,
		uuid: "126",
	},
	{
		title: "Ozon",
		githubLink: "/",
		demoLink: "/",
		img: ozonImg,
		uuid: "127",
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

export const listingOpenState = atom({
	key: "listingOpenState",
	default: false,
})
