import s from "./Sweets.module.css"
import Image from "next/image"
import Cake from "../../../public/assets/Partners/sweeted.jpg"

export default function Sweets({Sweets, Sweetsdescription}) {
    return(
        <section>
        <div className={s.main}>
   
            <div className={s.responsive}>
                <div className={s.content}>
                <div className={s.itemimage}>
                    <Image src={Cake} width={640} height={960} layout="intrinsic" data-aos="flip-left" />
                    </div>
                    <div className={s.itemcard}>
                    <div className={s.textbox} data-aos="zoom-in">
                    <div className={s.itemtitlebox}>
                    <h2 className={s.partnertitle}>
                    {Sweets}
                    </h2>
                    </div>
                    <div className={s.itemdescriptionbox}>
                        <p className={s.partnerdescription}>
                        {Sweetsdescription}
                        </p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}