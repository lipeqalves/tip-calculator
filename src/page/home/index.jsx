
import CardForm from "../../components/CardForm";
import CardResultado from "../../components/CardResultado";
import "./home.css";
const Home = () => {
  return (
    <main className="container">
      <section className="container-card">
        <CardForm />
        <CardResultado />
      </section>
    </main>
  );
};

export default Home;
