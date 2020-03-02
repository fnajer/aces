import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import Input from 'components/Input';
import Button from 'components/Button';
import Tabs from 'components/Tabs';
import Table from 'components/Table';

import loadTownWheather from 'redux/actionCreators/wheather';

import TABS_ITEMS from 'constants/tabs';

Modal.setAppElement('#root');

function App({ loadTownWheather }) {
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname !== '/')
      history.push('/');
  }, [history])

  return (
    <>
      <Input action={loadTownWheather} />
      <Button action={loadTownWheather}>Get</Button>
      <Tabs 
        items={TABS_ITEMS}
      />
      <Table 
        columnNames={['Town', 'Temperature']}
      />
    </>
  );
}

export default connect(null, { loadTownWheather })(App);
