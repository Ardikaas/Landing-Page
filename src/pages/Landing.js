import About from "../components/About";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Testimoni from "../components/Testimoni"

const Landing = () => {
  return(
    <div>
      <Navbar />
      <Home />
      <About />
      <Testimoni />
      <Footer />
    </div>
  )
}

export default Landing;