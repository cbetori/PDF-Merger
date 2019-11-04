import React, {useEffect, useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Options from "./components/Options"
import Run from "./components/Run"
import Files from "./components/Files"
import Header from "./components/Header"

function App() { 

  const [folderPath, folderPathSet] = useState()

  return (
    <div id="app">
      <div id="container">
        <Header/>
        <Options />
        <Files folderPath={folderPath} folderPathSet={folderPathSet} />
        <Run folderPath={folderPath} />
      </div>
    </div>
  );
}

export default App;
