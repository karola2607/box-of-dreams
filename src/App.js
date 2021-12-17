import "./App.css";
import Home from "./components/Home/Home.js";
import Info from "./components/Info/Info.js";
import MyBox from "./components/MyBox/MyBox.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout.js";

function App() {
  return (
    <div>
      <header className="App-header">
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/info" component={Info} />
              <Route exact path="/my-box" component={MyBox} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
