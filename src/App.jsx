import React, { Component } from "react";
import Post from "./Post"

import {
  QueryRenderer,
  graphql
} from "react-relay";

import environment from "./environment";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Post List</h2>
        <QueryRenderer
          environment={environment}

          query={graphql`
            query AppQuery {
                allPosts(first: 5) {
                  totalCount
                  nodes {
                    id
                    rowId
                    headline
                    body
                    topic
                  }
                }
            }
          `}

          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              console.log(props.allPosts.nodes);
              //return <Feed data={props.feed} />;
              const nodes = props.allPosts.nodes.map((node) => <Post key={node.id} node={node}/>);
              return (<div>{nodes}</div>);
            }
            return <div>Načítám...</div>;
          }}
        />
      </div>
    );
  }
}

export default App;
