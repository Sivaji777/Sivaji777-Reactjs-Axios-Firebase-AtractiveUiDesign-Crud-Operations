import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Task from './Task';
class Navigation extends Component {
render() {
	return (
	<Router>	
		<Routes>
				<Route exact index path='/login' element={< Login />}></Route>
				<Route exact path='/register' element={< Register  />}></Route>
				<Route exact path='/task' element={< Task  />}></Route>

				<Route exact path='*' element={< Register  />}></Route>
		</Routes>
	</Router>
);
}
}

export default Navigation;