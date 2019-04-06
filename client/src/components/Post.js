import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { changeSelectedPost, deletePost } from "../actions/postActions";

class Post extends Component {
	state = {};

	componentDidMount() {
		const _id = this.props.match.params.id;
		this.props.changeSelectedPost(_id);
	}

	onClickRemoveHandler = (event) => {
		this.props.deletePost(this.props.post._id);
		this.setState({ redirect: true });
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to="/posts" />;
		}

		return (
			<div className="jumbotron p-4 my-4">
				<h1>{this.props.post.title}</h1>
				<h6>ID: {this.props.post._id}</h6>
				<p>{this.props.post.body}</p>
				<button className="btn btn-danger mx-1" onClick={this.onClickRemoveHandler}>
					Remove
				</button>

				<Link className="btn btn-success mx-1" to={`/edit/${this.props.post._id}`}>
					Edit
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
		changeSelectedPost: (_id) => dispatch(changeSelectedPost(_id)),
		deletePost: (_id) => dispatch(deletePost(_id))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Post);
