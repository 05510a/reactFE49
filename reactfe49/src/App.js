import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Components/Demo';
import DemoHeader from './Components/DemoHeader';
import Btap1 from './BaiTapLayout1/Btap1';
import Header from './BaiTapLayout1/Header';
import Btap2 from './Btap2/Btap2';
import DataBinding from './DataBinding/DataBinding';
import HandleEven from './HandelEvent/HandleEven';

function App() {
  return (
    <div className="App">
    {/* <Btap1/> */}

    {/* <Btap2/> */}
    {/* <DataBinding/> */}
    <HandleEven/>
    </div>
  );
}

export default App;
