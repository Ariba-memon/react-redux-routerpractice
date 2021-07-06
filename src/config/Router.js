import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from '../containers/Home';
// import About from '../containers/About'
import profile from '../containers/profile';


function AppRouter(){
    return(
        <Router>
            <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="/about" component={About}/> */}
            <Route exact path="/profile/:username/:id" component={profile}/>
            </Switch>
        </Router>
    )
}
export default AppRouter;