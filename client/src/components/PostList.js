import React, { Component } from "react";
import { connect } from "react-redux";

import PostListItem from "./PostListItem";
import { addPosts } from "../actions/postActions";

class PostList extends Component {
	componentDidMount() {
		this.props.addPosts();
	}

	render() {
		return (
			<div>
				<h1 className="p-3">Posts List Component</h1>
				{this.props.posts.map((post) => {
					return <PostListItem key={post._id} {...post} />;
				})}
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
		addPosts: () => dispatch(addPosts())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostList);
