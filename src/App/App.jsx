import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from 'styled-components'
import Mutator from './Mutator'
import PersonList from './PersonList'

const GET_PERSONS = gql`
  {
	captionActive @client
	text @client
	persons {
		id firstName lastName
		address {
			city
			state
			street
			streetNumber
		}
	}
  }
`;


const queryFn = ({ loading, error, data }) => {
	if (loading) {
		return <div>loading...</div>
	}
	if (error) {
		return <div> error </div>
	}

	return (
		<div>
			{
				data.captionActive 
				&& <h1>Helllllooooo {data.text}</h1>
			}
			<Mutator foo={data.captionActive} textVal={data.text} />
			<PersonList persons={data.persons} />
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