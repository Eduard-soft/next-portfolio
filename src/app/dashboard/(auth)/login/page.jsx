"use client"

import { signIn } from "next-auth/react";
import styles from "./page.module.css";

const Login = () => {
	return (
		<div className={styles.comtainer}>
			<button onClick={() => signIn("google")}>Login with Google</button>
		</div>
	);
}

export default Login;
