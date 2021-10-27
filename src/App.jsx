import React from 'react'; //Import useState & useEffect from React

//Import the provider
import MyProvider from './context/MyProvider';

//Import the components
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

//Import the css
import './App.css';

//Define the App component
const App = () => {
  //Pass all relevant state and functions to the child components
  return (
    <MyProvider>
      <main>
        <Header />
        <Section />
        <Footer />
      </main>
    </MyProvider>
  );
};

export default App;
