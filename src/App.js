import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import ProductPage from "./components/productHome";
import SelectedProduct from "./components/selectedProduct";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ProductPage} />
          <Route path="/product/:id" component={SelectedProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
