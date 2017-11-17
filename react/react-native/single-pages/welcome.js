import React, { Components } from 'react'
import {
	StyleSheet,
	View,
	Image,
	StatusBar,
	Dimensions,
} from 'react-native'

import Tab from './Tab'

const { width, height } = Dimensions.get('window')

export default class Welcome extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		let { navigator } = this.props
		if(navigator) {
			setTimeout(() => {
				navigator.replace({
					name: 'Home',
					component: Tab
				})
			}, 1000)
		}
	}
	render() {
		<View style={{flex: 1}}>
			<StatusBar hidden={true} />
			<Image style={{width: width, height: height}}
				   source={require('../../img/welcome.png')}
				   resizeMode="stretch" />
		</View>
	}
}