import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'

import 'react-bulma-components/dist/react-bulma-components.min.css';

import Homepage from './Home/pages/Homepage'
import SelectMethodSelect from './Scrape/pages/SelectMethodSelect'
import PrimaryKeyScrape from './Scrape/pages/PrimaryKeyScrape'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/scrape/:repositoryName" component={SelectMethodSelect} />
          <Route exact path="/scrape-pk/:repositoryName" component={PrimaryKeyScrape} />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

