import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "react-bulma-components/dist/react-bulma-components.min.css";

import Homepage from "./Home/pages/Homepage";
import SelectMethodSelect from "./Scrape/pages/SelectMethodSelect";
import PrimaryKeyScrape from "./Scrape/pages/PrimaryKeyScrape";
import Parse from "./Parse/Pages/Parse"
import FileScrape from "./Scrape/pages/FileScrape";
import Credit from "./Miscellaneous/pages/Credit";
import Documentation from "./Miscellaneous/pages/Documentation";
import ExportSelect from "./Export/Pages/ExportSelect";


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <div>
                        <Route exact path="/" component={Homepage} />
                        <Route
                            exact
                            path="/scrape/:repositoryName"
                            component={SelectMethodSelect}
                        />
                        <Route
                            exact
                            path="/scrape-pk/:repositoryName"
                            component={PrimaryKeyScrape}
                        />
                        <Route
                            exact
                            path="/scrape-file/:repositoryName"
                            component={FileScrape}
                        />
                        <Route
                            exact
                            path="/parse/:repositoryName"
                            component={Parse}
                        />
                        <Route
                            exact
                            path="/export/:repositoryName"
                            component={ExportSelect}
                        />
                        <Route
                            exact
                            path="/credit"
                            component={Credit}
                        />
                        <Route
                            exact
                            path="/documentation"
                            component={Documentation}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
