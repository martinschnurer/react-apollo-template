import React from 'react'
import { ApolloConsumer } from 'react-apollo'


class Button extends React.PureComponent {
	
	render() {
		const { captionActive, client } = this.props

		return (
			<button 
				onClick={()=>client.writeData({data: {captionActive: !captionActive}})}
			>
				{ captionActive ? 'Disable caption':'Activate caption' }
			</button>
		)
	}
}


class ConsumerComponent extends React.PureComponent {
	render() {
		const { captionActive , textVal, client } = this.props

		return (
			<div>
				<input 
					type="text"
					value={textVal}
					onChange={(e) => client.writeData({data: {text: e.target.value}})}
				/>
				<Button client={client} captionActive={captionActive} />
			</div>
		)
	}
}


const Mutator = ({captionActive, textVal}) => {
	return (
		<div>
			<ApolloConsumer>
				{ (client) => 
					<ConsumerComponent 
						client={client} 
						captionActive={captionActive}
						textVal={textVal} 
					/> 
				}
			</ApolloConsumer>
		</div>
	)
}

export default Mutator