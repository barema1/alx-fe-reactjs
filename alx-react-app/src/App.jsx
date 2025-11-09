import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile
        name="Gael"
        age="21"
        bio="Loves basketball and gyming."
      />
      <Footer />
    </>
  );
}

export default App;
