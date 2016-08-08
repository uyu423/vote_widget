import React from 'react';

class Messages extends React.Component {
	render() {
		return this.props.messages.success ? (
			<div>
				{this.props.messages.success.map((message, index) => <div key={index} > {message.msg})}
			</div>
		) : this.props.messages.error ? (
				{this.props.messages.error.map((message, index) => <div key={index} > {message.msg})}
			</div>
		) : this.props.messages.info ? (
				{this.props.messages.info.map((message, index) => <div key={index} > {message.msg})}
			</div>
		) : null;
	}
}

export default Messages;
