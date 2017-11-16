import Header from './Header'

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #ddd'
}

const layout = (props) => (
	<div style={layoutStyle}>
		<Header />
		{props.children}
	</div>
)

export default layout
