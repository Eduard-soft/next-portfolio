"use client"

import useSWR from 'swr'
import { useState, useEffect } from 'react'
import styles from './page.module.css'


const Dashboard = () => {
	// const [data, setData] = useState([])
	// const [error, setError] = useState(false)
	// const [isLoading, setIsLoading] = useState(true)

	// useEffect(() => {
	// 	const getData = async () => {
	// 		const res = await fetch('https://jsonplaceholder.typicode.com/posts', { catch: 'no_store'})

	// 		if (!res.ok) {
	// 			setError(true)
	// 		}
	// 		const data = await res.json()

	// 		setData(data)
	// 		setIsLoading(false)
	// 	}
	// 	getData()
	// }, [])

	// console.log(data)

	const fetcher = (...args) => fetch(...args).then(res => res.json())
	const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

	console.log(data)
	
	return <div className={styles.dashboard}>Dashboard</div>
}

export default Dashboard;
