import React, { Component } from "react";
import "bulma/css/bulma.css";
import { Icon } from "bloomer";

class Hover extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
		};
	}

	toggleHover() {

		this.setState({
            hover: !this.state.hover
        });
	}

	render() {
        let hoverStyle = {}, divStyle = {};
        if (this.state.hover) {
            divStyle = { cursor: "pointer" };
            hoverStyle = { visibility: "visible", cursor: "pointer" }
        } else {
            hoverStyle = { visibility: "collapse" };
        }
		return (
			<div
				style={{ display: "block" }} style={divStyle}
				onMouseEnter={this.toggleHover.bind(this)}
				onMouseLeave={this.toggleHover.bind(this)}
			>
				<Icon className={this.props.iconClass} style={divStyle} />
				<p style={hoverStyle}>
					<b>{this.props.title}:</b> {this.props.text}
				</p>
			</div>
		);
	}
}

export default Hover;