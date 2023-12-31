"use client"

import styles from "./page.module.css"
import Link from "next/link"
import DarkModeToggle from "../darkModeToggle/DarkModeToggle"


const links = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},
	{
		id: 2,
		title: "Portfolio",
		url: "/portfolio",
	},
	{
		id: 3,
		title: "Blog",
		url: "/blog",
	},
	{
		id: 4,
		title: "About",
		url: "/about",
	},
	{
		id: 4,
		title: "Contact",
		url: "/contact",
	},
	{
		id: 6,
		title: "Dashboard",
		url: "/dashboard",
	},
]

const Navbar = () => {
	return (
		<nav className={styles.container}>
			<Link href="/" className={styles.logo}>MyApp</Link>
			<div className={styles.links}>
				<DarkModeToggle />
				{links.map((linc) => (
					<Link key={linc.id} href={linc.url}>{linc.title}</Link>
				))}
				<button className={styles.logout} onClick={() => {console.log("logger out")}}>Logout</button>
			</div>
		</nav>
	);
}

export default Navbar;
