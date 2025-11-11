import Footer from "../components/Footer";
import ClimaPreview from "../components/ClimaPreview";
import NoticiasPreview from "../components/NoticiasPreview";
import Welcome from "../portada/Welcome";
import Integrantes from "../portada/Integrantes";
import "../portada/portada.css";

const Home = () => {
  return (
    <div className="flex home-wrapper">
      <Welcome
        titulo={"Desarrollo de sistemas web (front End)"}
        subtitulo={"Instituto de Formación Técnica Superior N° 29"}
        grupo={"Grupo 14"}
        bienvenida={
          "Bienvenidos a nuestra segunda entrega del trabajo práctico para Desarrollo Web. En esta ocasión migramos el trabajo práctico anterior a React + Vite. Los invitamos a ver cómo las iremos implementando a lo largo de las entregas."
        }
      />
      <Integrantes />
      <section className="home-updates">
        <div className="home-updates__header">
          <h2>Panel en vivo</h2>
          <p>Un resumen rápido del clima actual y titulares en español.</p>
        </div>
        <div className="home-updates__grid">
          <ClimaPreview />
          <NoticiasPreview />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
