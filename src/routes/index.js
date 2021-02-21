import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Home from '../views/Home';
import Task from '../views/Task';

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route >
                        <Task />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
/*
 <div>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/task">Task</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/task">
                        <Task />
                    </Route>
                </Switch>
            </Router>
        </div>



//Origin
 <Router>
     <Switch>
         <Router path="/" exact component={Home} />
         <Router path="/task" exact component={Task} />
     </Switch>
 </Router>
*/