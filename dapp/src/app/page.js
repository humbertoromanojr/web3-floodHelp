import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row ps-5">
          <p className="text-light">
            Ajude as vítimas de enchentes e demais desastres naturais.
            <br />
            <br />
            Help victims of floods and other natural disasters.
          </p>
        </div>
        <div className="p-4 mx-5"></div>
        <Footer />
      </div>
    </>
  );
}
