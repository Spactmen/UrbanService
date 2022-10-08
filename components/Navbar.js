import styles from '../styles/Navbar.module.css'
import Link from "next/link"
import Image from "next/image"
import logo from '../public/logo.png'
import down_arrow from "../public/down_arrow.png"
import phone from "../public/phone.png"
import whatsapp from "../public/whatsapp.png"
import { useState } from "react"



const Navbar = () => {

    const [mobileMenu,SetMobileMenu] = useState(false)

    return (
        <nav className={styles.nav}>
        <button className={mobileMenu === false ? styles.hamburger : styles.hamburger + ' ' + styles.active} onClick={() => SetMobileMenu(!mobileMenu)}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </button>
        <div className={styles.logo_name}>
            <div className={styles.logo}><Image src={logo} alt="/" /></div>

            <p className={styles.logo_text}><Link href="/">RO SERVICE CENTER</Link></p>
        </div>
        <div className={styles.nav_middle}>
            <ul className={mobileMenu === false ? styles.menu_div : styles.menu_div + ' ' + styles.active}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/available">Available in</Link> <Image src={down_arrow} alt="seff"></Image></li>
                <li><Link href="/services">Services</Link>  <Image src={down_arrow} alt="seff"></Image></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
        </div>
        <div className={styles.right_nav}>
            <div className={styles.service_box}>
                <Image src={phone} alt="phone" width={35}></Image>
                <div>
                    <p className={styles.service_text}>Service Helpline</p>
                    <p className={styles.service_text_2}>782 762 1417</p>
                </div>
            </div>
            <div style={{ height: "30px", margin: "9px 4px 0 0" }}>
                <Image src={whatsapp} alt="phone" width={35}></Image>
            </div>

        </div>
    </nav>
    )
}

export default Navbar;