import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/common/Layout/layout'
import Container from '../components/common/Container/container'
import Intro  from '../components/common/Intro/Intro'
import Background from '../components/common/Background/Background'
import Contact from "../components/common/Contact/Contact"
import Offer from '../components/common/Offer/Offer'
import Partners from '../components/common/Partners/Partners'
import Sweets from '../components/common/Sweets/Sweets'
import Included from '../components/common/Included/Included'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  return (
   <Layout>
     <Head>
      <title>Century Wedding Planners - an Example Wedding Service Planner</title>
     
     </Head>
     <Container>
       <Background />
        <Intro
        introtitle="Your Special Day."
        introdescription="Let us take care of the tedious tasks, so you have more time to focus on the most memorable moments."
        />
        <Offer
        text="Main Services We Offer"
        description="A multitude of services, always offered, to fit your needs. From full service wedding planning and arrangements, 
        to assistance with other necessities like guest catering, professional photographers, arranging fittings, and more! "
         first="Full Service Wedding Package"
          firstservicedescription="We'll arrange everything from reserving the venue, managing budgets, arranging fittings, 
          personal stylists, live music or DJ's, Table and Room stylists, Decorations and theme, photographers and more. Tell us everything you need, and let the rest fall into place!"
           second="The 'Right-Hand' Package"
        secondservicedescription="Work closely with our expert staff, with over 7+ years of experience planning the most breath-taking weddings.
         Anything from sending out invites and arranging transportation, to a 'Right-Hand' personal assistant to be there for rehearsals, and your wedding day."
        />
        <Partners 
        Venue="Elegant Venues"
        Venuedescription="We partnered with Example Venues and Events to secure access to some of the most breath-taking venues in the World!
        With Venues in multiple states, it's highly likely we'll secure a deal on some grandiose venues."
        />
        <Sweets
        Sweets="Serenity's Sweets"
        Sweetsdescription="No need to worry about a cake! As part of our full service package, We work with a Designer Sweet's catering company to accomplish everything for styling the cake, to additional sweets for guests.
         This example sweet's company has over 10 year's of experience catering to hundreds of guests."
        />
        <Included
        includedtitle="Always Included"
        includeddescription="No matter what you choose from our selection of packages, every package is eligible for these free services, at no additional cost."
         first="Professional Photographers"
          second="Personal Planning Assistants"
           third="'Day of' Directors and Staff"
            fourth="Basic Venue (Upgradeable)"
        />
        <Contact 
        contacttitle="Book Appointment"
        contactdescription="If you're unsure of everything you need, or just want to request a quote, we'll set you up with a Personal Booking Assistant to discuss 
        planning. Be sure to include a brief summary of what you're looking for to receive the fastest response time!"
        />

<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
     </Container>
   </Layout>
  )
}
