import Home from "./components/Home";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ViewAll from "./components/ViewAll" ;
import Product_page from "./components/Product_page";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ViewAll" component={ViewAll} />
        <Route path="/:id" component={Product_page} />
      </Switch>
      
    </div>
  );
}

export default App;
