import { useRoutes } from "./routes";

import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {

  const routes = useRoutes(true);

  return (

    <Router>

      <div className="container">{routes}</div>

    </Router>

  );

};

// ./routes.js 

import { Switch, Route, Redirect } from "react-router-dom";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Redirect path="/create" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path={"/"} exact>
        <AuthPage />
      </Route>
      <Redirect path={"/"} />
    </Switch>
  );
};