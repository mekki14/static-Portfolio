import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/contactSection'
import FooterSection from '../components/FooterSection'
import HeroSection from '../components/HeroSection'
import MyNavbar from '../components/Navbar'
import PortfolioSection from '../components/portofolioSection'
import ServicesSection from '../components/ServicesSection'
import TechSection from '../components/techSection'

const Home = () => {
  return (<>
    <MyNavbar/>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <TechSection/>
    <PortfolioSection/>
    <ContactSection/>
    <FooterSection/>
  </>
  )
}

export default Home