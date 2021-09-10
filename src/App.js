// import logo from './logo.svg';
// import React, {useState} from 'react';

import './App.css';
// import 'src/components/App.css';

import Header from './components/Header';
import Editor from './components/body';
import Footer from './components/footer';




function App() {
  // const [text, setText] = useState('')
  return (
   <div>
    <div className="header">
      <Header/>
    </div>
    <div>
      <Editor/>
    </div>
    <div className="footer">
      <Footer/>
    </div>
    
   </div>
  );
}

export default App;
