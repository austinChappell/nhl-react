// External Dependencies
import React from 'react';

// Internal Dependencies
import AppContext from './context';
import Routes from './routes';
import BaseLayout from './components/layout/BaseLayout';

const App = () => (
  <AppContext>
    <BaseLayout>
      <Routes />
    </BaseLayout>
  </AppContext>
);

export default App;
