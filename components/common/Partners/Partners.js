import s from "./Partners.module.css"
import Image from "next/image"
import Heavenly from "../../../public/assets/Partners/venues.jpg"

export default function Partners({Venue, Venuedescription}) {
    return(
        <section>
        <div className={s.main}>
   
            <div className={s.responsive}>
                <div className={s.content}>
                <div className={s.itemimage} >
                    <Image src={Heavenly} width={640} height={960} layout="intrinsic" data-aos="flip-right"/>
                    </div>
                    <div className={s.itemcard}>
                    <div className={s.textbox} data-aos="zoom-in">
                    <div className={s.itemtitlebox}>
                    <h2 className={s.partnertitle}>
                    {Venue}
                    </h2>
                    </div>
                    <div className={s.itemdescriptionbox}>
                        <p className={s.partnerdescription}>
                        {Venuedescription}
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