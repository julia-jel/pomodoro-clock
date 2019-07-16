import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/* Import container and root reducer */
import Container from './containers/TimeHandlersContainer';
import rootReducer from './reducers';

const store = Redux.createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
