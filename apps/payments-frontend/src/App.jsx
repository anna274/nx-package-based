import React from 'react';
// here you can get platform helper
import { getQDPTitle } from 'utils';
// here you can get vendor helper
// import { getQDPTitle } from '0be4f8de-647f-11eb-ae93-0242ac130002';

const App = () => {
  return <h1>{getQDPTitle()}</h1>;
};

export default App;
