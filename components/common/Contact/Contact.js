import s from "./Contact.module.css"




export default function Contact({contacttitle, contactdescription}) {
    
   

    return(
        <div className={s.main}>
            <span id="contact"></span>
            <div className={s.content}>
                <div className={s.formbox}>
                   <div className={s.text}> 
                   <h2 className={s.contacttitle} data-aos="zoom-in-down">
                       {contacttitle}
                   </h2>
                   <p className={s.contactdescription} data-aos="fade-up">
                       {contactdescription}
                   </p>
                   </div>
                   <div className={s.buttonbox}>
                       <a 
                       href="mailto:sentrybridgedesigns@gmail.com"
                        rel="noopener noreferrer"
                         target="_blank"
                          className={s.contactbutton}
                          data-aos="flip-up"
                          >
                              Contact Us
                              </a>
                   </div>
                </div>
            </div>
        </div>
    )
}
