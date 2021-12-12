import "./App.css";
import Home from "./Home/Home.js";
import Info from "./Info/Info.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/info" component={Info} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
