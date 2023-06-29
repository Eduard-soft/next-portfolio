import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image';

const Category = ({params}) => {
	console.log(params);
	return (
		<div className={styles.container}>
		<h1 className={styles.catTitle}>{params.category}</h1>
		<div className={styles.item}>
			<div className={styles.content}>
				<h1 className={styles.title}>Title</h1>
				<p className={styles.desc}>Description</p>
				<Button text="See More" url="#" />
			</div>
			<div className={styles.imgContainer}>
				<Image
					className={styles.img}
					fill={true}
					src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
					 alt="Title"
				/>
			</div>
		</div>
	</div>
	);
}

export default Category;
