import React from 'react'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Mutator from './Mutator'
import PersonList from './PersonList'
import RemoteMutator from './RemoteMutator'

const GET_PERSONS = gql`
  {
	captionActive @client
	text @client
	persons {
		id firstName lastName birthday
	}
  }
`;


const queryFn = ({ loading, error, data }) => {
	if (loading) {
		return <div>Loading...</div>
	}
	if (error) {
		console.log(error)
		return <div> Some error occured. See console </div>
	}

	return (
		<div>
			{ data.captionActive && <h1>Hello {data.text}</h1> }
			<Mutator captionActive={data.captionActive} textVal={data.text} />
			<PersonList persons={data.persons} />
			<RemoteMutator />
		</div>
	)
}

class App extends React.Component {
	render() {
		return (
			<Query 
				query={GET_PERSONS}
			>
    			{ queryFn }
			</Query>	
		)
	}
}

export default App