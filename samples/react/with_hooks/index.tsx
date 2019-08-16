// Lib
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Store
import store from './store';

// Components
import Slider from './components/Slider';

const App: React.FC = (): JSX.Element => (
  <Provider store={store}>
    <Slider />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
