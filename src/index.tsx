import ReactDOM from 'react-dom';
import React from 'react';
import ClickerCreater from 'components/ClickerCreater';
import { Provider } from 'react-redux';

import store from 'store/root';

ReactDOM.render(
  <Provider store={store}>
    <ClickerCreater />
  </Provider>,
  document.getElementById('root')
);

if(module.hot) {
  module.hot.accept();
}