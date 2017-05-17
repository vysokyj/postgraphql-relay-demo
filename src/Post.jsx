import React, { Component } from "react";

class Post extends Component {
  render() {
    let node = this.props.node;
    return (
      <p>{node.headline}</p>
    )
  }
}

export default Post;
