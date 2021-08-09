import s from "./AboutComponent.module.css"
import Image from "next/image"
import Us from "../../../public/assets/Expertise/work.jpg"

export default function AboutComponent({title, description}) {
    return(
        <section>
        <div className={s.main}>
            <div className={s.responsive}>
                <div className={s.content}>
                    <div className={s.item}>
                    <h1 className={s.title} data-aos="zoom-in-down">{title}</h1>
                    <Image src={Us} width={320} height={480} data-aos="flip-down" className="rounded-xl" layout="intrinsic" />
                    <p className={s.description} data-aos="zoom-in-up">{description}</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}