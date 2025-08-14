import Header from './components/layout/Header';
import Profile from './components/sections/Profile';
import Skills from './components/sections/Skills';
import Links from './components/sections/Links';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16 flex-grow">
        <article className="max-w-7xl mx-auto">
          <Profile />
          <Skills />
          <Links />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default App;
