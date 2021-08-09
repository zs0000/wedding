import Image from "next/image"
import s from "./Expertise.module.css"
import Dine from '../../../public/assets/Expertise/venue.jpg'



export default function Expertise({expertisetitle, expertisedescription}) {
    return(
        <section>
        <div className={s.main}>
            
            <div className={s.responsive}>
                <div className={s.content}>
                    <div className={s.textbox}>
                    <h1 className={s.title}>
                        {expertisetitle}
                    </h1>
                    <p className={s.description}>
                        {expertisedescription}
                    </p>
                    </div>
                    <div className={s.imagery}>
                        <Image src={Dine} width={400} height={600} layout="intrinsic" />
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}