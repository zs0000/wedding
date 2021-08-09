import Container from '../Container/container'
import s from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={s.main}>
      <Container>
        <div className={s.contained}>
          <div className={s.textbox}>
            <p className={s.text}>
            Copyright 2021 © Sentry Bridge Web Design - Example Wedding Planners
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}