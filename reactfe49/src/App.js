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
import styleling from './StyleingComponent/Stylling';
import Stylling from './StyleingComponent/Stylling';
import RenderWithState from './RenderWithState/RenderWithState';
import BaiTapChonXe from './RenderWithState/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';


function App() {
  return (
    <div className="App">
     {/* <Btap1/> */}

    {/* <Btap2/> */}
    {/* <DataBinding/> */}
    {/* <HandleEven/> */}
    {/* <Stylling/> */}
    {/* <RenderWithState/> */}
    {/* <BaiTapChonXe/> */}
    <RenderWithMap/>
    </div>
  );
}

export default App;
