import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import Nav    from './ui/NavComponent';
import Footer from './ui/FooterComponent';


const App =({children}) => (
	<div>
		<div role="main">
			<Nav />
			<div>
				{children}
			</div>
		</div>
		<Footer />
	</div>
)

render((
	<div>
		<App />
	</div>
), document.getElementById('OT4KIDS'))

// render((
// 	<Router history={browserHistory}>
// 		<Route path="/" component={App}>
// 			<IndexRoute component={App}/>
// 		</Route>
// 	</Router>
// ), document.getElementById('OT4KIDS'))
