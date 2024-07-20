import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PI from "../components/PI";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="px-5 md:px-20 flex flex-col gap-10">
        <About />
        <PI />
      </div>
      <Footer />
    </div>
  );
}
