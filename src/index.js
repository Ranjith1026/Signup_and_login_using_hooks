import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from "react-router-dom";

import Header from '../src/components/header/header';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
  <Header />
</BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
