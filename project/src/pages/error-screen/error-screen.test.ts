import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Component: ErrorScreen', () => {
  it('should render corretly', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
      </Provider>
    );

  });
})
