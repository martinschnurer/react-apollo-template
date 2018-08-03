import React, { PureComponent } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const ADD_PERSON = gql`
	mutation($person: PersonInput!) {
		createPerson(p: $person) {
			id firstName lastName
		}
	}  
`

const PERSONS = gql`
	{
		persons {
			id firstName lastName birthday
		}
	}
`

class RemoteMutator extends PureComponent {
	render() {
		return (
			<Mutation 
				mutation={ADD_PERSON}
				update={(cache, { data: { createPerson } }) => {
					const { persons } = cache.readQuery({ query: PERSONS });
					!createPerson.birthday && (createPerson.birthday = '')
					cache.writeQuery({
					  query: PERSONS,
					  data: { persons: [ createPerson,...persons] }
					});
				  }}
			>
				{(createPerson, { data }) => (
					<div>
						<form
							onSubmit={e => {
								e.preventDefault();
								createPerson({ variables: { person: {firstName: "Martin", lastName: "Schnurer", birthday: "1995-07-14"} } });
							
							}}
						>
							<input
								type="text"
							/>
							<button type="submit">Add Person</button>
						</form>
					</div>
				)}
    		</Mutation>
		)
	}
}

export default RemoteMutator
