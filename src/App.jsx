import React, { Component } from "react";

import {
  QueryRenderer,
  graphql
} from "react-relay";

import environment from "./environment";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Moje demo</h2>
        <QueryRenderer
          environment={environment}

          query={graphql`
            query AppQuery {
                postById(id: 3) {
                  headline
                }
            }
          `}

          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              console.log(props.postById);
              //return <Feed data={props.feed} />;
              return <p>Přísěvek č. 3 je: {props.postById.headline}</p>
            }
            return <div>Načítám...</div>;
          }}
        />
      </div>
    );
  }
}

export default App;
