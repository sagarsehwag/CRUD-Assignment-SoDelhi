import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deletePost } from "../actions/postActions";

class PostListItem extends Component {
	onClickRemoveHandler = (event) => {
		this.props.deletePost(this.props._id);
	};

	render() {
		return (
			<div className="p-4 jumbotron">
				<h3>{this.props.title}</h3>
				<p>{this.props.body}</p>
				<button className="btn btn-danger mx-1" onClick={this.onClickRemoveHandler}>
					Remove
				</button>

				<Link className="btn btn-success mx-1" to={`/edit/${this.props._id}`}>
					Edit
				</Link>

				<Link className="btn btn-primary mx-1" to={`/posts/${this.props._id}`}>
					Show Details
				</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		post: state.postObject.post,
		posts: state.postObject.posts
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (_id) => dispatch(deletePost(_id))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostListItem);
