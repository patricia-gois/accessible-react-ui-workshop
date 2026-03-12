import Navbar from './components/Navbar/Navbar';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="app-container">
      {/* A Navbar fica fora do main porque é um elemento de navegação global */}
      <Navbar />

      {/* O id="main-content" é o "alvo" do nosso skip link de acessibilidade */}
      <main id="main-content" tabIndex="-1">
        <section style={{ padding: '4rem 5%', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Accessible Flow</h1>
          <p>
            This is an exercise focused on accessible navigation.
            Use the <strong>TAB</strong> key to navigate!
          </p>
          <div style={{ height: '150vh' }}>
            {/* Espaço extra para testar o comportamento do scroll e do skip link */}
            <p>Use ArrowDown / ArrowUp keys to scroll the page.</p>
          </div>
        </section>

        <section>
          <ContactForm />
        </section>

        <section>
        </section>

      </main>
    </div>
  );
}

export default App;