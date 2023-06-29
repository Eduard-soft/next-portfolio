import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
	return (
		<div className={styles.mainContainer}>
			<Link href='blog/test' className={styles.container} key='1'>
				<div className={styles.imageContainer}>
					<Image 
						 src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
						 alt=""
						 width={400}
						 height={250}
						 className={styles.image}
					/>
				</div>
					<div className={styles.container}>
						<h1 className={styles.title}>Title</h1>
						<p className={styles.desc}>Description</p>
					</div>
			</Link>

			<Link href='blog/test2' className={styles.container} key='2'>
				<div className={styles.imageContainer}>
					<Image 
						 src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
						 alt=""
						 width={400}
						 height={250}
						 className={styles.image}
					/>
				</div>
					<div className={styles.container}>
						<h1 className={styles.title}>Title</h1>
						<p className={styles.desc}>Description</p>
					</div>
			</Link>

			<Link href='blog/test3' className={styles.container} key='3'>
				<div className={styles.imageContainer}>
					<Image 
						 src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
						 alt=""
						 width={400}
						 height={250}
						 className={styles.image}
					/>
				</div>
					<div className={styles.container}>
						<h1 className={styles.title}>Title</h1>
						<p className={styles.desc}>Description</p>
					</div>
			</Link>
		</div>
	);
}

export default Blog;
