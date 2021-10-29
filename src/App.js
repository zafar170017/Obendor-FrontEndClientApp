import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter,Switch, Route,withRouter} from "react-router-dom";
import Navbar from './Component/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Component/sidebar/sidebar';
import Dashboard from './Component/Dashboard/Dashboard';
import ConvertImage from './Component/ConvertImage/ConvertImage';
import ImageOptimize from './Component/ImageOptimize/ImageOptimize';
import ManualFile from './Component/ManualUploader/ManualFile';
import faq from './Component/FAQ/faq';


class App extends React.Component {
  
  render() {
    var dashboard=false;
    if(dashboard==true){

      return (
        <BrowserRouter>
        <div className="App">
          <div>
          <Navbar />
          <div className="container-fluid h-100 p-0">
            <div>
              <div className="flex-row d-flex align-items-stretch m-0">
                <Sidebar />
          
                <Switch>
                  <Route exact path="/" component={withRouter(Dashboard)} />
                  <Route exact path="/ConvertImage" component={withRouter(ConvertImage)}  />
                  <Route exact path="/OptimizeImage" component={withRouter(ImageOptimize)}  />
                  <Route exact path="/ManualFile" component={withRouter(ManualFile)}  />
                  <Route exact path="/Faq" component={withRouter(faq)}  />
                </Switch>
               
              </div>
            </div>
          </div>
          </div>
        </div>
        </BrowserRouter>
      );
    }
    else{
      return( <div className="App">
       <ImageOptimize/>
      </div>
      );
    }

  }
}


export default App;
