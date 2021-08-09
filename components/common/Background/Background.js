import Image from "next/image"
import s from "./Background.module.css"
import bg from "../../../public/assets/Background/actual.jpg"
import responsive from "../../../public/assets/Background/response.jpg"
import med from "../../../public/assets/Background/dsa.jpg"

export default function Background() {
    return(
        <>
        <div className={s.imagery}>
            <div className={s.gradient}></div>
        <Image src={bg} height={1280} width={1920} quality={100} layout="intrinsic" />
        
        </div>
        <div className={s.responsiveimagery}>
            <div className={s.responsivegradient}></div>
        <Image src={responsive} height={1602} width={855} quality={100} layout="intrinsic" />
        
        </div>
        <div className={s.medresponsiveimagery}>
            <div className={s.medresponsivegradient}></div>
        <Image src={med} height={1482} width={1544} quality={100} layout="intrinsic" />
        
        </div>
        </>
    )
}