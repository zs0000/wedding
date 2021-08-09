
import s from "./Intro.module.css"



export default function Intro({introtitle, introdescription}) {
    return(
        <section>
        <div className={s.main}>
            
            <div className={s.responsive}>
                <div className={s.content}>
                    <div className={s.textbox}>
                    <h1 className={s.title} 
                    data-aos="flip-up"
                    >
                        {introtitle}
                    </h1>
                    <p className={s.description}
                    data-aos="fade-up">
                        {introdescription}
                    </p>
                    <a href="#test" className={s.button}>
                    Learn more
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}