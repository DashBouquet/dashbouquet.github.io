// Lib
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Store
import store from './store';

// Components
import SliderContainer from './containers/SliderContainer';

const App: React.FC = (): JSX.Element => (
  <Provider store={store}>
    <SliderContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
