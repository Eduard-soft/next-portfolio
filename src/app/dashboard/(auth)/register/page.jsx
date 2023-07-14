"use client"

import React, { useState }from "react"
import styles from "./page.module.css"
import Link from "next/link";
import  { useRouter }  from "next/navigation";


const Register = () => {
	const [error, setError] = useState(null);
	const router = useRouter()

	const handleSubmit = async (e) => {
		const name = e.target[0].value
		const email = e.target[1].value
		const password = e.target[2].value

	
		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					password
				}),
			});
			res.status === 201 && router.push("/dashboard/login?success=Account has been created")
		} catch (error) {
			setError(error)
			console.log(error);
		}
	};

	return (
		<div className={styles.comtainer}>
			<h1 className={styles.title}>Create an Account</h1>
			<h2 className={styles.subtitle}>Please sing up to see dashboard</h2>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input type="text" 
					placeholder="Username" 
					required 
					className={styles.input} 
				/>
				<input type="email" 
					placeholder="Email" 
					required 
					className={styles.input} 
				/>
				<input type="password" 
					placeholder="Password" 
					required 
					className={styles.input} 
				/>
				<button className={styles.button}>Register</button>
				{error && "Something went wrong!"}
				</form>
				<span className={styles.or}>- OR -</span>
				<Link className={styles.link} href="/dashboard/login">Login widh an existing Account</Link>
		</div>
	);
};

export default Register;
