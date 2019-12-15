import React from 'react';
import Header from '../Header/';
import Main from '../Main/';
import Footer from '../Footer/';
import '../index.scss';
import '../normalize.css';

function App(props) {
  return (
    <div>
      <Header user = {props.userData.user} />
      <Main avatar = {props.userData.avatar}/>
      <Footer />
    </div>
  );
}

export default App;
