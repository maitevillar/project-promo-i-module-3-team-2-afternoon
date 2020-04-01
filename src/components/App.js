/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Footer from './Footer';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Footer />

      </div>
    );
  }
}

export default App;