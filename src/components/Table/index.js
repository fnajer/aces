import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import RowWithModal from './RowWithModal';
import ButtonWithModal from './ButtonWithModal';

import { PATHS } from 'constants/tabs';

import { sortTowns, moveTown } from 'redux/actionCreators/sort';

const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  tr {
    cursor: pointer;
    height: 40px;
  }
  td {
    border: 1px solid #000;
  }
`;

function mapListToPath(townsList, path) {
  switch (path) {
    case PATHS.ALL:
      return [...townsList];  
    case PATHS.ACTIVE:
      return townsList.filter(town => town.active);  
    case PATHS.DELETED:
      return townsList.filter(town => !town.active);  
    default:
      return null;
  }
}

function TableComponent({ 
  townsList, columnNames, 
  error, sortTowns, moveTown 
}) {
  const history = useHistory();
  const path = history.location.pathname;

  function handleButton(event, town, toTop) {
    event.stopPropagation(); 
    moveTown(town, toTop);
  }

  let sortedList = mapListToPath(townsList, path);
  if (!sortedList) return null;

  return (
    <>
      {error && <h2>{error.message}</h2>}
      <button onClick={sortTowns}>Sort</button>
      <Table>
        <thead>
          <tr>
            {columnNames.map(columnName => (
              <th key={columnName}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedList.map(town => (
            <RowWithModal 
              key={town.name} 
              town={town}
            >
              <td>{town.name}</td>
              <td>{town.temperature}</td>
              <td>
                <button onClick={event => handleButton(event, town, true)}>
                   ∧
                </button>
              </td>
              <td>
                <button onClick={event => handleButton(event, town, false)}>
                  ∨
                </button>
              </td>
              <td>
                <ButtonWithModal 
                  town={town}
                >
                  {town.active ? 'Удалить' : 'Восстановить'}
                </ButtonWithModal>
              </td>
            </RowWithModal>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default connect(state => ({
  townsList: state.wheather.townsList,
  error: state.wheather.error,
  activeTab: state.tabs.activeTab,
}),
{ sortTowns, moveTown })(TableComponent);

