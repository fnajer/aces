import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { TabsList, TabsItem } from './elements';

import setTab from 'redux/actionCreators/tabs';

function Tabs({ activeTab, setTab, items }) {
  const history = useHistory();

  function handleClick(item) {
    setTab(item);
    history.push(item.routeName);
  }

  return (
    <TabsList>
      {items.map(item => (
        <TabsItem 
          key={item.name}
          active={activeTab.name === item.name}
          onClick={() => handleClick(item)}
        >
          {item.name}
        </TabsItem>
      ))}
    </TabsList>
  );
}

export default connect(state => ({
  activeTab: state.tabs.activeTab,
}), 
{ setTab }
)(Tabs);
