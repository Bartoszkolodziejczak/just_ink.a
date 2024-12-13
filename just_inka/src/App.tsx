import './App.css';
import Header from './components/Header';
import Section from './components/Section';


function App() {
  return (
    <>
    <Header />
    <Section title="O mnie" id="about"/>
    <Section title="Galeria" id="gallery"/>
    <Section title="Kontakt" id="contact"/>
    </>
  )
}

export default App;
