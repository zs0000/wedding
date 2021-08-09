import s from "./Included.module.css"

export default function Included({
    includedtitle,
     includeddescription,
      first,
       second,
        third,
         fourth
        }) {
    return(
        <section>
        <div className={s.main}>
            <div className={s.responsive}>
                <div className={s.content}>
                    <div className={s.textbox} data-aos="zoom-in-down">
                    <h2 className={s.includedtitle}>
                        {includedtitle}
                    </h2>
                    <p className={s.includeddescription}>
                        {includeddescription}
                    </p>
                    </div>
                    <ul className={s.includedlist}>
                        <li className={s.includeditem} data-aos="zoom-in-left">{first}</li>
                        <li className={s.includeditem}data-aos="zoom-in-right">{second}</li>
                        <li className={s.includeditem}data-aos="zoom-in-left">{third}</li>
                        <li className={s.includeditem}data-aos="zoom-in-right">{fourth}</li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
    )
}