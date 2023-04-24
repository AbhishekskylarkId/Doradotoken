import CarbonCreditSection from "../components/Home/CarbonCreditSection";
import CarRaceSection from "../components/Home/CarRaceSection";
import CombatGameSection from "../components/Home/CombatGameSection";
import ContactSection from "../components/Home/ContactSection";
import CountDownSection from "../components/Home/CountDownSection";
import HeroSection from "../components/Home/HeroSection";
import IconSection from "../components/Home/IconSection";
import PlayAndEarnSection from "../components/Home/PlayAndEarnSection";
import RoadMapSection from "../components/Home/RoadMapSection";
import TokenDistributionSection from "../components/Home/TokenDistributionSection";
import TokenEconomicSection from "../components/Home/TokenEconomicSection";
import WalletSection from "../components/Home/WalletSection";
import WelcomeSection from "../components/Home/WelcomeSection";
import WhitePaperSection from "../components/Home/WhitePaperSection";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";
import Meta from "../components/Meta/Meta";
import { useState , useEffect} from 'react';

export default function Home() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      function handleScroll() {
        if (window.pageYOffset > 0) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    function handleClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>
            <Meta title="Dorado" keywords="Dorado" description="Dorado" />

            <HeroSection />
            <WelcomeSection />
            <PlayAndEarnSection />
            <CarRaceSection />
            <IconSection />
            <CountDownSection />
            <CarbonCreditSection />
            <CombatGameSection />
            <WhitePaperSection />
            <WhyChooseUsSection />
            <TokenEconomicSection />
            <TokenDistributionSection />
            <RoadMapSection />
            <WalletSection />
            <ContactSection />

            <div className='scrolltop' style={{ display: showButton ? 'block' : 'none' }}>
      <div className='scroll icon'  onClick={handleClick}
      ><i className="fa fa-rocket" aria-hidden="true"></i></div>
    </div>
           
        </>
    );
}
