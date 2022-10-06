import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eius illo
        est totam excepturi praesentium repudiandae, sint, nam optio amet
        tenetur, ducimus quod dolor repellendus maxime dolore autem ab culpa?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro iure
        eveniet nam, veniam sunt nisi tenetur error debitis qui vero temporibus
        molestias repellat, laborum quas quos id ipsa numquam. Vitae?
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
