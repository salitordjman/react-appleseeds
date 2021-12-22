import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Homepage from './page/Homepage';
import Products from './page/Products';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/products" exact component={Products} />
          {/* <Route path="/Productdetail/:myId" exact component={ProductDetail} /> */}
          <Route path="/products/:myId" exact component={ProductDetail} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
