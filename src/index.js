import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo'
import client from './apolloClient'

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>, 
	
	document.getElementById('root'));
registerServiceWorker();
