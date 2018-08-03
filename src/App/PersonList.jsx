import React, { PureComponent as PC } from 'react'
import styled from 'styled-components'

const PersonRow = styled.div`
	background-color: #eee;
	padding: 15px;
	margin-bottom: 15px;
	border-radius: 8px;
`

const PersonContainer = styled.div`
	display: grid;
	${PersonRow}:hover {
		background-color: red;
		cursor: pointer;
	}
`

class PersonList extends PC {
	render() {
		const { persons } = this.props
	
		return (
			<PersonContainer>
			{
				persons.map((p, i) => (
					<PersonRow key={p.id}>{p.firstName} {p.lastName}</PersonRow>
				))	
			}	
			</PersonContainer>
		)
	}	
}

export default PersonList