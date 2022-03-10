import React, {Component, Fragment} from 'react'


export default class App extends Component {

	render() {
		return (
            // Fragment 允许写 key，在参与遍历的时候用，空标签不接受任何属性
			<Fragment key={1}>
				<input type="text" />
                <input type="text" />
			</Fragment>
		)
	}
}
