import Link from "next/link";

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
		<nav>
			<Link href="/">MyApp</Link>
			<div>
				{links.map((linc) => (
					<Link key={linc.id} href={linc.url}>{linc.title}</Link>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
