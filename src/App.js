import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-red">
      <Header />
      <HelloWorld name=" Kabeer" />
      <Footer />
      
    </div>
  );
}

export default App;
