import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

const App = ({ data }) => {
 return (
    <div>
      <Header />
      <Navigation />
      <Main data={data} />
      <Footer />
    </div>
 );
};

export default App;