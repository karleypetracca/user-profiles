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
            divStyle = {
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                margin: "20px 0"
            };
            hoverStyle = { visibility: "visible"}
        } else {
            divStyle = {
				display: "flex",
				alignItems: "center",
				margin: "20px 0"
			};
            hoverStyle = { visibility: "collapse"};
        }
		return (
			<div
				style={divStyle}
				onMouseEnter={this.toggleHover.bind(this)}
				onMouseLeave={this.toggleHover.bind(this)}
			>
				<Icon className={this.props.iconClass} style={{ marginRight: "8px"}}/>
				<p style={hoverStyle}>
					<b>{this.props.title}:</b> {this.props.text}
				</p>
			</div>
		);
	}
}

export default Hover;