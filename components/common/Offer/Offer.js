import s from "./Offer.module.css"

// ..



export default function Offer({text,
     description,
      first,
       firstservicedescription,
        second,
     secondservicedescription
    }) {
     
    return(
        <section>

            <div  className={s.main}>
            
                <div className={s.responsive}>
                    <div className={s.textbox} data-aos="zoom-in" >
                    <span className={s.spannav}  id="test"></span>
                        <h2 className={s.text} >{text}</h2>
                        <p className={s.description}>{description}</p>
                    </div>

                    <div className={s.offers}>
                        <div className={s.card} data-aos="zoom-in-left" >

                            <h3 className={s.servicetitle}>
                            <a className={s.navlinks} href="#contact">
                            {first}
                            </a>
                            </h3>

                            <p className={s.servicedescription}>
                                {firstservicedescription}
                            </p>
                            <div className={s.navlink}>
                            <a  href="#contact">Contact Us</a>
                            </div>
                        </div>
                        <div className={s.card} data-aos="zoom-in-right">
    
                            <h3 className={s.servicetitle}>
                            <a href="#contact" className={s.navlinks}>
                            {second}
                            </a>
                            </h3>

                            <p className={s.servicedescription}>
                                {secondservicedescription}
                            </p>
                            <div className={s.navlink}>
                            <a  href="#contact">Contact Us</a>
                            </div>
                            </div>
                    </div>
                </div>

            </div>
        </section>
    )
}