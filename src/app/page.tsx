import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PI from "../components/PI";
import About from "@/components/About";
import Equipments from "@/components/Equipments";

export default function Home() {
  return (
    <div className="bg-gray-50 ">
      <Navbar />
      <Header />
      <div className="px-5 md:px-20 flex flex-col gap-10">
        <About />

        <PI />
        <Equipments />
      </div>
      <Footer />
    </div>
  );
}
