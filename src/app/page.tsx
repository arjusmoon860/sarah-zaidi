import Header from "./components/HomePage/Header";
import WhyUs from "./components/HomePage/WhyUs";
import ProcedureVideo from "./components/HomePage/ProcedureVideo";
import AboutMe from "./components/HomePage/AboutMe";
import Socials from "./components/HomePage/Socials";
import ContactSection from "./components/HomePage/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <WhyUs />
      <ProcedureVideo />
      <Socials />
      <ContactSection />
      <Footer />
    </div>
  );
}
