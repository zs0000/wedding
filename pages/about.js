import Layout from "../components/common/Layout/layout"
import Container from "../components/common/Container/container"
import AboutComponent from "../components/common/AboutComponent/AboutComponent"
import Head from "next/head"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About() {
    return (
        <Layout>
            <Head>

            </Head>
            <Container>
                <AboutComponent
                title="About Us"
                description="This is an Example page where you can talk about everything from you experience, to your passion.
                 We encourage every client has an About page as it's a powerful tool to assure potential customers that they're in good hands.
                  The about us page often gives clients a place to highlight achievements with out it feeling out of place when featured in other places on their sites."
                />
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
            </Container>
        </Layout>
    )
}