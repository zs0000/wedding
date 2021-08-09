import s from "./Navbar.module.css"
import Link from "next/link"

export default function Navbar() {
    return(
        <div className={s.main}>
            
            <div className={s.bar}>
                <ul className={s.items}>
                    <li className={s.itembox}>
                        <Link href="/">
                        <a className={s.navitem}>
                            Home
                        </a>
                        </Link>                    
                    </li>
                    <li className={s.itembox}>
                        <Link href="/#test">
                        <a className={s.navitem}>
                            Services
                        </a>
                        </Link>                    
                    </li>
                    <li className={s.itembox}>
                        <Link href="/about">
                        <a className={s.navitem}>
                            About Us
                        </a>
                        </Link>                    
                    </li>
                    <li className={s.itembox}>
                        <Link href="/#contact">
                        <a className={s.navitem}>
                            Contact
                        </a>
                        </Link>                    
                    </li>
                    
                </ul>

            </div>
        </div>
    )
}