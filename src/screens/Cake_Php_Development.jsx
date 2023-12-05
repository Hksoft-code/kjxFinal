import React from 'react'
import Benefits from '../component/ui/detailSection/Benefits'
import Process from '../component/ui/process'
import MoreServices from '../component/ui/services/moreService'
import About from "../component/ui/detailSection/about";
import HeroPage from "../component/ui/detailSection/heroSection"
import Team from "../component/ui/team"
import Contact from "../component/ui/contact";
import TitleBenefits from '../component/ui/detailSection/TitleBenefits';
import cakePhp from '../assets/cakephp-brands.png'

const Cake_Php_Development = () => {
  return (
    <>
      <HeroPage
        h1="CakePhp Framework"
        p="Reveal the real power of web-based solutions with a robust and object-oriented Cake php framework. Our team comprises a qualified team of developers who have the full knowledge of the cake php framework platform inside and out and are proficient in developing scalable, robust, and cherish-able web solutions."
        start="Next Gen"
        colored="CakePhp Framework"
        end="Beside Professional Excellence!"
        img={cakePhp}
      />

      <About
        dis="none"
        sub_description=""
        title="CakePHP"
        sub_title="About CakePHP Framework"
        description="Our skilled professional creates and delivers a feature-rich and visually appealing solution for your digital needs using the CakePHP Framework. Take your business to new heights with this contemporary CakePHP framework and get the best results from the comfort of your own home. Hire a CakePHP developer today from us to reach new heights."
      />

      <Team
        text="Want to Hire Developers?"
        disc="We create smarter apps for smarter businesses."
        bt="Hire Now!"
      />

      {/* <TitleBenefits
        sub_title="Benefits of CakePhp"
      /> */}

      {/* <Benefits/> */}

      <Process />

      <MoreServices />

      <Contact />


    </>
  )
}

export default Cake_Php_Development