import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eius illo
        est totam excepturi praesentium repudiandae, sint, nam optio amet
        tenetur, ducimus quod dolor repellendus maxime dolore autem ab culpa?
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro iure
        eveniet nam, veniam sunt nisi tenetur error debitis qui vero temporibus
        molestias repellat, laborum quas quos id ipsa numquam. Vitae?
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
