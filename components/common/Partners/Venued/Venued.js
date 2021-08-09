import Image from "next/image"
import s from "./Venued.module.css"
import Heavenly from "../../../../public/assets/Partners/venues.jpg"



export default function Venued() {
    return(
        <>
        <div className={s.imagery}>
            <div className={s.gradient}></div>
        <Image src={Heavenly} height={960} width={640} quality={100} layout="intrinsic" />
        
        </div>
        </>
    )
}