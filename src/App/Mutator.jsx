import React from 'react'
import { ApolloConsumer } from 'react-apollo'

let tmp_foo;
let tmp_client;

class Button extends React.PureComponent {
	
	render() {
		const { foo, client } = this.props

		return (
			<button 
				onClick={()=>client.writeData({data: {captionActive: !foo}})}
			>
				{ foo ? 'Disable':'Activate' }
			</button>
		)
	}
}


class ConsumerComponent extends React.PureComponent {
	render() {
		const { foo , textVal, client } = this.props

		return (
			<div>
				<input 
					type="text"
					value={textVal}
					onChange={(e) => client.writeData({data: {text: e.target.value}})}
				/>
				<Button client={client} foo={foo} />
			</div>
		)
	}
}


const Mutator = ({foo, textVal}) => {
	return (
		<div>
			<ApolloConsumer>
				{ (client) => 
					<ConsumerComponent 
						client={client} 
						foo={foo} 
						textVal={textVal} 
					/> 
				}
			</ApolloConsumer>
		</div>
	)
}

export default Mutator