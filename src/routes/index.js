import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Home from '../views/Home';
import Task from '../views/Task';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/task">
                    <Task />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
/* <div>
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
</div>
</Router>



//Origin
 <Router>
     <Switch>
         <Router path="/" exact component={Home} />
         <Router path="/task" exact component={Task} />
     </Switch>
 </Router>
*/